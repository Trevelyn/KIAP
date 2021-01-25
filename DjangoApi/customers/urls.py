from django.conf.urls import url
from customers import views

urlpatterns = [
    url(r'^customers/$', views.customerApi),
    url(r'^customers/([0-9]+)$', views.customerApi),
    
    url(r'^regions/$', views.regionApi),
    url(r'^regions/([0-9]+)$', views.regionApi)
    
]
