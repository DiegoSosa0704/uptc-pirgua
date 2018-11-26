from django.contrib.gis.db import models
from django.contrib.gis.geos import Point


class PointData(models.Model):
    lat = models.FloatField(blank=True)
    long = models.FloatField(blank=True)
    geo = models.PointField(srid=3116, blank=True)