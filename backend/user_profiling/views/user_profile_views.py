from core.models import UserProfile
from rest_framework import generics
from ..serializers import UserProfileSerializer
from core.views import BaseAdminAPIView, BaseAuthenticatedAPIView


class UserProfileCreate(BaseAdminAPIView, generics.CreateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

class UserProfileListCreate(BaseAdminAPIView, generics.ListCreateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

class UserProfileRetrieveUpdateDestroy(BaseAdminAPIView, generics.RetrieveUpdateDestroyAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    lookup_field = 'user_id'
    
class UserProfileRetrieve(BaseAuthenticatedAPIView, generics.RetrieveAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    lookup_field = 'auth_user_id'

class UserProfileList(BaseAdminAPIView, generics.ListAPIView):
    serializer_class = UserProfileSerializer

    # Sort by item property attribute
    def get_queryset(self):
        queryset = UserProfile.objects.all()
        sort_by = self.request.query_params.get('sort_by', None)
        if sort_by is not None:
            descending = sort_by.startswith('-')
            field = sort_by.lstrip('-')
            queryset = queryset.order_by(f'{"-" if descending else ""}{field}')

        return queryset