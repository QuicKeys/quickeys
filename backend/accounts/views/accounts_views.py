from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from quickeys.settings import JWT_AUTH_COOKIE
from ..serializers.accounts_serializers import (
    UserSignUpSerializer,
    UserLogInSerializer
)
from rest_framework_simplejwt.tokens import RefreshToken


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
                response.set_cookie(JWT_AUTH_COOKIE, refresh.access_token, httponly=True)
                response.set_cookie('refresh_token', str(refresh), httponly=True)

                return response
            else:
                return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
