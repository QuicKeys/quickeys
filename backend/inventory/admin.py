from django.contrib import admin
from .models import (
    ItemType,
    Item,
    ItemProperty,
    ItemPropertyValue
)


admin.site.register(ItemType)
admin.site.register(Item)
admin.site.register(ItemProperty)
admin.site.register(ItemPropertyValue)