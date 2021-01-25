from rest_framework import serializers
from products.models import Products, Orders

class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = ('productId', 
                  'productName',
                  'itemsize',
                  'sku',
                  'price')
    
class OrdersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orders
        fields = ('orderId',
                  'productId',
                  'productName',
                  'customerName',
                  'quanity',
                  'ordered_date')    
