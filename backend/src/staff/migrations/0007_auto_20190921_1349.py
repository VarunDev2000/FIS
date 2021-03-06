# Generated by Django 2.2.5 on 2019-09-21 08:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('staff', '0006_staff_detail_dob'),
    ]

    operations = [
        migrations.AddField(
            model_name='staff_detail',
            name='aadhar',
            field=models.IntegerField(default=None),
        ),
        migrations.AddField(
            model_name='staff_detail',
            name='fath_hus_name',
            field=models.CharField(default=None, max_length=200),
        ),
        migrations.AddField(
            model_name='staff_detail',
            name='official_mail',
            field=models.EmailField(help_text='A valid email address, please.', max_length=254, null=True),
        ),
        migrations.AddField(
            model_name='staff_detail',
            name='pan',
            field=models.IntegerField(default=None),
        ),
        migrations.AddField(
            model_name='staff_detail',
            name='personal_mail',
            field=models.EmailField(help_text='A valid email address, please.', max_length=254, null=True),
        ),
    ]
