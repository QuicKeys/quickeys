from typing import List
from ninja import Router
from django.shortcuts import get_object_or_404
from ..schemas.item_type_schemas import ItemTypeIn, ItemTypeOut
from db_models.models import ItemType


router = Router(tags=['Item Type'])


@router.post('/create/')
def create_item_type(request, payload: ItemTypeIn):
    item_type = ItemType.objects.create(**payload.dict())
    return {'item_type_id': item_type.item_type_id}

@router.get('/view/{item_type_id}', response=ItemTypeOut)
def get_item_type(request, item_type_id: int):
    item_type = get_object_or_404(ItemType, item_type_id=item_type_id)
    return item_type

@router.get('/list/', response=List[ItemTypeOut])
def list_item_types(request):
    item_type_list = ItemType.objects.all().order_by('item_type_id')
    return item_type_list

@router.put('/edit/{item_type_id}')
def update_item_type(request, item_type_id: int, payload: ItemTypeIn):
    item_type = get_object_or_404(ItemType, item_type_id=item_type_id)
    for attr, value in payload.dict().items():
        setattr(item_type, attr, value)
        item_type.save()
        return {'success': True}
    
@router.delete('/delete/{item_type_id}')
def delete_item_type(request, item_type_id: int):
    item_type = get_object_or_404(ItemType, item_type_id=item_type_id)
    item_type.delete()
    return {'success': True}