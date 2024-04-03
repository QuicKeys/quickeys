from rest_framework import serializers
from db_models.models import AuthUser


class UserSignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = AuthUser
        fields = ['id','first_name', 'last_name', 'email', 'password', 'date_joined']
        read_only_fields = ['id', 'date_joined']
        extra_kwargs = {'password': {'write_only': True}}

class UserLogInSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=191)
    password = serializers.CharField()