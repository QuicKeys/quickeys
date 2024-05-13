from django.urls import path
from .views.user_profile_views import (
    UserProfileCreate,
    UserProfileListCreate,
    UserProfileRetrieveUpdateDestroy,
    UserProfileRetrieve,
    UserProfileList,
)
from .views.user_address_views import (
    UserAddressCreate,
    UserAddressListCreate,
    UserAddressRetrieveUpdateDestroy,
    UserAddressRetrieve,
    UserAddressList
)


urlpatterns = [
    path('create/', UserProfileCreate.as_view(), name='user-profile-create'),
    path('list/create/', UserProfileListCreate.as_view(), name='user-profile-list-create'),
    path('edit/<int:user_id>/', UserProfileRetrieveUpdateDestroy.as_view(), name='user-profile-edit'),
    path('view/<int:auth_user_id>/', UserProfileRetrieve.as_view(), name='user-profile-view'),
    path('list/', UserProfileList.as_view(), name='user-profile-list'),

    path('address/create/', UserAddressCreate.as_view(), name='user-address-create'),
    path('address/list/create/', UserAddressListCreate.as_view(), name='user-address-list-create'),
    path('address/edit/<int:user_address_id>/', UserAddressRetrieveUpdateDestroy.as_view(), name='user-address-edit'),
    path('address/view/<int:user_address_id>/', UserAddressRetrieve.as_view(), name='user-address-view'),
    path('address/list/', UserAddressList.as_view(), name='user-address-list'),
]