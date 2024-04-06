from rest_framework import serializers
from core.models import ItemType


class ItemTypeInputSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemType
        fields = ['item_type_name']

class ItemTypeOutputSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemType
        fields = ['item_type_id', 'item_type_name', 'created_at']