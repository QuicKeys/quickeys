from core.mixins import (
    CreateMixin,
    GetPutDeleteMixin,
    ListMixin
    )
from django.shortcuts import get_object_or_404
from ..serializers.item_type_serializers import ItemTypeInSerializer, ItemTypeOutSerializer
from core.models import ItemType
from core.views import BaseAPIView


class ItemTypeCreateAPIView(CreateMixin, BaseAPIView):
    def post(self, request):
        serializer = ItemTypeInSerializer(data=request.data)
        return super().post(serializer)

class ItemTypeDetailAPIView(GetPutDeleteMixin, BaseAPIView):
    def get(self, request, item_type_id):
        instance = get_object_or_404(ItemType, item_type_id=item_type_id)
        serializer = ItemTypeOutSerializer(instance)
        return super().get(serializer)
    
    def patch(self, request, item_type_id):
        instance = get_object_or_404(ItemType, item_type_id=item_type_id)
        serializer = ItemTypeInSerializer(instance, data=request.data, partial=True)
        return super().patch(serializer)
    
    def delete(self, request, item_type_id):
        instance = get_object_or_404(ItemType, item_type_id=item_type_id)
        return super().delete(instance)

class ItemTypeListAPIView(ListMixin, BaseAPIView):
    def get(self, request):
        queryset = ItemType.objects.all().order_by('item_type_id')
        serializer = ItemTypeOutSerializer(queryset, many=True)
        return super().list(serializer)