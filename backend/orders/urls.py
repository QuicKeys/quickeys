# from django.urls import path
# from .views.order_views import (
#     OrderCreateAPIView,
#     OrderDetailAPIView,
#     OrderListAPIView,
#     UserOrderListAPIView,
#     OrderLineCreateAPIView,
#     OrderLineDetailAPIView,
#     OrderLineListAPIView,
#     OrderItemListAPIView
# )


# urlpatterns = [
#     # Order API Endpoint URLs
#     path('create/', OrderCreateAPIView.as_view(), name='order-create'),
#     path('view/<int:order_id>/', OrderDetailAPIView.as_view(), name='order-detail'),
#     path('edit/<int:order_id>/', OrderDetailAPIView.as_view(), name='order-edit'),
#     path('delete/<int:order_id>/', OrderDetailAPIView.as_view(), name='order-delete'),
#     path('list/', OrderListAPIView.as_view(), name='order-list'),
#     path('user/<int:user_id>/list/', UserOrderListAPIView.as_view(), name='user-order-list'),

#     # Order Line API Endpoint URLs
#     path('line/create/', OrderLineCreateAPIView.as_view(), name='order-line-create'),
#     path('line/view/<int:order_line_id>/', OrderLineDetailAPIView.as_view(), name='order-line-detail'),
#     path('line/edit/<int:order_line_id>/', OrderLineDetailAPIView.as_view(), name='order-line-edit'),
#     path('line/delete/<int:order_line_id>/', OrderLineDetailAPIView.as_view(), name='order-line-delete'),
#     path('line/list/', OrderLineListAPIView.as_view(), name='order-line-list'),
#     path('<int:order_id>/line/list/', OrderItemListAPIView.as_view(), name='order-item-list'),
# ]