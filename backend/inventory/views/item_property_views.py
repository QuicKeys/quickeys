from core.models import ItemProperty, ItemPropertyValue
from rest_framework import generics
from ..serializers import ItemPropertySerializer, ItemPropertyValueSerializer
from core.views import BaseAPIView


# Item Property
class ItemPropertyCreate(BaseAPIView, generics.CreateAPIView):
    queryset = ItemProperty.objects.all()
    serializer_class = ItemPropertySerializer

class ItemPropertyListCreate(BaseAPIView, generics.ListCreateAPIView):
    queryset = ItemProperty.objects.all()
    serializer_class = ItemPropertySerializer

class ItemPropertyRetrieveUpdateDestroy(BaseAPIView, generics.RetrieveUpdateDestroyAPIView):
    queryset = ItemProperty.objects.all()
    serializer_class = ItemPropertySerializer
    lookup_field = 'item_property_id'

class ItemPropertyRetrieve(BaseAPIView, generics.RetrieveAPIView):
    queryset = ItemProperty.objects.all()
    serializer_class = ItemPropertySerializer
    lookup_field = 'item_property_id'

class ItemPropertyList(BaseAPIView, generics.ListAPIView):
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
class ItemPropertyValueCreate(BaseAPIView, generics.CreateAPIView):
    queryset = ItemPropertyValue.objects.all()
    serializer_class = ItemPropertyValueSerializer
    
class ItemPropertyValueListCreate(BaseAPIView, generics.ListCreateAPIView):
    queryset = ItemPropertyValue.objects.all()
    serializer_class = ItemPropertyValueSerializer

class ItemPropertyValueRetrieveUpdateDestroy(BaseAPIView, generics.RetrieveUpdateDestroyAPIView):
    queryset = ItemPropertyValue.objects.all()
    serializer_class = ItemPropertyValueSerializer
    lookup_field = 'item_property_value_id'

class ItemPropertyValueRetrieve(BaseAPIView, generics.RetrieveAPIView):
    queryset = ItemPropertyValue.objects.all()
    serializer_class = ItemPropertyValueSerializer
    lookup_field = 'item_property_value_id'

class ItemPropertyValueList(BaseAPIView, generics.ListAPIView):
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