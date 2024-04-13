from django.db import models


class Item(models.Model):
    item_id = models.AutoField(primary_key=True)
    item_type = models.ForeignKey('ItemType', models.DO_NOTHING)
    item_name = models.CharField(unique=True, max_length=255)
    item_description = models.CharField(max_length=255, blank=True, null=True)
    item_price = models.DecimalField(max_digits=15, decimal_places=2)
    serial_number = models.CharField(unique=True, max_length=255)
    item_quantity = models.IntegerField()
    restock_point = models.IntegerField()
    is_active = models.BooleanField()

    class Meta:
        managed = False
        db_table = 'item'

    def __str__(self):
        return self.item_name


class ItemProperty(models.Model):
    item_property_id = models.AutoField(primary_key=True)
    item_property_name = models.CharField(unique=True, max_length=255)
    item_property_datatype = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'item_property'

    def __str__(self):
        return self.item_property_name


class ItemPropertyValue(models.Model):
    item_property_value_id = models.AutoField(primary_key=True)
    item = models.ForeignKey(Item, models.DO_NOTHING)
    item_property = models.ForeignKey(ItemProperty, models.DO_NOTHING)
    item_property_value = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'item_property_value'

    def __str__(self):
        return str(self.item) + ' ' + str(self.item_property)


class ItemType(models.Model):
    item_type_id = models.AutoField(primary_key=True)
    item_type_name = models.CharField(unique=True, max_length=255)

    class Meta:
        managed = False
        db_table = 'item_type'

    def __str__(self):
        return self.item_type_name