from rest_framework import serializers
from core.models import Item
from .item_type_serializers import ItemTypeSerializer
from .item_brand_serializers import ItemBrandSerializer


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ['item_id', 'item_type', 'item_name', 'item_description', 'item_price', 'item_brand',
                  'item_profile_picture_link','item_quantity', 'restock_point', 'is_active']

    def to_representation(self, instance):
        serialized_data = super().to_representation(instance)
        serialized_data['item_type'] = ItemTypeSerializer(instance.item_type).data
        serialized_data['item_brand'] = ItemBrandSerializer(instance.item_brand).data
        return serialized_data