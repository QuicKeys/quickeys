# from django.urls import path
# from .views.user_profile_views import (
#     UserProfileCreateAPIView,
#     UserProfileDetailAPIView,
#     UserProfileListAPIView
# )
# from .views.user_address_views import (
#     UserAddressCreateAPIView,
#     UserAddressDetailAPIView,
#     UserAddressListAPIView
# )


# urlpatterns = [
#     # User Profile API Endpoint URLs
#     path('profile/create/', UserProfileCreateAPIView.as_view(), name='user-profile-create'),
#     path('profile/view/<int:user_id>/', UserProfileDetailAPIView.as_view(), name='user-profile-detail'),
#     path('profile/edit/<int:user_id>/', UserProfileDetailAPIView.as_view(), name='user-profile-edit'),
#     path('profile/delete/<int:user_id>/', UserProfileDetailAPIView.as_view(), name='user-profile-delete'),
#     path('profile/list/', UserProfileListAPIView.as_view(), name='user-profile-list'),

#     #User Address API Endpoint URLs
#     path('profile/address/create/', UserAddressCreateAPIView.as_view(), name='user-address-create'),
#     path('profile/<int:user_id>/address/view/<int:user_address_id>/', UserAddressDetailAPIView.as_view(), name='user-address-detail'),
#     path('profile/<int:user_id>/address/edit/<int:user_address_id>/', UserAddressDetailAPIView.as_view(), name='user-address-edit'),
#     path('profile/<int:user_id>/address/delete/<int:user_address_id>/', UserAddressDetailAPIView.as_view(), name='user-address-delete'),
#     path('profile/<int:user_id>/address/list/', UserAddressListAPIView.as_view(), name='user-address-list'),
# ]