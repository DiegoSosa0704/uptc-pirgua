from rest_framework import serializers
from .models import StationPoint
from django.contrib.gis.geos import Point, GEOSGeometry


class StationDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = StationPoint
        fields = (
            'geo'
        )

    def create(self, validated_data):
        lat = validated_data.pop('lat')
        long = validated_data.pop('long')
        point_map = StationPoint.objects.create(geo=Point(long, lat, srid=3116))
        point_map.save()
        return point_map
