from core.models import Orders, OrderLine
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from ..serializers import OrderSerializer, OrderLineSerializer
from core.views import BaseAdminAPIView, BaseAuthenticatedAPIView


# Orders
class OrderCreate(BaseAuthenticatedAPIView, generics.CreateAPIView):
    queryset = Orders.objects.all()
    serializer_class = OrderSerializer

class OrderListCreate(BaseAdminAPIView, generics.ListCreateAPIView):
    queryset = Orders.objects.all()
    serializer_class = OrderSerializer

class OrderRetrieveUpdateDestroy(BaseAuthenticatedAPIView, generics.RetrieveUpdateDestroyAPIView):
    queryset = Orders.objects.all()
    serializer_class = OrderSerializer
    lookup_field = 'order_id'

class OrderRetrieve(generics.RetrieveAPIView):
    queryset = Orders.objects.all()
    serializer_class = OrderSerializer
    lookup_field = 'order_id'

class OrderList(BaseAuthenticatedAPIView, generics.ListAPIView):
    serializer_class = OrderSerializer
    
    def get_queryset(self):
        queryset = Orders.objects.all()

        # Filter by user
        user = self.request.query_params.get('user', None)
        if user is not None:
            queryset = queryset.filter(user=user)

        # Sort by order attribute
        sort_by = self.request.query_params.get('sort_by', None)
        if sort_by is not None:
            descending = sort_by.startswith('-')
            field = sort_by.lstrip('-')
            queryset = queryset.order_by(f'{"-" if descending else ""}{field}')

        return queryset

# Order Line
class OrderLineCreate(BaseAuthenticatedAPIView, generics.CreateAPIView):
    queryset = OrderLine.objects.all()
    serializer_class = OrderLineSerializer
    
class OrderLineListCreate(BaseAdminAPIView, generics.ListCreateAPIView):
    queryset = OrderLine.objects.all()
    serializer_class = OrderLineSerializer

class OrderLineRetrieveUpdateDestroy(BaseAuthenticatedAPIView, generics.RetrieveUpdateDestroyAPIView):
    queryset = OrderLine.objects.all()
    serializer_class = OrderLineSerializer
    lookup_field = 'order_line_id'

class DeleteAllOrderLinesView(APIView):
    def delete(self, request, order, format=None):
        try:
            order_lines = OrderLine.objects.filter(order=order)
            if not order_lines.exists():
                return Response({'detail': 'No order lines found for this order.'}, status=status.HTTP_404_NOT_FOUND)
            
            order_lines.delete()
            
            try:
                order = Orders.objects.get(pk=order)
                order.delete()
            except Orders.DoesNotExist:
                return Response({'detail': 'Order not found.'}, status=status.HTTP_404_NOT_FOUND)
            
            return Response({'detail': 'Order and all order lines deleted successfully.'}, status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            return Response({'detail': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class OrderLineRetrieve(generics.RetrieveAPIView):
    queryset = OrderLine.objects.all()
    serializer_class = OrderLineSerializer
    lookup_field = 'order_line_id'

class OrderLineList(BaseAuthenticatedAPIView, generics.ListAPIView):
    serializer_class = OrderLineSerializer

    def get_queryset(self):
        queryset = OrderLine.objects.all()

        # Filter by order
        order = self.request.query_params.get('order', None)
        if order is not None:
            queryset = queryset.filter(order=order)

        # Sort by order line attribute
        sort_by = self.request.query_params.get('sort_by', None)
        if sort_by is not None:
            descending = sort_by.startswith('-')
            field = sort_by.lstrip('-')
            queryset = queryset.order_by(f'{"-" if descending else ""}{field}')

        return queryset