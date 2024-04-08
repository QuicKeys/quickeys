from rest_framework import serializers
from inventory.models import Item
from .item_type_serializers import ItemTypeSerializer


class ItemSerializer(serializers.ModelSerializer):
    item_type = ItemTypeSerializer

    class Meta:
        model = Item
        fields = ['item_id', 'item_type', 'item_name', 'item_description', 'item_price', 'serial_number',
                  'item_quantity', 'restock_point', 'is_active']

    def to_representation(self, instance):
        serialized_data = super().to_representation(instance)
        serialized_data['item_type'] = ItemTypeSerializer(instance.item_type).data
        return serialized_data