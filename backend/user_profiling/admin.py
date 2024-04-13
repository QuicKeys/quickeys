from django.contrib import admin
from .models import UserAddress, UserProfile


admin.site.register(UserAddress)
admin.site.register(UserProfile)