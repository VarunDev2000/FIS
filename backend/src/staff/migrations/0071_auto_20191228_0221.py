# Generated by Django 3.0 on 2019-12-27 20:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('staff', '0070_auto_20191228_0218'),
    ]

    operations = [
        migrations.AlterField(
            model_name='staff_detail',
            name='aadhar',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='staff_detail',
            name='pan',
            field=models.IntegerField(null=True),
        ),
    ]