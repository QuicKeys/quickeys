from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from ..serializers.item_type_serializers import ItemTypeSerializer
from core.models import ItemType
from core.mixins import IsStaffUserMixin


class ItemTypeCreateAPIView(IsStaffUserMixin, APIView):
    def post(self, request):
        serializer = ItemTypeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'item_type_id': serializer.instance.item_type_id}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ItemTypeDetailAPIView(APIView):
    def get(self, request, item_type_id):
        item_type = get_object_or_404(ItemType, item_type_id=item_type_id)
        serializer = ItemTypeSerializer(item_type)
        return Response(serializer.data)
    
    def put(self, request, item_type_id):
        item_type = get_object_or_404(ItemType, item_type_id=item_type_id)
        serializer = ItemTypeSerializer(item_type, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'success': True})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, item_type_id):
        item_type = get_object_or_404(ItemType, item_type_id=item_type_id)
        item_type.delete()
        return Response({'success': True})

class ItemTypeListAPIView(APIView):
    def get(self, request):
        item_types = ItemType.objects.all().order_by('item_type_id')
        serializer = ItemTypeSerializer(item_types, many=True)
        return Response(serializer.data)