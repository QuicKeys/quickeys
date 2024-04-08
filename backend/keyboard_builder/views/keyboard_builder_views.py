# from core.mixins import (
#     CreateMixin,
#     GetPutDeleteMixin,
#     ListMixin
# )
# from django.shortcuts import get_object_or_404
# from ..serializers.keyboard_builder_serializers import (
#     KeyboardBuilderInSerializer,
#     KeyboardBuilderOutSerializer,
#     KeyboardBuilderListOutSerializer,
#     KeyboardBuilderItemInSerializer,
#     KeyboardBuilderItemOutSerializer,
#     KeyboardBuilderItemListOutSerializer

# )
# from core.models import KeyboardBuilder, KeyboardBuilderItem
# from core.views import BaseAPIView


# # Keyboard Builder
# class KeyboardBuilderCreateAPIView(CreateMixin, BaseAPIView):
#     def post(self, request):
#         serializer = KeyboardBuilderInSerializer(data=request.data)
#         return super().post(serializer)

# class KeyboardBuilderDetailAPIView(GetPutDeleteMixin, BaseAPIView):
#     def get(self, request, keyboard_builder_id):
#         instance = get_object_or_404(KeyboardBuilder, keyboard_builder_id=keyboard_builder_id)
#         serializer = KeyboardBuilderOutSerializer(instance)
#         return super().get(serializer)
    
#     def patch(self, request, keyboard_builder_id):
#         instance = get_object_or_404(KeyboardBuilder, keyboard_builder_id=keyboard_builder_id)
#         serializer = KeyboardBuilderInSerializer(instance, data=request.data, partial=True)
#         return super().patch(serializer)
    
#     def delete(self, request, keyboard_builder_id):
#         instance = get_object_or_404(KeyboardBuilder, keyboard_builder_id=keyboard_builder_id)
#         return super().delete(instance)

# class KeyboardBuilderListAPIView(ListMixin, BaseAPIView):
#     def get(self, request):
#         queryset = KeyboardBuilder.objects.all().order_by('keyboard_builder_id')
#         serializer = KeyboardBuilderListOutSerializer(queryset, many=True)
#         return super().list(serializer)    

# class UserKeyboardBuilderListAPIView(ListMixin, BaseAPIView):
#     def get(self, request, user_id):
#         queryset = KeyboardBuilder.objects.filter(user_id=user_id).order_by('keyboard_builder_id')
#         serializer = KeyboardBuilderListOutSerializer(queryset, many=True)
#         return super().list(serializer)

# # Keyboard Builder Item
# class KeyboardBuilderItemCreateAPIView(CreateMixin, BaseAPIView):
#     def post(self, request):
#         serializer = KeyboardBuilderItemInSerializer(data=request.data)
#         return super().post(serializer)

# class KeyboardBuilderItemDetailAPIView(GetPutDeleteMixin, BaseAPIView):
#     def get(self, request, keyboard_builder_item_id):
#         instance = get_object_or_404(KeyboardBuilderItem, keyboard_builder_item_id=keyboard_builder_item_id)
#         serializer = KeyboardBuilderItemOutSerializer(instance)
#         return super().get(serializer)
    
#     def patch(self, request, keyboard_builder_item_id):
#         instance = get_object_or_404(KeyboardBuilderItem, keyboard_builder_item_id=keyboard_builder_item_id)
#         serializer = KeyboardBuilderItemInSerializer(instance, data=request.data, partial=True)
#         return super().patch(serializer)
    
#     def delete(self, request, keyboard_builder_item_id):
#         instance = get_object_or_404(KeyboardBuilderItem, keyboard_builder_item_id=keyboard_builder_item_id)
#         return super().delete(instance)

# class KeyboardBuilderItemListAPIView(ListMixin, BaseAPIView):
#     def get(self, request, keyboard_builder_id):
#         queryset = KeyboardBuilderItem.objects.filter(keyboard_builder_id=keyboard_builder_id).order_by('keyboard_builder_item_id')
#         serializer = KeyboardBuilderItemListOutSerializer(queryset, many=True)
#         return super().list(serializer)