from rest_framework import serializers
from core.models import ItemProperty, ItemPropertyValue
from .item_profile_serializers import ItemSerializer


class ItemPropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemProperty
        fields = ['item_property_id', 'item_property_name', 'item_property_datatype']

class ItemPropertyValueSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemPropertyValue
        fields = ['item_property_value_id', 'item', 'item_property', 'item_property_value']

    def to_representation(self, instance):
        serialized_data = super().to_representation(instance)
        serialized_data['item'] = ItemSerializer(instance.item).data
        serialized_data['item_property'] = ItemPropertySerializer(instance.item_property).data
        return serialized_data