# Generated by Django 3.0 on 2019-12-03 20:26

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('staff', '0047_project_pdf'),
    ]

    operations = [
        migrations.AlterField(
            model_name='publication',
            name='pdf',
            field=models.FileField(default=None, max_length=400, null=True, upload_to='publications', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['pdf'])]),
        ),
    ]