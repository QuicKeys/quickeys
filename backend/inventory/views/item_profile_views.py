from core.models import Item
from rest_framework import generics
from ..serializers.item_profile_serializers import ItemSerializer
from core.views import BaseAPIView


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

class ItemRetrieve(BaseAPIView, generics.RetrieveAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    lookup_field = 'item_id'

class ItemList(BaseAPIView, generics.ListAPIView):
    serializer_class = ItemSerializer

    def get_queryset(self):
        queryset = Item.objects.all()

        # Filter by item type
        item_type = self.request.query_params.get('item_type', None)
        if item_type is not None:
            queryset = queryset.filter(item_type=item_type)

        # Sort by item attribute
        sort_by = self.request.query_params.get('sort_by', None)
        if sort_by is not None:
            descending = sort_by.startswith('-')
            field = sort_by.lstrip('-')
            queryset = queryset.order_by(f'{"-" if descending else ""}{field}')

        return queryset