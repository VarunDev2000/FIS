from rest_framework import serializers
from staff.models import staff_detail,qualification,area_of_spec_and_mem


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
