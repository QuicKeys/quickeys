from rest_framework import serializers
from core.models import KeyboardBuilder, KeyboardBuilderItem
from user_profiling.serializers.user_profile_serializers import UserProfileOutSerializer
from inventory.serializers.item_profile_serializers import ItemOutSerializer


class KeyboardBuilderInSerializer(serializers.ModelSerializer):
    class Meta:
        model = KeyboardBuilder
        fields = ['user', 'keyboard_assembly']

class KeyboardBuilderOutSerializer(serializers.ModelSerializer):
    user = UserProfileOutSerializer(read_only=True)

    class Meta:
        model = KeyboardBuilder
        fields = ['keyboard_builder_id', 'user', 'keyboard_assembly', 'created_at']

class KeyboardBuilderListOutSerializer(serializers.ModelSerializer):
    class Meta:
        model = KeyboardBuilder
        fields = ['keyboard_builder_id', 'keyboard_assembly', 'created_at']

class KeyboardBuilderItemInSerializer(serializers.ModelSerializer):
    class Meta:
        model = KeyboardBuilderItem
        fields = ['keyboard_builder', 'item']

class KeyboardBuilderItemOutSerializer(serializers.ModelSerializer):
    keyboard_builder = KeyboardBuilderOutSerializer(read_only=True)
    item = ItemOutSerializer(read_only=True)

    class Meta:
        model = KeyboardBuilderItem
        fields = ['keyboard_builder_item_id', 'keyboard_builder', 'item', 'created_at']

class KeyboardBuilderItemListOutSerializer(serializers.ModelSerializer):
    keyboard_builder = KeyboardBuilderOutSerializer(read_only=True)
    item = ItemOutSerializer(read_only=True)

    class Meta:
        model = KeyboardBuilderItem
        fields = ['keyboard_builder', 'item', 'created_at']