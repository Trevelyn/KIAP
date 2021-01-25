from django.db import models
from customers.models import Customers

class Products(models.Model):
    productId = models.AutoField(primary_key=True)
    productName = models.CharField(max_length=250)
    itemsize = models.CharField(max_length=250)
    sku = models.CharField(max_length=100, default=None)
    price = models.IntegerField(default=0)
    
    
    
class Orders(models.Model):
    orderId = models.AutoField(primary_key=True)
    productId = models.ForeignKey(Products, on_delete=models.CASCADE, related_name='Id')
    productName = models.ForeignKey(Products, on_delete=models.CASCADE, related_name='Name')
    customerName = models.ForeignKey(Customers, on_delete=models.CASCADE)
    quanity = models.IntegerField()
    ordered_date = models.DateTimeField(auto_now_add=True)
    #delivery_date = models.DateTimeField()
   # payment = models.ForeignKey(
    #    'Payment', on_delete=models.SET_NULL, blank=True, null=True)
       
    
    
    
    

