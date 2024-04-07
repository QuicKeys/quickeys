from django.urls import path
from .views.keyboard_builder_views import (
    KeyboardBuilderCreateAPIView,
    KeyboardBuilderDetailAPIView,
    KeyboardBuilderListAPIView,
    UserKeyboardBuilderListAPIView,
    KeyboardBuilderItemCreateAPIView,
    KeyboardBuilderItemDetailAPIView,
    KeyboardBuilderItemListAPIView
)


urlpatterns = [
    # Keyboard Builder API Endpoint URLs
    path('create/', KeyboardBuilderCreateAPIView.as_view(), name='keyboard-builder-create'),
    path('view/<int:keyboard_builder_id>/', KeyboardBuilderDetailAPIView.as_view(), name='keyboard-builder-detail'),
    path('edit/<int:keyboard_builder_id>/', KeyboardBuilderDetailAPIView.as_view(), name='keyboard-builder-edit'),
    path('delete/<int:keyboard_builder_id>/', KeyboardBuilderDetailAPIView.as_view(), name='keyboard-builder-delete'),
    path('list/', KeyboardBuilderListAPIView.as_view(), name='keyboard-builder-list'),
    path('user/<int:user_id>/list/', UserKeyboardBuilderListAPIView.as_view(), name='user-keyboard-builder-list'),

    # Keyboard Builder Item API Endpoint URLs
    path('item/create/', KeyboardBuilderItemCreateAPIView.as_view(), name='keyboard-builder-item-create'),
    path('item/view/<int:keyboard_builder_item_id>/', KeyboardBuilderItemDetailAPIView.as_view(), name='keyboard-builder-item-detail'),
    path('item/edit/<int:keyboard_builder_item_id>/', KeyboardBuilderItemDetailAPIView.as_view(), name='keyboard-builder-item-edit'),
    path('item/delete/<int:keyboard_builder_item_id>/', KeyboardBuilderItemDetailAPIView.as_view(), name='keyboard-builder-item-delete'),
    path('item/list/<int:keyboard_builder_id>/', KeyboardBuilderItemListAPIView.as_view(), name='keyboard-builder-item-list'),
]