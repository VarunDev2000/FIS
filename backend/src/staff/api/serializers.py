from rest_framework import serializers
from staff.models import staff_detail


class staff_detail_serializer(serializers.ModelSerializer):
    class Meta:
        model = staff_detail
        fields = '__all__'
