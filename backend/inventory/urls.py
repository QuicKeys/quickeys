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
from .views.item_property_views import (
    ItemPropertyCreateAPIView,
    ItemPropertyDetailAPIView,
    ItemPropertyListAPIView,
    ItemPropertyValueCreateAPIView,
    ItemPropertyValueDetailAPIView,
    ItemPropertyValueListAPIView
)


urlpatterns = [
    # Item Type API Endpoint URLs
    path('item-type/create/', ItemTypeCreateAPIView.as_view(), name='item-type-create'),
    path('item-type/view/<int:item_type_id>/', ItemTypeDetailAPIView.as_view(), name='item-type-detail'),
    path('item-type/edit/<int:item_type_id>/', ItemTypeDetailAPIView.as_view(), name='item-type-edit'),
    path('item-type/delete/<int:item_type_id>/', ItemTypeDetailAPIView.as_view(), name='item-type-delete'),
    path('item-type/list/', ItemTypeListAPIView.as_view(), name='item-type-list'),

    # Item Profile API Endpoint URLs
    path('item/create/', ItemCreateAPIView.as_view(), name='item-create'),
    path('item/view/<int:item_id>/', ItemDetailAPIView.as_view(), name='item-detail'),
    path('item/edit/<int:item_id>/', ItemDetailAPIView.as_view(), name='item-edit'),
    path('item/delete/<int:item_id>/', ItemDetailAPIView.as_view(), name='item-delete'),
    path('item/list/', ItemListAPIView.as_view(), name='item-list'),

    # Item Property API Endpoint URLs
    path('item-property/create/', ItemPropertyCreateAPIView.as_view(), name='item-property-create'),
    path('item-property/view/<int:item_property_id>/', ItemPropertyDetailAPIView.as_view(), name='item-property-detail'),
    path('item-property/edit/<int:item_property_id>/', ItemPropertyDetailAPIView.as_view(), name='item-property-edit'),
    path('item-property/delete/<int:item_property_id>/', ItemPropertyDetailAPIView.as_view(), name='item-property-delete'),
    path('item-property/list/', ItemPropertyListAPIView.as_view(), name='item-property-list'),

    # Item Property Value API Endpoint URLs
    path('item/item-property/value/create/', ItemPropertyValueCreateAPIView.as_view(), name='item-property-value-create'),
    path('item/<int:item_id>/item-property/<int:item_property_id>/value/view/', ItemPropertyValueDetailAPIView.as_view(), name='item-property-value-view'),
    path('item/<int:item_id>/item-property/<int:item_property_id>/value/edit/', ItemPropertyValueDetailAPIView.as_view(), name='item-property-value-edit'),
    path('item/<int:item_id>/item-property/<int:item_property_id>/value/delete/', ItemPropertyValueDetailAPIView.as_view(), name='item-property-value-delete'),
    path('item/<int:item_id>/item-property/value/list/', ItemPropertyValueListAPIView.as_view(), name='item-property-value-list'),
]