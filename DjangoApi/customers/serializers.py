from rest_framework import serializers
from customers.models import Customers, Regions

class CustomersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customers
        fields = ('customerId',
                  'customerName',
                  'category')
        

class RegionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Regions
        fields = ('regionId',
              'regionName',
              'town')         