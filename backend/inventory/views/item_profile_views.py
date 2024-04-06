from core.mixins import (
    CreateMixin,
    GetPutDeleteMixin,
    ListMixin
)
from django.shortcuts import get_object_or_404
from ..serializers.item_profile_serializers import ItemInSerializer, ItemOutSerializer
from core.models import Item
from core.views import BaseAPIView


class ItemCreateAPIView(CreateMixin, BaseAPIView):
    def post(self, request):
        serializer = ItemInSerializer(data=request.data)
        return super().post(serializer)

class ItemDetailAPIView(GetPutDeleteMixin, BaseAPIView):
    def get(self, request, item_id):
        instance = get_object_or_404(Item, item_id=item_id)
        serializer = ItemOutSerializer(instance)
        return super().get(serializer)
    
    def patch(self, request, item_id):
        instance = get_object_or_404(Item, item_id=item_id)
        serializer = ItemInSerializer(instance, data=request.data, partial=True)
        return super().patch(serializer)
    
    def delete(self, request, item_id):
        instance = get_object_or_404(Item, item_id=item_id)
        return super().delete(instance)

class ItemListAPIView(ListMixin, BaseAPIView):
    def get(self, request):
        queryset = Item.objects.all().order_by('item_id')
        serializer = ItemOutSerializer(queryset, many=True)
        return super().list(serializer)