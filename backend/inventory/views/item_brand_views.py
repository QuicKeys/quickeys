from core.models import ItemBrand
from rest_framework import generics
from ..serializers import ItemBrandSerializer
from core.views import BaseAdminAPIView


class ItemBrandCreate(BaseAdminAPIView, generics.CreateAPIView):
    queryset = ItemBrand.objects.all()
    serializer_class = ItemBrandSerializer

class ItemBrandListCreate(BaseAdminAPIView, generics.ListCreateAPIView):
    queryset = ItemBrand.objects.all()
    serializer_class = ItemBrandSerializer

class ItemBrandRetrieveUpdateDestroy(BaseAdminAPIView, generics.RetrieveUpdateDestroyAPIView):
    queryset = ItemBrand.objects.all()
    serializer_class = ItemBrandSerializer
    lookup_field = 'item_brand_id'

class ItemBrandRetrieve(BaseAdminAPIView, generics.RetrieveAPIView):
    queryset = ItemBrand.objects.all()
    serializer_class = ItemBrandSerializer
    lookup_field = 'item_brand_id'

class ItemBrandList(generics.ListAPIView):
    serializer_class = ItemBrandSerializer

    # Sort by item brand attribute
    def get_queryset(self):
        queryset = ItemBrand.objects.all()
        sort_by = self.request.query_params.get('sort_by', None)
        if sort_by is not None:
            descending = sort_by.startswith('-')
            field = sort_by.lstrip('-')
            queryset = queryset.order_by(f'{"-" if descending else ""}{field}')

        return queryset