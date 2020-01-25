# Generated by Django 3.0 on 2020-01-19 13:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('staff', '0108_auto_20200119_0034'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='staff_detail',
            options={'verbose_name_plural': 'Staff Details'},
        ),
        migrations.AlterField(
            model_name='research_table',
            name='me_s_g',
            field=models.CharField(blank=True, default='0', max_length=400, null=True),
        ),
        migrations.AlterField(
            model_name='research_table',
            name='me_s_o',
            field=models.CharField(blank=True, default='0', max_length=400, null=True),
        ),
        migrations.AlterField(
            model_name='research_table',
            name='ms_js_g',
            field=models.CharField(blank=True, default='0', max_length=400, null=True),
        ),
        migrations.AlterField(
            model_name='research_table',
            name='ms_js_o',
            field=models.CharField(blank=True, default='0', max_length=400, null=True),
        ),
        migrations.AlterField(
            model_name='research_table',
            name='ms_s_g',
            field=models.CharField(blank=True, default='0', max_length=400, null=True),
        ),
        migrations.AlterField(
            model_name='research_table',
            name='ms_s_o',
            field=models.CharField(blank=True, default='0', max_length=400, null=True),
        ),
        migrations.AlterField(
            model_name='research_table',
            name='msc_s_g',
            field=models.CharField(blank=True, default='0', max_length=400, null=True),
        ),
        migrations.AlterField(
            model_name='research_table',
            name='msc_s_o',
            field=models.CharField(blank=True, default='0', max_length=400, null=True),
        ),
        migrations.AlterField(
            model_name='research_table',
            name='phd_js_g',
            field=models.CharField(blank=True, default='0', max_length=400, null=True),
        ),
        migrations.AlterField(
            model_name='research_table',
            name='phd_js_o',
            field=models.CharField(blank=True, default='0', max_length=400, null=True),
        ),
        migrations.AlterField(
            model_name='research_table',
            name='phd_reg_no',
            field=models.CharField(blank=True, default='0', max_length=400, null=True),
        ),
        migrations.AlterField(
            model_name='research_table',
            name='phd_s_g',
            field=models.CharField(blank=True, default='0', max_length=400, null=True),
        ),
        migrations.AlterField(
            model_name='research_table',
            name='phd_s_o',
            field=models.CharField(blank=True, default='0', max_length=400, null=True),
        ),
    ]