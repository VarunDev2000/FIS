# Generated by Django 3.0 on 2020-01-11 09:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('staff', '0084_auto_20200111_1427'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ext_and_outreach_prog',
            name='from_date',
            field=models.CharField(default=None, max_length=400),
        ),
        migrations.AlterField(
            model_name='ext_and_outreach_prog',
            name='to_date',
            field=models.CharField(default=None, max_length=400),
        ),
    ]