from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework import status


class IsAdminMixin:
    permission_classes = [IsAuthenticated, IsAdminUser]
    authentication_classes = [JWTAuthentication]

class CreateMixin:
    def post(self, serializer):
        if serializer.is_valid():
            serializer.save()
            return Response({'id': serializer.instance.pk}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class GetPutDeleteMixin:
    def get(self, serializer):
        return Response(serializer.data)
    
    def patch(self, serializer):
        if  serializer.is_valid():
            serializer.save()
            return Response({'success': True})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, instance):
        instance.delete()
        return Response({'success': True})

class ListMixin:
    def list(self, serializer):
        return Response(serializer.data)