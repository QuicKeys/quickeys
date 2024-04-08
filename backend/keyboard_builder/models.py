from django.db import models
from inventory.models import Item


class KeyboardBuilder(models.Model):
    keyboard_builder_id = models.AutoField(primary_key=True)
    user = models.ForeignKey('user_profiling.UserProfile', models.DO_NOTHING)
    keyboard_assembly = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'keyboard_builder'

    def __str__(self):
        return str(self.user) + ' Build ' + str(self.keyboard_builder_id)

class KeyboardBuilderItem(models.Model):
    keyboard_builder_item_id = models.AutoField(primary_key=True)
    keyboard_builder = models.ForeignKey(KeyboardBuilder, models.DO_NOTHING)
    item = models.ForeignKey(Item, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'keyboard_builder_item'