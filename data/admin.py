from django.contrib import admin
from .models import PointData
from leaflet.admin import LeafletGeoAdmin

class PointDataAdmin(LeafletGeoAdmin):
    pass


admin.site.register(PointData, PointDataAdmin)
