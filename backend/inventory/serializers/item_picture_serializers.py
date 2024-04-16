from rest_framework import serializers
from core.models import ItemPicture


class ItemPictureSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemPicture
        fields = ['item_picutre_id', 'item', 'link']