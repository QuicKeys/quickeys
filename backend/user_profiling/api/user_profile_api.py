from typing import List
from ninja import Router
from django.shortcuts import get_object_or_404
from ..schemas.user_profile_schemas import UserIn, UserOut 
from db_models.models import UserProfile


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