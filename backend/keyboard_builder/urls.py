from django.urls import path
from .views.keyboard_builder_views import (
    KeyboardBuilderCreate,
    KeyboardBuilderListCreate,
    KeyboardBuilderRetrieveUpdateDestroy,
    KeyboardBuilderRetrieve,
    KeyboardBuilderList,

    KeyboardBuilderItemCreate,
    KeyboardBuilderItemListCreate,
    KeyboardBuilderItemRetrieveUpdateDestroy,
    KeyboardBuilderItemRetrieve,
    KeyboardBuilderItemList
)


urlpatterns = [
    path('create/', KeyboardBuilderCreate.as_view(), name='keyboard-builder-create'),
    path('list/create/', KeyboardBuilderListCreate.as_view(), name='keyboard-builder-list-create'),
    path('edit/<int:keyboard_builder_id>/', KeyboardBuilderRetrieveUpdateDestroy.as_view(), name='keyboard-builder-edit'),
    path('view/<int:keyboard_builder_id>/', KeyboardBuilderRetrieve.as_view(), name='keyboard-builder-view'),
    path('list/', KeyboardBuilderList.as_view(), name='keyboard-builder-list'),

    path('item/create/', KeyboardBuilderItemCreate.as_view(), name='keyboard-builder-item-create'),
    path('item/list/create/', KeyboardBuilderItemListCreate.as_view(), name='keyboard-builder-item-list-create'),
    path('item/edit/<int:keyboard_builder_item_id>/', KeyboardBuilderItemRetrieveUpdateDestroy.as_view(), name='keyboard-builder-item-edit'),
    path('item/view/<int:keyboard_builder_item_id>/', KeyboardBuilderItemRetrieve.as_view(), name='keyboard-builder-item-view'),
    path('item/list/', KeyboardBuilderItemList.as_view(), name='keyboard-builder-item-list'),
]