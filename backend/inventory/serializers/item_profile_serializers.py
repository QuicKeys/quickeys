from rest_framework import serializers
from core.models import (
    Item,
    ItemProperty,
    ItemPropertyValue,
)
from ..serializers.item_type_serializers import ItemTypeSerializer


class ItemInputSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ['item_type', 'item_name', 'item_description','item_price',
                  'serial_number', 'item_quantity', 'restock_point', 'is_active']

class ItemOutputSerializer(serializers.ModelSerializer):
    item_type = ItemTypeSerializer(read_only=True)

    class Meta:
        model = Item
        fields = ['item_id', 'item_type', 'item_name', 'item_description','item_price', 'serial_number',
                  'item_quantity', 'restock_point', 'is_active', 'created_at']

class ItemPropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemProperty
        fields = ['item_property_id', 'item_property_name', 'item_property_datatype', 'created_at']
        read_only_fields = ['item_property_id', 'created_at']

class ItemPropertyValueSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemPropertyValue
        fields = ['item_property_value_id', 'item', 'item_property', 'item_property_value', 'created_at']
        read_only_fields = ['item_property_value_id', 'created_at']