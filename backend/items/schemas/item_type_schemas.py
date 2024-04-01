from ninja import Schema
from datetime import datetime


class ItemTypeIn(Schema):
    item_type_name: str

class ItemTypeOut(Schema):
    item_type_id: int
    item_type_name: str
    created_at: datetime