from rest_framework import serializers
from core.models import KeyboardBuilder, KeyboardBuilderItem
from user_profiling.serializers.user_profile_serializers import UserProfileSerializer
from inventory.serializers.item_profile_serializers import ItemSerializer


class KeyboardBuilderSerializer(serializers.ModelSerializer):
    class Meta:
        model = KeyboardBuilder
        fields = ['keyboard_builder_id', 'user', 'keyboard_assembly']

    def to_representation(self, instance):
        serialized_data = super().to_representation(instance)
        serialized_data['user'] = UserProfileSerializer(instance.user).data
        return serialized_data

class KeyboardBuilderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = KeyboardBuilderItem
        fields = ['keyboard_builder_item_id', 'keyboard_builder', 'item']

    def to_representation(self, instance):
        serialized_data = super().to_representation(instance)
        serialized_data['keyboard_builder'] = KeyboardBuilderSerializer(instance.keyboard_builder).data
        serialized_data['item'] = ItemSerializer(instance.item).data
        return serialized_data