from rest_framework import status
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import HTMLFormRenderer
from rest_framework.response import Response
from django.shortcuts import render


# Create your views here.

@api_view(["GET"])
@renderer_classes([HTMLFormRenderer])
def test(request):
    return render(request, "register.html")
