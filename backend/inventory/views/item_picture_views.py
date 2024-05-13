from core.models import ItemPicture
from rest_framework import generics
from ..serializers import ItemPictureSerializer
from core.views import BaseAdminAPIView


class ItemPictureCreate(BaseAdminAPIView, generics.CreateAPIView):
    queryset = ItemPicture.objects.all()
    serializer_class = ItemPictureSerializer

class ItemPictureListCreate(BaseAdminAPIView, generics.ListCreateAPIView):
    queryset = ItemPicture.objects.all()
    serializer_class = ItemPictureSerializer

class ItemPictureRetrieveUpdateDestroy(BaseAdminAPIView, generics.RetrieveUpdateDestroyAPIView):
    queryset = ItemPicture.objects.all()
    serializer_class = ItemPictureSerializer
    lookup_field = 'item_picture_id'

class ItemPictureRetrieve(BaseAdminAPIView, generics.RetrieveAPIView):
    queryset = ItemPicture.objects.all()
    serializer_class = ItemPictureSerializer
    lookup_field = 'item_picture_id'

class ItemPictureList(generics.ListAPIView):
    serializer_class = ItemPictureSerializer

    # Sort by item picture attribute
    def get_queryset(self):
        queryset = ItemPicture.objects.all()
        sort_by = self.request.query_params.get('sort_by', None)
        if sort_by is not None:
            descending = sort_by.startswith('-')
            field = sort_by.lstrip('-')
            queryset = queryset.order_by(f'{"-" if descending else ""}{field}')

        return queryset