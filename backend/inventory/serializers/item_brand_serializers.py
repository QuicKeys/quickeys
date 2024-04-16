from rest_framework import serializers
from core.models import ItemBrand


class ItemBrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemBrand
        fields = ['item_brand_id', 'item_brand_name']