from django.urls import path
from users import views

urlpatterns = [
    path('create-users/', views.create_users, name='create_customer'),
    path('login/', views.LoginView.as_view(), name='login')
]
