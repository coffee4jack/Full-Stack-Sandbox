from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .models import TestUsers, Product
from .serializers import TestUsersSerializer, ProductSerializer

# Create your views here.
def SayHi(request):
    return HttpResponse("Hello World!")

class TestUsersViewSet(viewsets.ModelViewSet):
    queryset = TestUsers.objects.all()
    serializer_class = TestUsersSerializer
    # Users can get, post and delete
    http_method_names = ['get', 'post', 'delete']

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    http_method_names = ['get', 'post', 'put', 'patch', 'delete']



