from django.db import models
from core.models import AuthUser


class UserAddress(models.Model):
    user_address_id = models.AutoField(primary_key=True)
    user = models.ForeignKey('UserProfile', models.DO_NOTHING)
    user_address = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'user_address'


class UserProfile(models.Model):
    user_id = models.AutoField(primary_key=True)
    auth_user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    birthdate = models.DateField(blank=True, null=True)
    contact_no = models.CharField(max_length=11, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'user_profile'

    def __str__(self):
        return self.auth_user.first_name + ' ' + self.auth_user.last_name