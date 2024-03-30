# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models
from django.utils import timezone

class Item(models.Model):
    item_id = models.AutoField(primary_key=True)
    item_type = models.ForeignKey('ItemType', models.DO_NOTHING)
    item_name = models.CharField(unique=True, max_length=255)
    item_description = models.CharField(max_length=255, blank=True, null=True)
    item_price = models.DecimalField(max_digits=15, decimal_places=2)
    serial_number = models.CharField(unique=True, max_length=255)
    item_quantity = models.IntegerField()
    restock_point = models.IntegerField()
    created_at = models.DateTimeField(blank=True, default=timezone.now)

    class Meta:
        managed = False
        db_table = 'item'


class ItemProperty(models.Model):
    item_property_id = models.AutoField(primary_key=True)
    item_property_name = models.CharField(unique=True, max_length=255)
    item_property_datatype = models.CharField(max_length=255)
    created_at = models.DateTimeField(blank=True, default=timezone.now)

    class Meta:
        managed = False
        db_table = 'item_property'


class ItemPropertyValue(models.Model):
    item_property_value_id = models.AutoField(primary_key=True)
    item = models.ForeignKey(Item, models.DO_NOTHING)
    item_property = models.ForeignKey(ItemProperty, models.DO_NOTHING)
    item_property_value = models.CharField(max_length=255)
    created_at = models.DateTimeField(blank=True, default=timezone.now)

    class Meta:
        managed = False
        db_table = 'item_property_value'


class ItemType(models.Model):
    item_type_id = models.AutoField(primary_key=True)
    item_type_name = models.CharField(unique=True, max_length=255)
    created_at = models.DateTimeField(blank=True, default=timezone.now)

    class Meta:
        managed = False
        db_table = 'item_type'


class KeyboardBuilder(models.Model):
    keyboard_builder_id = models.AutoField(primary_key=True)
    user = models.ForeignKey('Users', models.DO_NOTHING)
    keyboard_assembly = models.IntegerField()
    created_at = models.DateTimeField(blank=True, default=timezone.now)

    class Meta:
        managed = False
        db_table = 'keyboard_builder'


class KeyboardBuilderItem(models.Model):
    keyboard_builder_item_id = models.AutoField(primary_key=True)
    keyboard_builder = models.ForeignKey(KeyboardBuilder, models.DO_NOTHING)
    item = models.ForeignKey(Item, models.DO_NOTHING)
    created_at = models.DateTimeField(blank=True, default=timezone.now)

    class Meta:
        managed = False
        db_table = 'keyboard_builder_item'


class LoginAccount(models.Model):
    login_account_id = models.AutoField(primary_key=True)
    login_email = models.CharField(unique=True, max_length=255)
    login_password = models.TextField()
    created_at = models.DateTimeField(blank=True, default=timezone.now)

    class Meta:
        managed = False
        db_table = 'login_account'


class OrderLine(models.Model):
    order_line_id = models.AutoField(primary_key=True)
    order = models.ForeignKey('Orders', models.DO_NOTHING)
    item = models.ForeignKey(Item, models.DO_NOTHING)
    order_quantity = models.IntegerField()
    created_at = models.DateTimeField(blank=True, default=timezone.now)

    class Meta:
        managed = False
        db_table = 'order_line'


class Orders(models.Model):
    order_id = models.AutoField(primary_key=True)
    user = models.ForeignKey('Users', models.DO_NOTHING)
    order_status = models.IntegerField()
    payment_status = models.IntegerField()
    order_date = models.DateTimeField()
    created_at = models.DateTimeField(blank=True, default=timezone.now)

    class Meta:
        managed = False
        db_table = 'orders'


class Roles(models.Model):
    role_id = models.AutoField(primary_key=True)
    role_name = models.CharField(unique=True, max_length=255)
    created_at = models.DateTimeField(blank=True, default=timezone.now)

    class Meta:
        managed = False
        db_table = 'roles'


class UserAddress(models.Model):
    user_address_id = models.AutoField(primary_key=True)
    user = models.ForeignKey('Users', models.DO_NOTHING)
    user_address = models.CharField(max_length=255)
    created_at = models.DateTimeField(blank=True, default=timezone.now)

    class Meta:
        managed = False
        db_table = 'user_address'


class UserRoles(models.Model):
    user_role_id = models.AutoField(primary_key=True)
    user = models.ForeignKey('Users', models.DO_NOTHING)
    role = models.ForeignKey(Roles, models.DO_NOTHING)
    created_at = models.DateTimeField(blank=True, default=timezone.now)

    class Meta:
        managed = False
        db_table = 'user_roles'


class Users(models.Model):
    user_id = models.AutoField(primary_key=True)
    login_account = models.ForeignKey(LoginAccount, models.DO_NOTHING)
    first_name = models.CharField(max_length=50)
    middle_name = models.CharField(max_length=50, blank=True, null=True)
    last_name = models.CharField(max_length=50)
    birthdate = models.DateField(blank=True, null=True)
    contact_no = models.CharField(max_length=11, blank=True, null=True)
    created_at = models.DateTimeField(blank=True, default=timezone.now)

    class Meta:
        managed = False
        db_table = 'users'
