from django.shortcuts import render
from django.views.generic import TemplateView
from django.core.serializers import serialize
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import StationDataSerializer
from .models import StationPoint, StationData
from django.http import HttpResponse
import pyrebase

config = {
    "apiKey": "AIzaSyC3e1ROiSyZNBxMPp1YoWiHgBxEm4YfBL8",
    "authDomain": "uptc-pirgua.firebaseapp.com",
    "databaseURL": "https://uptc-pirgua.firebaseio.com",
    "projectId": "uptc-pirgua",
    "storageBucket": "uptc-pirgua.appspot.com",
    "messagingSenderId": "299290845683"
}

firebase = pyrebase.initialize_app(config)
db = firebase.database()


class HomePageView(TemplateView):
    template_name = 'index.html'
    pass


@api_view(['GET'])
def get_data(request):
    point = serialize('geojson', StationPoint.objects.all())
    return HttpResponse(point, content_type='json')


@api_view(['POST'])
def add_data(request):
    if request.method == "POST":
        serializer = StationDataSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def receive_data(request):
    station_name = request.data.get('station_name')
    db.child(station_name).update({
        "analog_in_1": request.data.get('data').get('analog_in_1'),
        "analog_in_2": request.data.get('data').get('analog_in_2'),
        "analog_in_3": request.data.get('data').get('analog_in_3'),
        "analog_in_4": request.data.get('data').get('analog_in_4')
    })
    station = StationPoint.objects.get(station_name=station_name)
    StationData.objects.create(
        station_point = station,
        ph = request.data.get('data').get('analog_in_1'),
        dissolved_oxygen = request.data.get('data').get('analog_in_2'),
        electric_conductivity = request.data.get('data').get('analog_in_3'),
        state = request.data.get('data').get('analog_in_4')
    )

    return Response({'detail': request.data}, status.HTTP_200_OK)
