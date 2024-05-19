from django.db import models

# Create your models here.
class Patient(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    cnic = models.CharField(max_length=100)
    disorder = models.CharField(max_length=255)
    fee_paid = models.CharField(max_length=100)
    attendant = models.CharField(max_length=100)
    address = models.CharField(max_length=255 , null='None')
    def __str__(self):
        return self.name
    