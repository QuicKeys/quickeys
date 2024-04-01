from ninja import Schema
from datetime import date, datetime

class UserIn(Schema):
    auth_user_id: int
    birthdate: date
    contact_no: str

class UserOut(Schema):
    auth_user_id: int
    birthdate: date
    contact_no: str
    created_at: datetime