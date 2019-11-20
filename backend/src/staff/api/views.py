from rest_framework import viewsets,permissions
from .serializers import staff_detail_serializer,qualification_serializer,spec_and_mem_serializer,employment_serializer
from staff.models import staff_detail,qualification,area_of_spec_and_mem,employment

class StaffinfoViewSet(viewsets.ModelViewSet):
    
    permission_classes = [
        permissions.IsAuthenticated
    ]
    

    serializer_class = staff_detail_serializer
    
    def get_queryset(self):
        return staff_detail.objects.filter(user=self.request.user)
        #return staff_detail.objects.all()

    def perform_create(self,serializer):
        serializer.save(user =self.request.user)


class QualificationinfoViewSet(viewsets.ModelViewSet):
    
    permission_classes = [
        permissions.IsAuthenticated
    ]
    

    serializer_class = qualification_serializer
    
    def get_queryset(self):
        return qualification.objects.filter(staff = self.request.user)
        #return staff_detail.objects.all()

    def perform_create(self,serializer):
        serializer.save(staff = self.request.user)


class Area_of_spec_and_mem_ViewSet(viewsets.ModelViewSet):
    
    permission_classes = [
        permissions.IsAuthenticated
    ]
    

    serializer_class = spec_and_mem_serializer
    
    def get_queryset(self):
        return area_of_spec_and_mem.objects.filter(staff = self.request.user)
        #return staff_detail.objects.all()

    def perform_create(self,serializer):
        serializer.save(staff = self.request.user)


class Employment_ViewSet(viewsets.ModelViewSet):
    
    permission_classes = [
        permissions.IsAuthenticated
    ]
    

    serializer_class = employment_serializer
    
    def get_queryset(self):
        return employment.objects.filter(staff = self.request.user)
        #return staff_detail.objects.all()

    def perform_create(self,serializer):
        serializer.save(staff = self.request.user)













"""
from rest_framework.generics import ListAPIView,RetrieveAPIView


class staff_detail_ListView(ListAPIView):
    queryset = staff_detail.objects.all()
    serializer_class = staff_detail_serializer

class staff_detail_RetrieveView(RetrieveAPIView):
    queryset = staff_detail.objects.all()
    serializer_class = staff_detail_serializer"""
