from rest_framework import serializers
from core.models import ItemType


class ItemTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemType
        fields = ['item_type_id', 'item_type_name', 'created_at']
        read_only_fields = ['item_type_id', 'created_at']