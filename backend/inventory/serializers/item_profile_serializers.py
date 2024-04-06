from rest_framework import serializers
from core.models import Item
from ..serializers.item_type_serializers import ItemTypeOutputSerializer


class ItemInputSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ['item_type', 'item_name', 'item_description','item_price', 'serial_number',
                  'item_quantity', 'restock_point', 'is_active']

class ItemOutputSerializer(serializers.ModelSerializer):
    item_type = ItemTypeOutputSerializer(read_only=True)

    class Meta:
        model = Item
        fields = ['item_id', 'item_type', 'item_name', 'item_description','item_price', 'serial_number',
                  'item_quantity', 'restock_point', 'is_active', 'created_at']