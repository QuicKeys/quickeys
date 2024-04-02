from typing import List
from ninja import Router
from django.shortcuts import get_object_or_404
from ..schemas.item_schemas import ItemIn, ItemOut
from db_models.models import Item


router = Router(tags=['Item Profiling'])


@router.post('/create/')
def create_item(request, payload: ItemIn):
    item = Item.objects.create(**payload.dict())
    return {'item_id': item.item_id}

@router.get('/view/{item_id}', response=ItemOut)
def get_item(request, item_id: int):
    item = get_object_or_404(Item, item_id=item_id)
    return item

@router.get('/list/', response=List[ItemOut])
def list_items(request):
    items_list = Item.objects.all().order_by('item_id')
    return items_list

@router.put('/edit/{item_id}')
def update_item(request, item_id: int, payload: ItemIn):
    item = get_object_or_404(Item, item_id=item_id)
    for attr, value in payload.dict().items():
        setattr(item, attr, value)
    item.save()
    return {'success': True}
    
@router.delete('/delete/{item_id}')
def delete_item(request, item_id: int):
    item = get_object_or_404(Item, item_id=item_id)
    item.delete()
    return {'success': True}