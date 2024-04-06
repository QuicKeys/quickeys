from rest_framework import serializers
from core.models import ItemProperty, ItemPropertyValue
from ..serializers.item_profile_serializers import ItemOutSerializer


class ItemPropertyInSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemProperty
        fields = ['item_property_name', 'item_property_datatype']

class ItemPropertyOutSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemProperty
        fields = ['item_property_id', 'item_property_name', 'item_property_datatype', 'created_at']

class ItemPropertyValueInSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemPropertyValue
        fields = ['item', 'item_property', 'item_property_value']

class ItemPropertyValueOutSerializer(serializers.ModelSerializer):
    item = ItemOutSerializer(read_only=True)
    item_property = ItemPropertyOutSerializer(read_only=True)

    class Meta:
        model = ItemPropertyValue
        fields = ['item_property_value_id', 'item', 'item_property', 'item_property_value', 'created_at']

class ItemPropertyValueListOutSerializer(serializers.ModelSerializer):
    item_property = ItemPropertyOutSerializer(read_only=True)

    class Meta:
        model = ItemPropertyValue
        fields = ['item_property_value_id', 'item_property', 'item_property_value', 'created_at']