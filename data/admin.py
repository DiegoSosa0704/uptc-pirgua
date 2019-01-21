from django.contrib import admin
from .models import StationPoint, StationData
from leaflet.admin import LeafletGeoAdmin


class StationDataAdmin(LeafletGeoAdmin):
    pass

admin.site.register(StationPoint, StationDataAdmin)
admin.site.register(StationData)
