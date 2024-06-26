from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken, AccessToken
from ..serializers import UserSignUpSerializer, UserLogInSerializer
from rest_framework_simplejwt.views import TokenRefreshView


class SignUpView(APIView):
    def post(self, request):
        serializer = UserSignUpSerializer(data=request.data)
        if serializer.is_valid():
            try:
                account = User.objects.create_user(
                    username=request.data['email'],
                    first_name=request.data['first_name'],
                    last_name=request.data['last_name'],
                    email=request.data['email'],
                    password=request.data['password']
                )
                return Response({'message': 'User created successfully.'})
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LogInView(APIView):
    def post(self, request):
        serializer = UserLogInSerializer(data=request.data)
        if serializer.is_valid():
            account = authenticate(request, username=request.data['username'], password=request.data['password'])
            if account is not None:
                # login(request, account)

                # Generate token
                refresh = RefreshToken.for_user(account)

                response = Response({'message': 'Login successful'})
                response.set_cookie('access', refresh.access_token, httponly=True, samesite='None', secure=True)
                response.set_cookie('refresh', str(refresh), httponly=True, samesite='None', secure=True)
                
                return response
            else:
                return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LogOutView(APIView):
    def post(self, request):
        refresh_token = request.COOKIES.get('refresh')

        if refresh_token is None:
            return Response({'error': 'No refresh token found'}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            token = RefreshToken(refresh_token)        
            token.blacklist()
        except Exception as e:
            return Response({'error': 'Invalid token'}, status=status.HTTP_400_BAD_REQUEST)
        
        response = Response({'message': 'Logout successful'})
        response.set_cookie('access', expires=0, max_age=0, secure=True, samesite='None')
        response.set_cookie('refresh', expires=0, max_age=0, secure=True, samesite='None')

        return response

class CurrentUserView(APIView):
    def post(self, request):
        access_token = request.COOKIES.get('access')

        if access_token is None:
            return Response({'error': 'No access token found'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            decoded_token = AccessToken(access_token).payload
            user_id = decoded_token['user_id']
        except Exception as e:
            return Response({'error': 'Invalid token'}, status=status.HTTP_400_BAD_REQUEST)
        
        return Response({'user_id': user_id}, status=status.HTTP_200_OK, content_type='application/json')

class CustomTokenRefreshView(TokenRefreshView):
    def post(self, request, *args, **kwargs):
        try:
            refresh = request.COOKIES.get('refresh')
            if not refresh:
                return Response({"error": "No refresh token found in cookies"}, status=status.HTTP_400_BAD_REQUEST)

            try:
                refresh_token = RefreshToken(refresh)
                new_access = str(refresh_token.access_token)
                new_refresh = str(refresh_token)
            except Exception as e:
                return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

            response = Response({"detail": "Token refreshed successfully", 'access': new_access})
            response.set_cookie('access', new_access, httponly=True, samesite='None', secure=True)
            response.set_cookie('refresh', new_refresh, httponly=True, samesite='None', secure=True)

            return response
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

class RetrieveAccessToken(APIView):
    def post(self, request):
        access = request.COOKIES.get('access')

        if access is None:
            return Response({'error': 'No access token found'}, status=status.HTTP_400_BAD_REQUEST)
        
        return Response({'access': access})