from django.db import models
from inventory.models import Item


class OrderLine(models.Model):
    order_line_id = models.AutoField(primary_key=True)
    order = models.ForeignKey('Orders', models.DO_NOTHING)
    item = models.ForeignKey(Item, models.DO_NOTHING)
    order_quantity = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'order_line'


class Orders(models.Model):
    order_id = models.AutoField(primary_key=True)
    user = models.ForeignKey('user_profiling.UserProfile', models.DO_NOTHING)
    order_status = models.IntegerField()
    payment_status = models.IntegerField()
    order_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'orders'

    def __str__(self):
        return str(self.user) + ' Order ' + str(self.order_id)