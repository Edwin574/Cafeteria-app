from django.db import models
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin



# Create your models here.
class AppUserManager(BaseUserManager):
    def create_user(self,first_name,last_name,email,phone,passowrd=None):
        email=self.normalize_email(email)
        user=self.model(email=email,first_name=first_name,last_name=last_name,phone=phone)
        user.set_password(passowrd)
        user.save()
        return user
    def create_superuser(self,first_name,last_name,email,phone,password,**args):
        args.setdefault('is_superuser',True)
        args.setdefault('is_staff',True)

        return self.create_user(first_name,last_name,email,phone,password)
        

class AppUser(AbstractBaseUser,PermissionsMixin):
    first_name=models.CharField(max_length=100)
    last_name=models.CharField(max_length=100)
    email=models.EmailField(unique=True,max_length=50)
    phone=models.CharField(max_length=20)
    is_staff=models.BooleanField(default=False)

    objects=AppUserManager()

    def get_full_name(self):
        return f'{self.first_name} {self.last_name}'
    def get_short_name(self):
        return self.first_name
    def __str__(self):
        return self.email
    
class UserAccount(models.Model):
    pass