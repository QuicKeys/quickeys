# from core.mixins import (
#     CreateMixin,
#     GetPutDeleteMixin,
#     ListMixin
# )
# from django.shortcuts import get_object_or_404
# from ..serializers.user_profile_serializers import UserProfileInSerializer, UserProfileOutSerializer
# from core.models import UserProfile
# from core.views import BaseAPIView


# class UserProfileCreateAPIView(CreateMixin, BaseAPIView):
#     def post(self, request):
#         serializer = UserProfileInSerializer(data=request.data)
#         return super().post(serializer)

# class UserProfileDetailAPIView(GetPutDeleteMixin, BaseAPIView):
#     def get(self, request, user_id):
#         instance = get_object_or_404(UserProfile, user_id=user_id)
#         serializer = UserProfileOutSerializer(instance)
#         return super().get(serializer)
    
#     def patch(self, request, user_id):
#         instance = get_object_or_404(UserProfile, user_id=user_id)
#         serializer = UserProfileInSerializer(instance, data=request.data, partial=True)
#         return super().patch(serializer)
    
#     def delete(self, request, user_id):
#         instance = get_object_or_404(UserProfile, user_id=user_id)
#         return super().delete(instance)

# class UserProfileListAPIView(ListMixin, BaseAPIView):
#     def get(self, request):
#         queryset = UserProfile.objects.all().order_by('user_id')
#         serializer = UserProfileOutSerializer(queryset, many=True)
#         return super().list(serializer)