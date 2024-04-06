from rest_framework import serializers
from core.models import ItemProperty, ItemPropertyValue
from ..serializers.item_profile_serializers import ItemOutputSerializer


class ItemPropertyInputSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemProperty
        fields = ['item_property_name', 'item_property_datatype']

class ItemPropertyOutputSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemProperty
        fields = ['item_property_id', 'item_property_name', 'item_property_datatype', 'created_at']

class ItemPropertyValueInputSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemPropertyValue
        fields = ['item', 'item_property', 'item_property_value']

class ItemPropertyValueOutputSerializer(serializers.ModelSerializer):
    item = ItemOutputSerializer(read_only=True)
    item_property = ItemPropertyOutputSerializer(read_only=True)

    class Meta:
        model = ItemPropertyValue
        fields = ['item_property_value_id', 'item', 'item_property', 'item_property_value', 'created_at']