from user_account.models import AppUser
from rest_framework import serializers


class appUserSerializer(serializers.ModelSerializer):
#  first_name=serializers.CharField(max_length=100)
#  last_name=serializers.CharField(max_length=100)
#  email=serializers.EmailField(max_length=50)
#  phone=serializers.CharField(max_length=50)
#  is_staff=serializers.BooleanField()
 password=serializers.CharField(max_length=100,write_only=True)

 class Meta:
  model=AppUser
  fields='__all__'

