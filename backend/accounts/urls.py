from django.urls import path
from .views.accounts_views import (
    SignUpView,
    LogInView,
    LogOutView,
    CurrentUserView,
    CustomTokenRefreshView,
    RetrieveAccessToken
)


urlpatterns = [
    path('signup/', SignUpView.as_view(), name='signup'),
    path('login/', LogInView.as_view(), name='login'),
    path('logout/', LogOutView.as_view(), name='logout'),
    path('current-user/', CurrentUserView.as_view(), name='current-user'),
    path('refresh/', CustomTokenRefreshView.as_view(), name='refresh'),
    path('retrieve-access/', RetrieveAccessToken.as_view(), name='retrieve-access')
]