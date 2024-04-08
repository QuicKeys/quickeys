from django.urls import path
from .views.item_type_views import (
    ItemTypeCreate,
    ItemTypeListCreate,
    ItemTypeRetrieveUpdateDestroy,
    ItemTypeRetrieve,
    ItemTypeList
)
from .views.item_profile_views import (
    ItemCreate,
    ItemListCreate,
    ItemRetrieveUpdateDestroy,
    ItemRetrieve,
    ItemList
)
from .views.item_property_views import (
    ItemPropertyCreate,
    ItemPropertyListCreate,
    ItemPropertyRetrieveUpdateDestroy,
    ItemPropertyRetrieve,
    ItemPropertyList,

    ItemPropertyValueCreate,
    ItemPropertyValueListCreate,
    ItemPropertyValueRetrieveUpdateDestroy,
    ItemPropertyValueRetrieve,
    ItemPropertyValueList
)


urlpatterns = [
    path('item-type/create/', ItemTypeCreate.as_view(), name='item-type-create'),
    path('item-type/list/create/', ItemTypeListCreate.as_view(), name='item-type-list-create'),
    path('item-type/edit/<int:item_type_id>/', ItemTypeRetrieveUpdateDestroy.as_view(), name='item-type-edit'),
    path('item-type/view/<int:item_type_id>/', ItemTypeRetrieve.as_view(), name='item-type-view'),
    path('item-type/list/', ItemTypeList.as_view(), name='item-type-list'),

    path('item/create/', ItemCreate.as_view(), name='item-create'),
    path('item/list/create/', ItemListCreate.as_view(), name='item-list-create'),
    path('item/edit/<int:item_id>/', ItemRetrieveUpdateDestroy.as_view(), name='item-edit'),
    path('item/view/<int:item_id>/', ItemRetrieve.as_view(), name='item-view'),
    path('item/list/', ItemList.as_view(), name='item-list'),

    path('item-property/create/', ItemPropertyCreate.as_view(), name='item-property-create'),
    path('item-property/list/create/', ItemPropertyListCreate.as_view(), name='item-property-list-create'),
    path('item-property/edit/<int:item_property_id>/', ItemPropertyRetrieveUpdateDestroy.as_view(), name='item-property-edit'),
    path('item-property/view/<int:item_property_id>/', ItemPropertyRetrieve.as_view(), name='item-property-view'),
    path('item-property/list/', ItemPropertyList.as_view(), name='item-property-list'),

    path('item-property/value/create/', ItemPropertyValueCreate.as_view(), name='item-property-create'),
    path('item-property/value/list/create/', ItemPropertyValueListCreate.as_view(), name='item-property-list-create'),
    path('item-property/value/edit/<int:item_property_value_id>/', ItemPropertyValueRetrieveUpdateDestroy.as_view(), name='item-property-edit'),
    path('item-property/value/view/<int:item_property_value_id>/', ItemPropertyValueRetrieve.as_view(), name='item-property-view'),
    path('item-property/value/list/', ItemPropertyValueList.as_view(), name='item-property-list'),
]