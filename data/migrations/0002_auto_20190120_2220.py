# Generated by Django 2.0.7 on 2019-01-20 22:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='stationdata',
            name='station_point',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='data.StationPoint'),
        ),
    ]