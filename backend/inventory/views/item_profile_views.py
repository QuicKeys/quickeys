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
        # EXAMPLE: /inventory/item/shop-list/?item_type=1
        #          /inventory/item/shop-list/?item_type=1,2
        item_type = self.request.query_params.get('item_type', None)
        if item_type is not None:
            item_type_list = item_type.split(',')
            queryset = queryset.filter(item_type__in=item_type_list)

        # Filter by item brand
        # EXAMPLE: /inventory/item/shop-list/?item_brand=1
        #          /inventory/item/shop-list/?item_brand=1,2
        item_brand = self.request.query_params.get('item_brand', None)
        if item_brand is not None:
            item_brand_list = item_brand.split(',')
            queryset = queryset.filter(item_brand__in=item_brand_list)

        # Sort by item attribute
        # SORT BY ASCENDING ORDER: /inventory/item/shop-list/?sort_by=item_price
        # SORT BY DESCENDING ORDER: /inventory/item/shop-list/?sort_by=-item_price
        sort_by = self.request.query_params.get('sort_by', None)
        if sort_by is not None:
            descending = sort_by.startswith('-')
            field = sort_by.lstrip('-')
            queryset = queryset.order_by(f'{"-" if descending else ""}{field}')

        return queryset

class ShopItemList(ItemList):
    serializer_class = ShopItemSerializer
    pagination_class = ShopPagination