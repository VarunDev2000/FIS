# Generated by Django 2.2.6 on 2019-11-26 05:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('staff', '0043_auto_20191124_1139'),
    ]

    operations = [
        migrations.AddField(
            model_name='publication',
            name='pdf',
            field=models.FileField(default=None, max_length=400, upload_to='publications'),
        ),
    ]