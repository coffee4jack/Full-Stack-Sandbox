from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .models import TestUsers, Product
from .serializers import TestUsersSerializer, ProductSerializer
import subprocess
import os


# =========== Create your views here ===========
# ==============================================


#Simple Hello World
def SayHi(request):
    return HttpResponse("Hello World!")

#CRUD TestUsers
class TestUsersViewSet(viewsets.ModelViewSet):
    queryset = TestUsers.objects.all()
    serializer_class = TestUsersSerializer
    # Users can get, post and delete
    http_method_names = ['get', 'post*/', 'delete']

#CRUD Product
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    http_method_names = ['get', 'post', 'put', 'patch', 'delete']

# Execute a python script from scripts folder
def start_script(request):
    base_dir = os.path.dirname(os.path.abspath(__file__))
    script_path = os.path.join(base_dir, "scripts", "hello.py")
    resultado = subprocess.run(["python", script_path], capture_output=True, text=True)
    return HttpResponse(resultado.stdout if resultado.stdout else resultado.stderr)
