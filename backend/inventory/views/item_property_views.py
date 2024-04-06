from core.mixins import (
    CreateMixin,
    GetPutDeleteMixin,
    ListMixin
)
from django.shortcuts import get_object_or_404
from ..serializers.item_property_serializers import (
    ItemPropertyInSerializer,
    ItemPropertyOutSerializer,
    ItemPropertyValueInSerializer,
    ItemPropertyValueOutSerializer,
    ItemPropertyValueListOutSerializer
)
from core.models import ItemProperty, ItemPropertyValue
from core.views import BaseAPIView


# Item Property
class ItemPropertyCreateAPIView(CreateMixin, BaseAPIView):
    def post(self, request):
        serializer = ItemPropertyInSerializer(data=request.data)
        return super().post(serializer)

class ItemPropertyDetailAPIView(GetPutDeleteMixin, BaseAPIView):
    def get(self, request, item_property_id):
        instance = get_object_or_404(ItemProperty, item_property_id=item_property_id)
        serializer = ItemPropertyOutSerializer(instance)
        return super().get(serializer)
    
    def patch(self, request, item_property_id):
        instance = get_object_or_404(ItemProperty, item_property_id=item_property_id)
        serializer = ItemPropertyInSerializer(instance, data=request.data, partial=True)
        return super().patch(serializer)
    
    def delete(self, request, item_property_id):
        instance = get_object_or_404(ItemProperty, item_property_id=item_property_id)
        return super().delete(instance)

class ItemPropertyListAPIView(ListMixin, BaseAPIView):
    def get(self, request):
        queryset = ItemProperty.objects.all().order_by('item_property_id')
        serializer = ItemPropertyOutSerializer(queryset, many=True)
        return super().list(serializer)

# Item Property Value
class ItemPropertyValueCreateAPIView(CreateMixin, BaseAPIView):
    def post(self, request):
        serializer = ItemPropertyValueInSerializer(data=request.data)
        return super().post(serializer)

class ItemPropertyValueDetailAPIView(GetPutDeleteMixin, BaseAPIView):
    def get(self, request, item_id, item_property_id):
        instance = get_object_or_404(ItemPropertyValue, item_id=item_id, item_property_id=item_property_id)
        serializer = ItemPropertyValueOutSerializer(instance)
        return super().get(serializer)
    
    def patch(self, request, item_id, item_property_id):
        instance = get_object_or_404(ItemPropertyValue, item_id=item_id, item_property_id=item_property_id)
        serializer = ItemPropertyValueInSerializer(instance, data=request.data, partial=True)
        return super().patch(serializer)
    
    def delete(self, request, item_id, item_property_id):
        instance = get_object_or_404(ItemPropertyValue, item_id=item_id, item_property_id=item_property_id)
        return super().delete(instance)

class ItemPropertyValueListAPIView(ListMixin, BaseAPIView):
    def get(self, request, item_id):
        queryset = ItemPropertyValue.objects.filter(item_id=item_id).order_by('item_property_value_id')
        serializer = ItemPropertyValueListOutSerializer(queryset, many=True)
        return super().list(serializer)