from rest_framework import serializers
from orders.models import Orders, OrderLine
from user_profiling.serializers.user_profile_serializers import UserProfileSerializer
from inventory.serializers.item_profile_serializers import ItemSerializer


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orders
        fields = ['order_id', 'user', 'order_status', 'payment_status', 'order_date']

    def to_representation(self, instance):
        serialized_data = super().to_representation(instance)
        serialized_data['user'] = UserProfileSerializer(instance.user).data
        return serialized_data

class OrderLineSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderLine
        fields = ['order_line_id', 'order', 'item', 'order_quantity']

    def to_representation(self, instance):
        serialized_data = super().to_representation(instance)
        serialized_data['order'] = OrderSerializer(instance.order).data
        serialized_data['item'] = ItemSerializer(instance.item).data
        return serialized_data