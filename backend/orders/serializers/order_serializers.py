# from rest_framework import serializers
# from core.models import Orders, OrderLine
# from user_profiling.serializers.user_profile_serializers import UserProfileOutSerializer
# from inventory.serializers.item_profile_serializers import ItemOutSerializer


# class OrderInSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Orders
#         fields = ['user', 'order_status', 'payment_status', 'order_date']

# class OrderOutSerializer(serializers.ModelSerializer):
#     user = UserProfileOutSerializer(read_only=True)

#     class Meta:
#         model = Orders
#         fields = ['order_id', 'user', 'order_status', 'payment_status']

# class OrderListOutSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Orders
#         fields = ['order_id', 'order_status', 'payment_status']

# class OrderLineInSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = OrderLine
#         fields = ['order', 'item', 'order_quantity']

# class OrderLineOutSerializer(serializers.ModelSerializer):
#     order = OrderOutSerializer(read_only=True)
#     item = ItemOutSerializer(read_only=True)

#     class Meta:
#         model = OrderLine
#         fields = ['order_line_id', 'order', 'item', 'order_quantity', 'created_at']

# class OrderLineListOutSerializer(serializers.ModelSerializer):
#     item = ItemOutSerializer(read_only=True)

#     class Meta:
#         model = OrderLine
#         fields = ['order_line_id', 'item', 'order_quantity', 'created_at']