from rest_framework import serializers
from . import models
from django.contrib.gis.geos import Point, GEOSGeometry


class PointDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.PointData
        fields = (
            'lat',
            'long',
            'geo'
        )

    def create(self, validated_data):
        lat = validated_data.pop('lat')
        long = validated_data.pop('long')
        point_map = models.PointData.objects.create(lat=lat, long=long, geo=Point(long, lat, srid=3116))
        point_map.save()
        return point_map
