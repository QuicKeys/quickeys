from core.models import Item
from rest_framework import generics
from ..serializers import ItemSerializer, ShopItemSerializer
from core.views import BaseAPIView
from core.pagination import ShopPagination


class ItemCreate(BaseAPIView, generics.CreateAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    
class ItemListCreate(BaseAPIView, generics.ListCreateAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class ItemRetrieveUpdateDestroy(BaseAPIView, generics.RetrieveUpdateDestroyAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    lookup_field = 'item_id'

class ItemRetrieve(generics.RetrieveAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    lookup_field = 'item_id'

class ItemList(generics.ListAPIView):
    serializer_class = ItemSerializer

    def get_queryset(self):
        queryset = Item.objects.all()

        # Filter by item type
        item_type = self.request.query_params.get('item_type', None)
        if item_type is not None:
            queryset = queryset.filter(item_type=item_type)

        # Filter by item brand
        item_brand = self.request.query_params.get('item_brand', None)
        if item_brand is not None:
            queryset = queryset.filter(item_brand=item_brand)

        # Sort by item attribute
        sort_by = self.request.query_params.get('sort_by', None)
        if sort_by is not None:
            descending = sort_by.startswith('-')
            field = sort_by.lstrip('-')
            queryset = queryset.order_by(f'{"-" if descending else ""}{field}')

        return queryset

class ShopItemList(ItemList):
    serializer_class = ShopItemSerializer
    pagination_class = ShopPagination