from django.conf.urls import url
from products import views

urlpatterns = [
    url(r'^products/$', views.productApi),
    url(r'^products/([0-9]+)$', views.productApi),
    url(r'^orders/$', views.orderApi),
    url(r'^orders/([0-9]+)$', views.orderApi)
    
    
]
