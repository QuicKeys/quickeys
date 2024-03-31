from django.urls import path
from .views.signup_views import signup, signup_success
from .views.login_views import login_func, login_success

urlpatterns = [
    path('signup/', signup, name='signup'),
    path('signup-success/', signup_success, name='signup_success'),
    path('login/', login_func, name='login'),
    path('login-success/', login_success, name='login-success'),
]