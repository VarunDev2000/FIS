from rest_framework import serializers
from staff.models import staff_detail,qualification


class staff_detail_serializer(serializers.ModelSerializer):
    class Meta:
        model = staff_detail
        fields = '__all__'

class qualification_serializer(serializers.ModelSerializer):
    class Meta:
        model = qualification
        fields = '__all__'