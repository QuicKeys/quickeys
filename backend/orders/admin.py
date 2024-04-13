from django.contrib import admin
from .models import Orders, OrderLine


admin.site.register(Orders)
admin.site.register(OrderLine)