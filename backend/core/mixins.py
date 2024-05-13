from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated, IsAdminUser


class IsAdminMixin:
    permission_classes = [IsAuthenticated, IsAdminUser]
    authentication_classes = [JWTAuthentication]

class IsAuthenticatedMixin:
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]