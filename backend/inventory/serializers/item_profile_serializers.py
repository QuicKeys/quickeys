from rest_framework import serializers
from core.models import Item
from ..serializers.item_type_serializers import ItemTypeOutSerializer


class ItemInSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ['item_type', 'item_name', 'item_description','item_price', 'serial_number',
                  'item_quantity', 'restock_point', 'is_active']

class ItemOutSerializer(serializers.ModelSerializer):
    item_type = ItemTypeOutSerializer(read_only=True)

    class Meta:
        model = Item
        fields = ['item_id', 'item_type', 'item_name', 'item_description','item_price', 'serial_number',
                  'item_quantity', 'restock_point', 'is_active', 'created_at']