# users/serializers.py
from rest_framework import serializers
from .models import Users

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users 
        fields = '__all__'  

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ('email', 'password')