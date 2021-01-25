from django.conf.urls import url
from users import views

urlpatterns = [
    url(r'^users/$', views.userApi),
    url(r'^users/([0-9]+)$', views.userApi)
    
]