from core.models import ItemProperty, ItemPropertyValue
from rest_framework import generics
from ..serializers import ItemPropertySerializer, ItemPropertyValueSerializer
from core.views import BaseAdminAPIView


# Item Property
class ItemPropertyCreate(BaseAdminAPIView, generics.CreateAPIView):
    queryset = ItemProperty.objects.all()
    serializer_class = ItemPropertySerializer

class ItemPropertyListCreate(BaseAdminAPIView, generics.ListCreateAPIView):
    queryset = ItemProperty.objects.all()
    serializer_class = ItemPropertySerializer

class ItemPropertyRetrieveUpdateDestroy(BaseAdminAPIView, generics.RetrieveUpdateDestroyAPIView):
    queryset = ItemProperty.objects.all()
    serializer_class = ItemPropertySerializer
    lookup_field = 'item_property_id'

class ItemPropertyRetrieve(BaseAdminAPIView, generics.RetrieveAPIView):
    queryset = ItemProperty.objects.all()
    serializer_class = ItemPropertySerializer
    lookup_field = 'item_property_id'

class ItemPropertyList(BaseAdminAPIView, generics.ListAPIView):
    serializer_class = ItemPropertySerializer

    # Sort by item property attribute
    def get_queryset(self):
        queryset = ItemProperty.objects.all()
        sort_by = self.request.query_params.get('sort_by', None)
        if sort_by is not None:
            descending = sort_by.startswith('-')
            field = sort_by.lstrip('-')
            queryset = queryset.order_by(f'{"-" if descending else ""}{field}')

        return queryset


# Item Property Value
class ItemPropertyValueCreate(BaseAdminAPIView, generics.CreateAPIView):
    queryset = ItemPropertyValue.objects.all()
    serializer_class = ItemPropertyValueSerializer
    
class ItemPropertyValueListCreate(BaseAdminAPIView, generics.ListCreateAPIView):
    queryset = ItemPropertyValue.objects.all()
    serializer_class = ItemPropertyValueSerializer

class ItemPropertyValueRetrieveUpdateDestroy(BaseAdminAPIView, generics.RetrieveUpdateDestroyAPIView):
    queryset = ItemPropertyValue.objects.all()
    serializer_class = ItemPropertyValueSerializer
    lookup_field = 'item_property_value_id'

class ItemPropertyValueRetrieve(BaseAdminAPIView, generics.RetrieveAPIView):
    queryset = ItemPropertyValue.objects.all()
    serializer_class = ItemPropertyValueSerializer
    lookup_field = 'item_property_value_id'

class ItemPropertyValueList(BaseAdminAPIView, generics.ListAPIView):
    serializer_class = ItemPropertyValueSerializer

    def get_queryset(self):
        queryset = ItemPropertyValue.objects.all()

        # Filter by item
        item = self.request.query_params.get('item', None)
        if item is not None:
            queryset = queryset.filter(item=item)

        # Sort by item property value attribute
        sort_by = self.request.query_params.get('sort_by', None)
        if sort_by is not None:
            descending = sort_by.startswith('-')
            field = sort_by.lstrip('-')
            queryset = queryset.order_by(f'{"-" if descending else ""}{field}')

        return queryset