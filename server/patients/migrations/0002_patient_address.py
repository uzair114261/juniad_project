# Generated by Django 4.2.13 on 2024-05-12 09:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('patients', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='patient',
            name='address',
            field=models.CharField(max_length=255, null='None'),
            preserve_default='None',
        ),
    ]
