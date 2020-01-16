from rest_framework import serializers
from staff.models import (staff_detail,qualification,area_of_spec_and_mem,
employment,publication,csw,project,invited_lectures,experience_abroad,
book_published,ext_and_outreach_prog,achievements
)

class staff_detail_serializer(serializers.ModelSerializer):
    class Meta:
        model = staff_detail
        fields = '__all__'

class qualification_serializer(serializers.ModelSerializer):
    class Meta:
        model = qualification
        fields = '__all__'

class spec_and_mem_serializer(serializers.ModelSerializer):
    class Meta:
        model = area_of_spec_and_mem
        fields = '__all__'

class employment_serializer(serializers.ModelSerializer):
    class Meta:
        model = employment
        fields = '__all__'


class publication_serializer(serializers.ModelSerializer):
    class Meta:
        model = publication
        fields = '__all__'


class csw_serializer(serializers.ModelSerializer):
    class Meta:
        model = csw
        fields = '__all__'


class project_serializer(serializers.ModelSerializer):
    class Meta:
        model = project
        fields = '__all__'

    
class invited_lectures_serializer(serializers.ModelSerializer):
    class Meta:
        model = invited_lectures
        fields = '__all__'

    
class experience_abroad_serializer(serializers.ModelSerializer):
    class Meta:
        model = experience_abroad
        fields = '__all__'


class book_published_serializer(serializers.ModelSerializer):
    class Meta:
        model = book_published
        fields = '__all__'


class EAO_Programme_serializer(serializers.ModelSerializer):
    class Meta:
        model = ext_and_outreach_prog
        fields = '__all__'


class Achievement_serializer(serializers.ModelSerializer):
    class Meta:
        model = achievements
        fields = '__all__'
