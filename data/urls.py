from django.urls import path
from .views import HomePageView, get_data, add_data, receive_data


urlpatterns = [
    path('', HomePageView.as_view()),
    path('get_data/', get_data, name='get_data'),
    path('add_data/', add_data, name='add_data'),
    path('receive_data/', receive_data, name='receive_data')
]
