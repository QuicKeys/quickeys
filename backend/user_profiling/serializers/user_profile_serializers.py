# from rest_framework import serializers
# from core.models import AuthUser, UserProfile


# class AuthUserOutSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = AuthUser
#         fields = ['username', 'first_name', 'last_name', 'email', 'date_joined']
#         read_only_fields = fields

# class UserProfileInSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = UserProfile
#         fields = ['auth_user', 'birthdate', 'contact_no']

# class UserProfileOutSerializer(serializers.ModelSerializer):
#     auth_user = AuthUserOutSerializer(read_only=True)

#     class Meta:
#         model = UserProfile
#         fields = ['auth_user', 'birthdate', 'contact_no']