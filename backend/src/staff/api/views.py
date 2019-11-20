from rest_framework import viewsets,permissions
from .serializers import staff_detail_serializer
from staff.models import staff_detail
from ..models import staff_detail

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




"""
from rest_framework.generics import ListAPIView,RetrieveAPIView


class staff_detail_ListView(ListAPIView):
    queryset = staff_detail.objects.all()
    serializer_class = staff_detail_serializer

class staff_detail_RetrieveView(RetrieveAPIView):
    queryset = staff_detail.objects.all()
    serializer_class = staff_detail_serializer"""
