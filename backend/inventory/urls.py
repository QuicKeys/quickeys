from django.urls import path
from .views.item_type_views import (
    ItemTypeCreateAPIView,
    ItemTypeDetailAPIView,
    ItemTypeListAPIView
)


urlpatterns = [
    path('create/', ItemTypeCreateAPIView.as_view(), name='item-type-create'),
    path('view/<int:item_type_id>/', ItemTypeDetailAPIView.as_view(), name='item-type-detail'),
    path('list/', ItemTypeListAPIView.as_view(), name='item-type-list'),
    path('edit/<int:item_type_id>/', ItemTypeDetailAPIView.as_view(), name='item-type-edit'),
    path('delete/<int:item_type_id>/', ItemTypeDetailAPIView.as_view(), name='item-type-delete'),
]