from django.urls import path
from .views.order_views import (
    OrderCreate,
    OrderListCreate,
    OrderRetrieveUpdateDestroy,
    OrderRetrieve,
    OrderList,

    OrderLineCreate,
    OrderLineListCreate,
    OrderLineRetrieveUpdateDestroy,
    DeleteAllOrderLinesView,
    OrderLineRetrieve,
    OrderLineList
)


urlpatterns = [
    path('create/', OrderCreate.as_view(), name='order-create'),
    path('list/create/', OrderListCreate.as_view(), name='order-list-create'),
    path('edit/<int:order_id>/', OrderRetrieveUpdateDestroy.as_view(), name='order-edit'),
    path('view/<int:order_id>/', OrderRetrieve.as_view(), name='order-view'),
    path('list/', OrderList.as_view(), name='order-list'),

    path('line/create/', OrderLineCreate.as_view(), name='order-line-create'),
    path('line/list/create/', OrderLineListCreate.as_view(), name='order-line-list-create'),
    path('line/edit/<int:order_line_id>/', OrderLineRetrieveUpdateDestroy.as_view(), name='order-line-edit'),
    path('line/delete-all/<int:order>/', DeleteAllOrderLinesView.as_view(), name='delete-all-order-lines'),
    path('line/view/<int:order_line_id>/', OrderLineRetrieve.as_view(), name='order-line-view'),
    path('line/list/', OrderLineList.as_view(), name='order-line-list'),
]