from ..models import UserAddress
from rest_framework import generics
from ..serializers.user_address_serializers import UserAddressSerializer
from core.views import BaseAPIView


class UserAddressCreate(BaseAPIView, generics.CreateAPIView):
    queryset = UserAddress.objects.all()
    serializer_class = UserAddressSerializer

class UserAddressListCreate(BaseAPIView, generics.ListCreateAPIView):
    queryset = UserAddress.objects.all()
    serializer_class = UserAddressSerializer

class UserAddressRetrieveUpdateDestroy(BaseAPIView, generics.RetrieveUpdateDestroyAPIView):
    queryset = UserAddress.objects.all()
    serializer_class = UserAddressSerializer
    lookup_field = 'user_address_id'

class UserAddressRetrieve(BaseAPIView, generics.RetrieveAPIView):
    queryset = UserAddress.objects.all()
    serializer_class = UserAddressSerializer
    lookup_field = 'user_address_id'

class UserAddressList(BaseAPIView, generics.ListAPIView):
    serializer_class = UserAddressSerializer

    # Sort by user address attribute
    def get_queryset(self):
        queryset = UserAddress.objects.all()

        # Filter by user
        user = self.request.query_params.get('user', None)
        if user is not None:
            queryset = queryset.filter(user=user)
        
        # Sort by user address attribute
        sort_by = self.request.query_params.get('sort_by', None)
        if sort_by is not None:
            descending = sort_by.startswith('-')
            field = sort_by.lstrip('-')
            queryset = queryset.order_by(f'{"-" if descending else ""}{field}')

        return queryset