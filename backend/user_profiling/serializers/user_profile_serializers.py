from rest_framework import serializers
from django.contrib.auth.models import User
from core.models import UserProfile


class AuthUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email', 'date_joined']

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['user_id', 'auth_user', 'birthdate', 'contact_no']

    def to_representation(self, instance):
        serialized_data = super().to_representation(instance)
        serialized_data['auth_user'] = AuthUserSerializer(instance.auth_user).data
        return serialized_data