from django.db import models

class Customers(models.Model):
    customerId = models.AutoField(primary_key=True)
    customerName = models.CharField(max_length=250)
    category = models.CharField(max_length=250)
    
    
class Regions(models.Model):
    regionId = models.AutoField(primary_key=True)
    regionName = models.CharField(max_length=250)
    town = models.CharField(max_length=250)  
    