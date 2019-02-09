from django.contrib.gis.geos import Point
from django.contrib.gis.db import models
from django.utils import timezone


class StationPoint(models.Model):
    station_name = models.CharField(max_length=20)
    geo = models.PointField(srid=3116, blank=True)


class StationData(models.Model):
    station_point = models.ForeignKey(StationPoint, on_delete=models.CASCADE)
    ph = models.DecimalField(max_digits=10, decimal_places=3)
    dissolved_oxygen = models.DecimalField(max_digits=10, decimal_places=3)
    electric_conductivity = models.DecimalField(max_digits=10, decimal_places=3)
    state = models.DecimalField(max_digits=10, decimal_places=3, blank=True, null=True)
    date = models.DateTimeField(auto_now_add=True, blank=True)
