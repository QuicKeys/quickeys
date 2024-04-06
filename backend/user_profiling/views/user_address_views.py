from core.mixins import (
    CreateMixin,
    GetPutDeleteMixin,
    ListMixin
)
from django.shortcuts import get_object_or_404
from ..serializers.user_address_serializers import (
    UserAddressInSerializer,
    UserAddressOutSerializer,
    UserAddressListOutSerializer
)
from core.models import UserAddress
from core.views import BaseAPIView


class UserAddressCreateAPIView(CreateMixin, BaseAPIView):
    def post(self, request):
        serializer = UserAddressInSerializer(data=request.data)
        return super().post(serializer)

class UserAddressDetailAPIView(GetPutDeleteMixin, BaseAPIView):
    def get(self, request, user_id, user_address_id):
        instance = get_object_or_404(UserAddress, user_id=user_id, user_address_id=user_address_id)
        serializer = UserAddressOutSerializer(instance)
        return super().get(serializer)
    
    def patch(self, request, user_id, user_address_id):
        instance = get_object_or_404(UserAddress, user_id=user_id, user_address_id=user_address_id)
        serializer = UserAddressInSerializer(instance, data=request.data, partial=True)
        return super().patch(serializer)
    
    def delete(self, request, user_id, user_address_id):
        instance = get_object_or_404(UserAddress, user_id=user_id, user_address_id=user_address_id)
        return super().delete(instance)

class UserAddressListAPIView(ListMixin, BaseAPIView):
    def get(self, request, user_id):
        queryset = UserAddress.objects.filter(user_id=user_id).order_by('user_address_id')
        serializer = UserAddressListOutSerializer(queryset, many=True)
        return super().list(serializer)