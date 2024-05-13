from core.models import ItemType
from rest_framework import generics
from ..serializers import ItemTypeSerializer
from core.views import BaseAdminAPIView


class ItemTypeCreate(BaseAdminAPIView, generics.CreateAPIView):
    queryset = ItemType.objects.all()
    serializer_class = ItemTypeSerializer

class ItemTypeListCreate(BaseAdminAPIView, generics.ListCreateAPIView):
    queryset = ItemType.objects.all()
    serializer_class = ItemTypeSerializer

class ItemTypeRetrieveUpdateDestroy(BaseAdminAPIView, generics.RetrieveUpdateDestroyAPIView):
    queryset = ItemType.objects.all()
    serializer_class = ItemTypeSerializer
    lookup_field = 'item_type_id'

class ItemTypeRetrieve(BaseAdminAPIView, generics.RetrieveAPIView):
    queryset = ItemType.objects.all()
    serializer_class = ItemTypeSerializer
    lookup_field = 'item_type_id'

class ItemTypeList(generics.ListAPIView):
    serializer_class = ItemTypeSerializer

    # Sort by item type attribute
    def get_queryset(self):
        queryset = ItemType.objects.all()
        sort_by = self.request.query_params.get('sort_by', None)
        if sort_by is not None:
            descending = sort_by.startswith('-')
            field = sort_by.lstrip('-')
            queryset = queryset.order_by(f'{"-" if descending else ""}{field}')

        return queryset