from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from products.models import Products, Orders
from products.serializers import ProductsSerializer, OrdersSerializer




@csrf_exempt
def productApi(request,id=0):
    if request.method=='GET':
        products = Products.objects.all()
        product_serializer = ProductsSerializer(products, many=True)
        return JsonResponse(product_serializer.data, safe=False)
    
    elif request.method == 'POST':
        product_data=JSONParser().parse(request)
        product_serializer = ProductsSerializer(data=product_data)
        if product_serializer.is_valid():
            product_serializer.save()
            return JsonResponse("Aded succefully!", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    
    elif request.method=='PUT':
        product_data = JSONParser().parse(request)
        product = Products.objects.get(productId=product_data['productId'])
        product_serializer = ProductsSerializer(data=product_data)
        if product_serializer.is_valid():
            product_serializer.save()
            return JsonResponse("update succefully!", safe=False)
        return JsonResponse("Failed to update", safe=False)
    
    elif request.method == 'DELETE':
        product = Products.objects.get(productId=id)
        product.delete()
        return JsonResponse("Delete sucessfull", safe=False)
    
 #orders

@csrf_exempt
def orderApi(request,id=0):
    if request.method=='GET':
        orders = Orders.objects.all()
        order_serializer = OrdersSerializer(orders, many=True)
        return JsonResponse(order_serializer.data, safe=False)
    
    elif request.method == 'POST':
        order_data=JSONParser().parse(request)
        order_serializer = OrdersSerializer(data=order_data)
        if order_serializer.is_valid():
            order_serializer.save()
            return JsonResponse("Aded succefully!", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    
    elif request.method=='PUT':
        order_data = JSONParser().parse(request)
        order = Orders.objects.get(orderId=order_data['orderId'])
        order_serializer = OrdersSerializer(data=order_data)
        if order_serializer.is_valid():
            order_serializer.save()
            return JsonResponse("update succefully!", safe=False)
        return JsonResponse("Failed to update", safe=False)
    
    elif request.method == 'DELETE':
        order = Orders.objects.get(orderId=id)
        order.delete()
        return JsonResponse("Delete sucessfull", safe=False)
    

