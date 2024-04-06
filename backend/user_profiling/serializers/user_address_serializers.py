from rest_framework import serializers
from core.models import UserAddress
from .user_profile_serializers import UserProfileOutSerializer


class UserAddressInSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAddress
        fields = ['user', 'user_address']

class UserAddressOutSerializer(serializers.ModelSerializer):
    user = UserProfileOutSerializer(read_only=True)

    class Meta:
        model = UserAddress
        fields = ['user_address_id', 'user', 'user_address', 'created_at']

class UserAddressListOutSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAddress
        fields = ['user_address', 'created_at']