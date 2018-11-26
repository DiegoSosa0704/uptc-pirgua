from django.shortcuts import render
from django.views.generic import TemplateView
from django.core.serializers import serialize
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from . import serializers

from .models import PointData
from django.http import HttpResponse


class HomePageView(TemplateView):
    template_name = 'index.html'


def get_data(request):
    point = serialize('geojson', PointData.objects.all())
    return HttpResponse(point, content_type='json')


@api_view(['POST'])
def add_data(request):
    if request.method == "POST":
        serializer = serializers.PointDataSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def receive_data(request):
    print(request.data)
    return Response({'detail': request.data}, status.HTTP_200_OK)
