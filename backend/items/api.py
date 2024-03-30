from datetime import datetime
from typing import List
from ninja import Router, Schema
from django.shortcuts import get_object_or_404
from schema.models import ItemType


router = Router()


class ItemTypeIn(Schema):
    item_type_name: str

class ItemTypeOut(Schema):
    item_type_id: int
    item_type_name: str
    created_at: datetime

@router.post('/item-type/')
def create_item_type(request, payload: ItemTypeIn):
    item_type = ItemType.objects.create(**payload.dict())
    return {'item_type_id': item_type.item_type_id}

@router.get('/item-type/{item_type_id}', response=ItemTypeOut)
def get_item_type(request, item_type_id: int):
    item_type = get_object_or_404(ItemType, item_type_id=item_type_id)
    return item_type

@router.get('/item-type/', response=List[ItemTypeOut])
def list_item_types(request):
    item_type_list = ItemType.objects.all().order_by('item_type_id')
    return item_type_list

@router.put('/item-type/{item_type_id}')
def update_item_type(request, item_type_id: int, payload: ItemTypeIn):
    item_type = get_object_or_404(ItemType, item_type_id=item_type_id)
    for attr, value in payload.dict().items():
        setattr(item_type, attr, value)
        item_type.save()
        return {'success': True}
    
@router.delete('/item-type/{item_type_id}')
def delete_item_type(request, item_type_id: int):
    item_type = get_object_or_404(ItemType, item_type_id=item_type_id)
    item_type.delete()
    return {'success': True}