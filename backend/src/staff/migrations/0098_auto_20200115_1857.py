# Generated by Django 3.0 on 2020-01-15 13:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('staff', '0097_auto_20200115_1820'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book_published',
            name='edition_no',
            field=models.CharField(blank=True, default=None, max_length=400, null=True),
        ),
    ]