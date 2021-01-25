from django.db import models


class User(models.Model):
     userId = models.AutoField(primary_key=True)
     userName =  models.CharField(max_length=60)
     email = models.EmailField(max_length=50, unique=True)
     password = models.CharField(max_length=50)

