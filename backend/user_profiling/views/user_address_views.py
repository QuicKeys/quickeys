from core.models import UserAddress
from rest_framework import generics
from ..serializers import UserAddressSerializer
from core.views import BaseAdminAPIView, BaseAuthenticatedAPIView


class UserAddressCreate(BaseAuthenticatedAPIView, generics.CreateAPIView):
    queryset = UserAddress.objects.all()
    serializer_class = UserAddressSerializer

class UserAddressListCreate(BaseAdminAPIView, generics.ListCreateAPIView):
    queryset = UserAddress.objects.all()
    serializer_class = UserAddressSerializer

class UserAddressRetrieveUpdateDestroy(BaseAdminAPIView, generics.RetrieveUpdateDestroyAPIView):
    queryset = UserAddress.objects.all()
    serializer_class = UserAddressSerializer
    lookup_field = 'user_address_id'

class UserAddressRetrieve(BaseAuthenticatedAPIView, generics.RetrieveAPIView):
    queryset = UserAddress.objects.all()
    serializer_class = UserAddressSerializer
    lookup_field = 'user_id'

class UserAddressList(BaseAdminAPIView, generics.ListAPIView):
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