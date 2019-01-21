from django.contrib.gis.geos import Point
from django.contrib.gis.db import models

class StationPoint(models.Model):
    station_name = models.CharField(max_length=20)
    geo = models.PointField(srid=3116, blank=True)


class StationData(models.Model):
    station_point = models.ForeignKey(StationPoint, on_delete=models.CASCADE)
    ph = models.CharField(max_length=20)
    dissolved_oxygen = models.CharField(max_length=20)
    electric_conductivity = models.CharField(max_length=20)
    state = models.CharField(max_length=20)
