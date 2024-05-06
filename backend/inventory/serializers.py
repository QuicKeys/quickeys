from rest_framework import serializers
from core.models import (
    ItemBrand,
    ItemPicture,
    Item,
    ItemProperty,
    ItemPropertyValue,
    ItemType
)


class ItemBrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemBrand
        fields = ['item_brand_id', 'item_brand_name']

class ItemPictureSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemPicture
        fields = ['item_picture_id', 'item', 'link']

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

class ShopItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ['item_id', 'item_name', 'item_price', 'item_brand', 'item_profile_picture_link',
                  'item_quantity']
    
    def to_representation(self, instance):
        serialized_data = super().to_representation(instance)
        serialized_data['item_brand'] = ItemBrandSerializer(instance.item_brand).data
        return serialized_data

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

class ItemTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemType
        fields = ['item_type_id', 'item_type_name']