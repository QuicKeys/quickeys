from datetime import date, datetime
from typing import List
from ninja import Router, Schema
from django.shortcuts import get_object_or_404
from schema.models import Users


router = Router()


class UserIn(Schema):
    login_account_id: int
    first_name: str
    middle_name: str = None
    last_name: str
    birthdate: date
    contact_no: str

class UserOut(Schema):
    login_account_id: int
    first_name: str
    middle_name: str = None
    last_name: str
    birthdate: date
    contact_no: str
    created_at: datetime

@router.post('/user/')
def create_user(request, payload: UserIn):
    user = Users.objects.create(**payload.dict())
    return {'user_id': user.user_id}

@router.get('/user/{user_id}', response=UserOut)
def get_user(request, user_id: int):
    user = get_object_or_404(Users, user_id=user_id)
    return user

@router.get('/user/', response=List[UserOut])
def list_users(request):
    users_list = Users.objects.all().order_by('user_id')
    return users_list

@router.put('/user/{user_id}')
def update_user(request, user_id: int, payload: UserIn):
    user = get_object_or_404(Users, user_id=user_id)
    for attr, value in payload.dict().items():
        setattr(user, attr, value)
        user.save()
        return {'success': True}
    
@router.delete('/user/{user_id}')
def delete_user(request, user_id: int):
    user = get_object_or_404(Users, user_id=user_id)
    user.delete()
    return {'success': True}