from django.urls import path
from .views.user_profile_views import (
    UserProfileCreateAPIView,
    UserProfileDetailAPIView,
    UserProfileListAPIView
)


urlpatterns = [
    # User Profile API Endpoint URLs
    path('profile/create/', UserProfileCreateAPIView.as_view(), name='user-profile-create'),
    path('profile/view/<int:user_id>/', UserProfileDetailAPIView.as_view(), name='user-profile-detail'),
    path('profile/edit/<int:user_id>/', UserProfileDetailAPIView.as_view(), name='user-profile-edit'),
    path('profile/delete/<int:user_id>/', UserProfileDetailAPIView.as_view(), name='user-profile-delete'),
    path('profile/list/', UserProfileListAPIView.as_view(), name='user-profile-list'),
]