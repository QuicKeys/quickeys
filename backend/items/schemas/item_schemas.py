from ninja import Schema
from datetime import datetime
from decimal import Decimal
from ..schemas.item_type_schemas import ItemTypeOut


class ItemIn(Schema):
    item_type_id: int
    item_name: str
    item_description: str
    item_price: Decimal
    serial_number: str
    item_quantity: int
    restock_point: int
    is_active: bool

class ItemOut(Schema):
    item_type: ItemTypeOut
    item_name: str
    item_description: str
    item_price: Decimal
    serial_number: str
    item_quantity: int
    restock_point: int
    is_active: bool
    created_at: datetime

class ItemPropertyIn(Schema):
    item_property_name: str
    item_property_datatype: str

class ItemPropertyOut(Schema):
    item_property_name: str
    item_property_datatype: str
    created_at: datetime

class ItemPropertyValueIn(Schema):
    item_property_value: str

class ItemPropertyValueOut(Schema):
    item: ItemOut
    item_property: ItemPropertyOut
    created_at: datetime