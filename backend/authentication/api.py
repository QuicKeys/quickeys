from ninja import Router, Schema
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.http import JsonResponse


router = Router(tags=['User Authentication'])


class UserSignUp(Schema):
    first_name: str
    last_name: str
    email: str
    password: str

class UserSignIn(Schema):
    username: str
    password: str

class UserSignUpResponse(Schema):
    message: str

class UserSignInResponse(Schema):
    token: str

@router.post('/signup/', response=UserSignUpResponse)
def sign_up(request, data: UserSignUp):
    try:
        user = User.objects.create_user(
            username=data.email,
            first_name=data.first_name,
            last_name=data.last_name,
            email=data.email,
            password=data.password
        )
        return {'message': 'User created successfully.'}
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)
    
@router.post('/login/', response=UserSignInResponse)
def sign_in(request, data: UserSignIn):
    user = authenticate(request, username=data.username, password=data.password)

    if user is not None:
        login(request, user)
        return {'token': 'your-auth-token'}
    else:
        return {'error': 'Invalid credentials'}, 401