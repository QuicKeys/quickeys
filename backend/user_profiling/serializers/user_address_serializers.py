from rest_framework import serializers
from user_profiling.models import UserAddress
from .user_profile_serializers import UserProfileSerializer


class UserAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAddress
        fields = ['user_address_id', 'user', 'user_address']

    def to_representation(self, instance):
        serialized_data = super().to_representation(instance)
        serialized_data['user'] = UserProfileSerializer(instance.user).data
        return serialized_data