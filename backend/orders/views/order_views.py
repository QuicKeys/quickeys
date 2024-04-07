from core.mixins import (
    CreateMixin,
    GetPutDeleteMixin,
    ListMixin
)
from django.shortcuts import get_object_or_404
from ..serializers.order_serializers import (
    OrderInSerializer,
    OrderOutSerializer,
    OrderListOutSerializer,
    OrderLineInSerializer,
    OrderLineOutSerializer,
    OrderLineListOutSerializer
)
from core.models import Orders, OrderLine
from core.views import BaseAPIView


# Orders
class OrderCreateAPIView(CreateMixin, BaseAPIView):
    def post(self, request):
        serializer = OrderInSerializer(data=request.data)
        return super().post(serializer)

class OrderDetailAPIView(GetPutDeleteMixin, BaseAPIView):
    def get(self, request, order_id):
        instance = get_object_or_404(Orders, order_id=order_id)
        serializer = OrderOutSerializer(instance)
        return super().get(serializer)
    
    def patch(self, request, order_id):
        instance = get_object_or_404(Orders, order_id=order_id)
        serializer = OrderInSerializer(instance, data=request.data, partial=True)
        return super().patch(serializer)
    
    def delete(self, request, order_id):
        instance = get_object_or_404(Orders, order_id=order_id)
        return super().delete(instance)

class OrderListAPIView(ListMixin, BaseAPIView):
    def get(self, request):
        queryset = Orders.objects.all().order_by('order_id')
        serializer = OrderOutSerializer(queryset, many=True)
        return super().list(serializer)

class UserOrderListAPIView(ListMixin, BaseAPIView):
    def get(self, request, user_id):
        queryset = Orders.objects.filter(user_id=user_id).order_by('order_id')
        serializer = OrderListOutSerializer(queryset, many=True)
        return super().list(serializer)

# Order Line
class OrderLineCreateAPIView(CreateMixin, BaseAPIView):
    def post(self, request):
        serializer = OrderLineInSerializer(data=request.data)
        return super().post(serializer)

class OrderLineDetailAPIView(GetPutDeleteMixin, BaseAPIView):
    def get(self, request, order_line_id):
        instance = get_object_or_404(OrderLine, order_line_id=order_line_id)
        serializer = OrderLineOutSerializer(instance)
        return super().get(serializer)
    
    def patch(self, request, order_line_id):
        instance = get_object_or_404(OrderLine, order_line_id=order_line_id)
        serializer = OrderLineInSerializer(instance, data=request.data, partial=True)
        return super().patch(serializer)
    
    def delete(self, request, order_line_id):
        instance = get_object_or_404(OrderLine, order_line_id=order_line_id)
        return super().delete(instance)

class OrderLineListAPIView(ListMixin, BaseAPIView):
    def get(self, request):
        queryset = OrderLine.objects.all().order_by('order_line_id')
        serializer = OrderLineOutSerializer(queryset, many=True)
        return super().list(serializer)

class OrderItemListAPIView(ListMixin, BaseAPIView):
    def get(self, request, order_id):
        queryset = OrderLine.objects.filter(order_id=order_id).order_by('order_line_id')
        serializer = OrderLineListOutSerializer(queryset, many=True)
        return super().list(serializer)