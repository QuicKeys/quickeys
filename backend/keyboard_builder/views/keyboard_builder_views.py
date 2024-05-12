from core.models import KeyboardBuilder, KeyboardBuilderItem
from rest_framework import generics
from ..serializers import KeyboardBuilderSerializer, KeyboardBuilderItemSerializer
from core.views import BaseAdminAPIView


# Keyboard Builder
class KeyboardBuilderCreate(BaseAdminAPIView, generics.CreateAPIView):
    queryset = KeyboardBuilder.objects.all()
    serializer_class = KeyboardBuilderSerializer

class KeyboardBuilderListCreate(BaseAdminAPIView, generics.ListCreateAPIView):
    queryset = KeyboardBuilder.objects.all()
    serializer_class = KeyboardBuilderSerializer

class KeyboardBuilderRetrieveUpdateDestroy(BaseAdminAPIView, generics.RetrieveUpdateDestroyAPIView):
    queryset = KeyboardBuilder.objects.all()
    serializer_class = KeyboardBuilderSerializer
    lookup_field = 'keyboard_builder_id'

class KeyboardBuilderRetrieve(BaseAdminAPIView, generics.RetrieveAPIView):
    queryset = KeyboardBuilder.objects.all()
    serializer_class = KeyboardBuilderSerializer
    lookup_field = 'keyboard_builder_id'

class KeyboardBuilderList(BaseAdminAPIView, generics.ListAPIView):
    serializer_class = KeyboardBuilderSerializer
    
    def get_queryset(self):
        queryset = KeyboardBuilder.objects.all()

        # Filter by user
        user = self.request.query_params.get('user', None)
        if user is not None:
            queryset = queryset.filter(user=user)

        # Sort by keyboard builder attribute
        sort_by = self.request.query_params.get('sort_by', None)
        if sort_by is not None:
            descending = sort_by.startswith('-')
            field = sort_by.lstrip('-')
            queryset = queryset.order_by(f'{"-" if descending else ""}{field}')

        return queryset

# Keyboard Builder Item
class KeyboardBuilderItemCreate(BaseAdminAPIView, generics.CreateAPIView):
    queryset = KeyboardBuilderItem.objects.all()
    serializer_class = KeyboardBuilderItemSerializer
    
class KeyboardBuilderItemListCreate(BaseAdminAPIView, generics.ListCreateAPIView):
    queryset = KeyboardBuilderItem.objects.all()
    serializer_class = KeyboardBuilderItemSerializer

class KeyboardBuilderItemRetrieveUpdateDestroy(BaseAdminAPIView, generics.RetrieveUpdateDestroyAPIView):
    queryset = KeyboardBuilderItem.objects.all()
    serializer_class = KeyboardBuilderItemSerializer
    lookup_field = 'keyboard_builder_item_id'

class KeyboardBuilderItemRetrieve(BaseAdminAPIView, generics.RetrieveAPIView):
    queryset = KeyboardBuilderItem.objects.all()
    serializer_class = KeyboardBuilderItemSerializer
    lookup_field = 'keyboard_builder_item_id'

class KeyboardBuilderItemList(BaseAdminAPIView, generics.ListAPIView):
    serializer_class = KeyboardBuilderItemSerializer

    def get_queryset(self):
        queryset = KeyboardBuilderItem.objects.all()

        # Filter by keyboard builder
        keyboard_builder = self.request.query_params.get('keyboard_builder', None)
        if keyboard_builder is not None:
            queryset = queryset.filter(keyboard_builder=keyboard_builder)

        # Sort by keyboard builder item attribute
        sort_by = self.request.query_params.get('sort_by', None)
        if sort_by is not None:
            descending = sort_by.startswith('-')
            field = sort_by.lstrip('-')
            queryset = queryset.order_by(f'{"-" if descending else ""}{field}')

        return queryset