from core.mixins import (
    CreateMixin,
    GetPutDeleteMixin,
    ListMixin
    )
from django.shortcuts import get_object_or_404
from ..serializers.item_type_serializers import ItemTypeInputSerializer, ItemTypeOutputSerializer
from core.models import ItemType
from core.views import BaseAPIView


class ItemTypeCreateAPIView(CreateMixin, BaseAPIView):
    def post(self, request):
        serializer = ItemTypeInputSerializer(data=request.data)
        return super().post(serializer)

class ItemTypeDetailAPIView(GetPutDeleteMixin, BaseAPIView):
    def get(self, request, item_type_id):
        instance = get_object_or_404(ItemType, item_type_id=item_type_id)
        serializer = ItemTypeOutputSerializer(instance)
        return super().get(serializer)
    
    def patch(self, request, item_type_id):
        instance = get_object_or_404(ItemType, item_type_id=item_type_id)
        serializer = ItemTypeInputSerializer(instance, data=request.data, partial=True)
        return super().patch(serializer)
    
    def delete(self, request, item_type_id):
        instance = get_object_or_404(ItemType, item_type_id=item_type_id)
        return super().delete(instance)

class ItemTypeListAPIView(ListMixin, BaseAPIView):
    def get(self, request):
        queryset = ItemType.objects.all().order_by('item_type_id')
        serializer = ItemTypeOutputSerializer(queryset, many=True)
        return super().list(serializer)