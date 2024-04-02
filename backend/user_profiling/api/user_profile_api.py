from typing import List
from ninja import Router
from django.shortcuts import get_object_or_404
from ..schemas.user_profile_schemas import UserIn, UserOut, UserAddressIn, UserAddressOut
from db_models.models import UserProfile, UserAddress


router = Router(tags=['User Profiling'])


@router.post('/create/')
def create_user(request, payload: UserIn):
    user = UserProfile.objects.create(**payload.dict())
    return {'user_id': user.user_id}

@router.get('/view/{user_id}', response=UserOut)
def get_user(request, user_id: int):
    user = get_object_or_404(UserProfile, user_id=user_id)
    return user

@router.get('/list/', response=List[UserOut])
def list_users(request):
    users_list = UserProfile.objects.all().order_by('user_id')
    return users_list

@router.put('/edit/{user_id}')
def update_user(request, user_id: int, payload: UserIn):
    user = get_object_or_404(UserProfile, user_id=user_id)
    for attr, value in payload.dict().items():
        setattr(user, attr, value)
    user.save()
    return {'success': True}
    
@router.delete('/delete/{user_id}')
def delete_user(request, user_id: int):
    user = get_object_or_404(UserProfile, user_id=user_id)
    user.delete()
    return {'success': True}

@router.post('/{user_id}/address/create/')
def create_user_address(request, payload: UserAddressIn, user_id: int):
    user_address = UserAddress.objects.create(**payload.dict(), user_id=user_id)
    return {'address_id': user_address.user_address_id}

@router.get('/{user_id}/address/view/{user_address_id}', response=UserAddressOut)
def get_user_address(request, user_id: int, user_address_id: int):
    user_address = get_object_or_404(UserAddress, user_id=user_id, user_address_id=user_address_id)
    return user_address

@router.get('/{user_id}/address/list/', response=List[UserAddressOut])
def list_user_address(request, user_id: int):
    user_address_list = UserAddress.objects.all().filter(user_id=user_id).order_by('user_address_id')
    return user_address_list

@router.put('/{user_id}/edit/{user_address_id}')
def update_user_address(request, user_id: int, user_address_id: int, payload: UserAddressIn):
    user_address = get_object_or_404(UserAddress, user_id=user_id, user_address_id=user_address_id)
    for attr, value in payload.dict().items():
        setattr(user_address, attr, value)
    user_address.save()
    return {'success': True}
    
@router.delete('/{user_id}/address/delete/{user_address_id}')
def delete_user_address(request, user_id: int, user_address_id: int):
    user_address = get_object_or_404(UserAddress, user_id=user_id, user_address_id=user_address_id)
    user_address.delete()
    return {'success': True}