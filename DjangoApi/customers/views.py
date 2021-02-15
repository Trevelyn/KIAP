from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from customers.models import Customers, Regions
from customers.serializers import CustomersSerializer, RegionsSerializer


@csrf_exempt
def customerApi(request,id=0):
    if request.method=='GET':
        customers = Customers.objects.all()
        customers_serializer = CustomersSerializer(customers, many=True)
        return JsonResponse(customers_serializer.data, safe=False)
    
    elif request.method == 'POST':
        customer_data=JSONParser().parse(request)
        customers_serializer = CustomersSerializer(data=customer_data)
        if customers_serializer.is_valid():
            customers_serializer.save()
            return JsonResponse("Added succefully!", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    
    elif request.method=='PUT':
        customer_data = JSONParser().parse(request)
        customers = Customers.objects.get(customerId=customer_data['customerId'])
        customers_serializer = CustomersSerializer(customers,data=customer_data)
        if customers_serializer.is_valid():
            customers_serializer.save()
            return JsonResponse("update succefully!", safe=False)
        return JsonResponse("Failed to update", safe=False)
    
    elif request.method == 'DELETE':
        customers = Customers.objects.get(customerId=id)
        customers.delete()
        return JsonResponse("Delete sucessfull", safe=False) 



@csrf_exempt
def regionApi(request,id=0):
    if request.method=='GET':
        regions = Regions.objects.all()
        region_serializer = RegionsSerializer(regions, many=True)
        return JsonResponse(region_serializer.data, safe=False)
    
    elif request.method == 'POST':
        region_data=JSONParser().parse(request)
        region_serializer = RegionsSerializer(data=region_data)
        if region_serializer.is_valid():
            region_serializer.save()
            return JsonResponse("Aded succefully!", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    
    elif request.method=='PUT':
        region_data = JSONParser().parse(request)
        regions = Regions.objects.get(regionId=region_data['regionId'])
        region_serializer = RegionsSerializer(regions,data=region_data)
        if region_serializer.is_valid():
            region_serializer.save()
            return JsonResponse("update succefully!", safe=False)
        return JsonResponse("Failed to update", safe=False)
    
    elif request.method == 'DELETE':
        regions = Regions.objects.get(regionId=id)
        regions.delete()
        return JsonResponse("Delete sucessfull", safe=False) 
