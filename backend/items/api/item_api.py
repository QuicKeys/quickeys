from typing import List
from ninja import Router
from django.shortcuts import get_object_or_404
from ..schemas.item_schemas import ItemIn, ItemOut, ItemPropertyIn, ItemPropertyOut, ItemPropertyValueIn, ItemPropertyValueOut
from db_models.models import Item, ItemProperty, ItemPropertyValue


router = Router(tags=['Item Profiling'])


# Item
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

# Item Property
@router.post('/property/create')
def create_item_property(request, payload: ItemPropertyIn):
    item_property = ItemProperty.objects.create(**payload.dict())
    return {'item_property_id': item_property.item_property_id}

@router.get('/property/view/{item_property_id}', response=ItemPropertyOut)
def get_item_property(request, item_property_id: int):
    item_property = get_object_or_404(ItemProperty, item_property_id=item_property_id)
    return item_property

@router.get('/property/list/', response=List[ItemPropertyOut])
def list_item_properties(request):
    item_properties_list = ItemProperty.objects.all().order_by('item_property_id')
    return item_properties_list

@router.put('/property/edit/{item_property_id}')
def update_item_property(request, item_property_id: int, payload: ItemPropertyIn):
    item_property = get_object_or_404(ItemProperty, item_property_id=item_property_id)
    for attr, value in payload.dict().items():
        setattr(item_property, attr, value)
    item_property.save()
    return {'success': True}
    
@router.delete('/property/delete/{item_property_id}')
def delete_item_property(request, item_property_id: int):
    item_property = get_object_or_404(ItemProperty, item_property_id=item_property_id)
    item_property.delete()
    return {'success': True}

# Item Property Value
@router.post('/{item_id}/property/{item_property_id}/value/create/')
def create_item_property_value(request, payload: ItemPropertyValueIn, item_id: int, item_property_id):
    item_property_value = ItemPropertyValue.objects.create(**payload.dict(), item_id=item_id, item_property_id=item_property_id)
    return {'item_property_value_id': item_property_value.item_property_value_id}

@router.get('/{item_id}/property/{item_property_id}/value/view/', response=ItemPropertyValueOut)
def get_item_property_value(request, item_id: int, item_property_id: int):
    item_property_value = get_object_or_404(ItemPropertyValue, item_id=item_id, item_property_id=item_property_id)
    return item_property_value

@router.get('/{item_id}/property/value/list/', response=List[ItemPropertyValueOut])
def list_item_property_values(request, item_id: int):
    item_property_list = ItemPropertyValue.objects.all().filter(item_id=item_id).order_by('item_id')
    return item_property_list

@router.put('/{item_id}/property/{item_property_id}/value/edit')
def update_item_property_value(request, item_id: int, item_property_id: int, payload: ItemPropertyValueIn):
    item_property_value = get_object_or_404(ItemPropertyValue, item_id=item_id, item_property_id=item_property_id)
    for attr, value in payload.dict().items():
        setattr(item_property_value, attr, value)
    item_property_value.save()
    return {'success': True}
    
@router.delete('/{item_id}/property/{item_property_id}/value/delete')
def delete_item_property_value(request, item_id: int, item_property_id: int):
    item_property_value = get_object_or_404(ItemPropertyValue, item_id=item_id, item_property_id=item_property_id)
    item_property_value.delete()
    return {'success': True}