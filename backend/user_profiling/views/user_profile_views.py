from core.models import UserProfile
from rest_framework import generics
from ..serializers import UserProfileSerializer
from core.views import BaseAdminAPIView, BaseAuthenticatedAPIView


class UserProfileCreate(BaseAuthenticatedAPIView, generics.CreateAPIView):
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

class UserProfileList(BaseAuthenticatedAPIView, generics.ListAPIView):
    serializer_class = UserProfileSerializer

    # Sort by item property attribute
    def get_queryset(self):
        queryset = UserProfile.objects.all()

        # Filter by auth user ID
        # EXAMPLE: /users/profile/list/?auth_user_id=1
        #          /users/profile/list/?auth_user_id=1,2
        auth_user_id = self.request.query_params.get('auth_user_id', None)
        if auth_user_id is not None:
            auth_user_id_list = auth_user_id.split(',')
            queryset = queryset.filter(auth_user_id__in=auth_user_id_list)

        sort_by = self.request.query_params.get('sort_by', None)
        if sort_by is not None:
            descending = sort_by.startswith('-')
            field = sort_by.lstrip('-')
            queryset = queryset.order_by(f'{"-" if descending else ""}{field}')

        return queryset