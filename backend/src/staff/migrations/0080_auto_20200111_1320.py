# Generated by Django 3.0 on 2020-01-11 07:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('staff', '0079_auto_20200111_1232'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='co_dep',
            field=models.CharField(blank=True, default=None, max_length=800, null=True),
        ),
        migrations.AlterField(
            model_name='project',
            name='co_inst',
            field=models.CharField(blank=True, default=None, max_length=800, null=True),
        ),
        migrations.AlterField(
            model_name='project',
            name='co_inves1',
            field=models.CharField(blank=True, default=None, max_length=800, null=True),
        ),
        migrations.AlterField(
            model_name='project',
            name='co_inves2',
            field=models.CharField(blank=True, default=None, max_length=800, null=True),
        ),
        migrations.AlterField(
            model_name='project',
            name='pro_abstract',
            field=models.CharField(blank=True, default=None, max_length=1800, null=True),
        ),
    ]