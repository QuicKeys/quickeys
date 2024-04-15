from django.db import models
from django.db.models import Q
from django.db.models.functions import Lower
from django.contrib.auth.models import User



class Item(models.Model):
    item_id = models.AutoField(primary_key=True)
    item_name = models.CharField(unique=True, max_length=255)
    item_type = models.ForeignKey('ItemType', models.DO_NOTHING)
    item_description = models.CharField(max_length=255, blank=True, null=True)
    item_price = models.DecimalField(max_digits=15, decimal_places=2)
    item_brand = models.ForeignKey('ItemBrand', models.DO_NOTHING)
    item_profile_picture_link = models.TextField(blank=True, null=True)
    item_quantity = models.IntegerField()
    restock_point = models.IntegerField()
    is_active = models.BooleanField()

    class Meta:
        managed = True
        db_table = 'item'

    def __str__(self):
        return self.item_name


class ItemBrand(models.Model):
    item_brand_id = models.AutoField(primary_key=True)
    item_brand_name = models.CharField(unique=True, max_length=255)

    class Meta:
        managed = True
        db_table = 'item_brand'

    def __str__(self):
        return self.item_brand_name


class ItemPicture(models.Model):
    item_picture_id = models.AutoField(primary_key=True)
    item = models.ForeignKey(Item, models.DO_NOTHING)
    link = models.TextField()

    class Meta:
        managed = True
        db_table = 'item_picture'

    def __str__(self):
        return str(self.item.item_name + ' Picture ') + str(self.item_picture_id)


class ItemProperty(models.Model):
    item_property_id = models.AutoField(primary_key=True)
    item_property_name = models.CharField(unique=True, max_length=255)
    item_property_datatype = models.CharField(max_length=255, help_text='Valid values: string, integer, decimal, boolean')

    class Meta:
        managed = True
        db_table = 'item_property'
        constraints = [
            models.CheckConstraint(
                name='valid_item_property_datatype',
                check=Q(item_property_datatype__in=['string', 'integer', 'decimal', 'boolean']),
            ),
        ]

    def __str__(self):
        return self.item_property_name


class ItemPropertyValue(models.Model):
    item_property_value_id = models.AutoField(primary_key=True)
    item = models.ForeignKey(Item, models.DO_NOTHING)
    item_property = models.ForeignKey(ItemProperty, models.DO_NOTHING)
    item_property_value = models.CharField(max_length=255)

    class Meta:
        managed = True
        db_table = 'item_property_value'

    def __str__(self):
        return str(self.item) + ' ' + str(self.item_property)


class ItemType(models.Model):
    item_type_id = models.AutoField(primary_key=True)
    item_type_name = models.CharField(unique=True, max_length=255)

    class Meta:
        managed = True
        db_table = 'item_type'

    def __str__(self):
        return self.item_type_name


class KeyboardBuilder(models.Model):
    keyboard_builder_id = models.AutoField(primary_key=True)
    self_assembly = models.BooleanField()
    user = models.ForeignKey('UserProfile', models.DO_NOTHING)

    class Meta:
        managed = True
        db_table = 'keyboard_builder'

    def __str__(self):
        return str(self.user) + ' Build ' + str(self.keyboard_builder_id)

class KeyboardBuilderItem(models.Model):
    keyboard_builder_item_id = models.AutoField(primary_key=True)
    keyboard_builder = models.ForeignKey(KeyboardBuilder, models.DO_NOTHING)
    item = models.ForeignKey(Item, models.DO_NOTHING)

    class Meta:
        managed = True
        db_table = 'keyboard_builder_item'

    def __str__(self):
        return str(self.keyboard_builder) + ' Item ' + str(self.keyboard_builder_item_id)


class OrderLine(models.Model):
    order_line_id = models.AutoField(primary_key=True)
    order = models.ForeignKey('Orders', models.DO_NOTHING)
    item = models.ForeignKey(Item, models.DO_NOTHING)
    order_quantity = models.IntegerField()

    class Meta:
        managed = True
        db_table = 'order_line'
    
    def __str__(self):
        return str(self.order) + ' Item ' + str(self.order_line_id)


class Orders(models.Model):
    order_id = models.AutoField(primary_key=True)
    order_status = models.CharField(max_length=255, help_text='Valid values: pending, processing, shipped')
    payment_status = models.CharField(max_length=255, help_text='Valid values: pending, paid, failed, refunded')
    order_date = models.DateTimeField()
    user = models.ForeignKey('UserProfile', models.DO_NOTHING)

    class Meta:
        managed = True
        db_table = 'orders'
        constraints = [
            models.CheckConstraint(
                name='valid_order_status',
                check=Q(order_status__in=['pending', 'processing', 'shipped']),
            ),
            models.CheckConstraint(
                name='valid_payment_status',
                check=Q(payment_status__in=['pending', 'paid', 'failed', 'refunded']),
            ),
        ]

    def __str__(self):
        return str(self.user) + ' Order ' + str(self.order_id)


class UserAddress(models.Model):
    user_address_id = models.AutoField(primary_key=True)
    user = models.ForeignKey('UserProfile', models.DO_NOTHING)
    user_address = models.CharField(max_length=255)

    class Meta:
        managed = True
        db_table = 'user_address'

    def __str__(self):
        return str(self.user.auth_user.first_name) + ' ' + str(self.user.auth_user.last_name) + ' Address ' + str(self.user_address_id)


class UserProfile(models.Model):
    user_id = models.AutoField(primary_key=True)
    auth_user = models.ForeignKey(User, models.DO_NOTHING)
    birthdate = models.DateField(blank=True, null=True)
    contact_no = models.CharField(max_length=11, blank=True, null=True)
    profile_picture_link = models.TextField(blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'user_profile'

    def __str__(self):
        return self.auth_user.first_name + ' ' + self.auth_user.last_name