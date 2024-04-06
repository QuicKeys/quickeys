from core.mixins import (
    IsAdminMixin,
    CreateMixin,
    GetPutDeleteMixin,
    ListMixin
)
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from ..serializers.item_profile_serializers import (
    ItemInputSerializer,
    ItemOutputSerializer,
    ItemPropertySerializer,
    ItemPropertyValueSerializer
)
from core.models import (
    Item,
    ItemProperty,
    ItemPropertyValue
)


class BaseAPIView(IsAdminMixin, APIView):
    pass

# Item Profiling
class ItemCreateAPIView(CreateMixin, BaseAPIView):
    def post(self, request):
        serializer = ItemInputSerializer(data=request.data)
        return super().post(serializer)

class ItemDetailAPIView(GetPutDeleteMixin, BaseAPIView):
    def get(self, request, item_id):
        instance = get_object_or_404(Item, item_id=item_id)
        serializer = ItemOutputSerializer(instance)
        return super().get(serializer)
    
    def patch(self, request, item_id):
        instance = get_object_or_404(Item, item_id=item_id)
        serializer = ItemInputSerializer(instance, data=request.data, partial=True)
        return super().patch(serializer)
    
    def delete(self, request, item_id):
        instance = get_object_or_404(Item, item_id=item_id)
        return super().delete(instance)

class ItemListAPIView(ListMixin, BaseAPIView):
    def get(self, request):
        queryset = Item.objects.all().order_by('item_id')
        serializer = ItemOutputSerializer(queryset, many=True)
        return super().list(serializer)