# Generated by Django 3.2.7 on 2021-10-01 02:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='thumbnail',
            field=models.ImageField(blank=True, default='placeholder.png', null=True, upload_to='images'),
        ),
    ]
