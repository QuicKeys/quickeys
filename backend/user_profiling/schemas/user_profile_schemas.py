from ninja import Schema
from datetime import date, datetime


class AuthUserOut(Schema):
    username: str
    first_name: str
    last_name: str
    email: str
    date_joined: datetime

class UserIn(Schema):
    auth_user_id: int
    birthdate: date
    contact_no: str

class UserOut(Schema):
    auth_user: AuthUserOut
    birthdate: date
    contact_no: str
    created_at: datetime

class UserAddressIn(Schema):
    user_address: str

class UserAddressOut(Schema):
    user_id: int 
    user_address: str
    created_at: datetime