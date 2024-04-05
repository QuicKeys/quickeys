from core.mixins import (
    IsAdminMixin,
    CreateMixin,
    GetPutDeleteMixin,
    ListMixin
    )
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from ..serializers.item_type_serializers import ItemTypeSerializer
from core.models import ItemType


class BaseAPIView(IsAdminMixin, APIView):
    pass

class ItemTypeCreateAPIView(CreateMixin, BaseAPIView):
    def post(self, request):
        serializer = ItemTypeSerializer(data=request.data)
        return super().create(serializer)

class ItemTypeDetailAPIView(GetPutDeleteMixin, BaseAPIView):
    def get(self, request, item_type_id):
        instance = get_object_or_404(ItemType, item_type_id=item_type_id)
        serializer = ItemTypeSerializer(instance)
        return super().get(serializer)
    
    def put(self, request, item_type_id):
        instance = get_object_or_404(ItemType, item_type_id=item_type_id)
        serializer = ItemTypeSerializer(instance, data=request.data)
        return super().put(serializer)
    
    def delete(self, request, item_type_id):
        instance = get_object_or_404(ItemType, item_type_id=item_type_id)
        return super().delete(instance)

class ItemTypeListAPIView(ListMixin, BaseAPIView):
    def get(self, request):
        queryset = ItemType.objects.all().order_by('item_type_id')
        serializer = ItemTypeSerializer(queryset, many=True)
        return super().list(serializer)