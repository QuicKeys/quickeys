from django.urls import path
from .views.item_type_views import (
    ItemTypeCreateAPIView,
    ItemTypeDetailAPIView,
    ItemTypeListAPIView
)
from .views.item_profile_views import (
    ItemCreateAPIView,
    ItemDetailAPIView,
    ItemListAPIView
)


urlpatterns = [
    path('item-type/create/', ItemTypeCreateAPIView.as_view(), name='item-type-create'),
    path('item-type/view/<int:item_type_id>/', ItemTypeDetailAPIView.as_view(), name='item-type-detail'),
    path('item-type/edit/<int:item_type_id>/', ItemTypeDetailAPIView.as_view(), name='item-type-edit'),
    path('item-type/delete/<int:item_type_id>/', ItemTypeDetailAPIView.as_view(), name='item-type-delete'),
    path('item-type/list/', ItemTypeListAPIView.as_view(), name='item-type-list'),
    path('item/create/', ItemCreateAPIView.as_view(), name='item-create'),
    path('item/view/<int:item_id>/', ItemDetailAPIView.as_view(), name='item-detail'),
    path('item/edit/<int:item_id>/', ItemDetailAPIView.as_view(), name='item-edit'),
    path('item/delete/<int:item_id>/', ItemDetailAPIView.as_view(), name='item-delete'),
    path('item/list/', ItemListAPIView.as_view(), name='item-list')
]