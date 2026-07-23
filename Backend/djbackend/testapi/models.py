from django.db import models

class TestUsers(models.Model):
    userid = models.IntegerField(primary_key=True)
    username = models.CharField(max_length=50)
    description = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'test_users'

class Product(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image_url = models.CharField(max_length=500, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'products'

