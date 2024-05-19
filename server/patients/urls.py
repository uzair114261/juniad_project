from django.urls import path
from patients import views

urlpatterns = [
    path('create_patient', views.create_patient, name='create_patient'),
    path('get_patients', views.get_all_patients, name='get_patients'),
]
