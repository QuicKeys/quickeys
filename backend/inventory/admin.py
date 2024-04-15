from django.contrib import admin
from core.models import (
    ItemType,
    Item,
    ItemProperty,
    ItemBrand,
    ItemPicture,
    ItemPropertyValue
)


admin.site.register(ItemType)
admin.site.register(Item)
admin.site.register(ItemProperty)
admin.site.register(ItemBrand)
admin.site.register(ItemPicture)
admin.site.register(ItemPropertyValue)