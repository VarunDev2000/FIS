from rest_framework import viewsets,permissions
from .serializers import (staff_detail_serializer,qualification_serializer,
spec_and_mem_serializer,employment_serializer,publication_serializer,
csw_serializer,project_serializer,invited_lectures_serializer,
experience_abroad_serializer,book_published_serializer,EAO_Programme_serializer,
Achievement_serializer,Research_serializer,Research_Table_serializer
)

from staff.models import (staff_detail,qualification,area_of_spec_and_mem,
employment,publication,csw,project,invited_lectures,experience_abroad,
book_published,ext_and_outreach_prog,achievements,research,research_table
)


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


class Publication_ViewSet(viewsets.ModelViewSet):
    
    permission_classes = [
        permissions.IsAuthenticated
    ]
    

    serializer_class = publication_serializer
    
    def get_queryset(self):
        return publication.objects.filter(staff = self.request.user)
        #return staff_detail.objects.all()

    def perform_create(self,serializer):
        serializer.save(staff = self.request.user)


class CSW_ViewSet(viewsets.ModelViewSet):
    
    permission_classes = [
        permissions.IsAuthenticated
    ]
    

    serializer_class = csw_serializer
    
    def get_queryset(self):
        return csw.objects.filter(staff = self.request.user)
        #return staff_detail.objects.all()

    def perform_create(self,serializer):
        serializer.save(staff = self.request.user)


class Project_ViewSet(viewsets.ModelViewSet):
    
    permission_classes = [
        permissions.IsAuthenticated
    ]
    

    serializer_class = project_serializer
    
    def get_queryset(self):
        return project.objects.filter(staff = self.request.user)
        #return staff_detail.objects.all()

    def perform_create(self,serializer):
        serializer.save(staff = self.request.user)



class Invited_Lectures_ViewSet(viewsets.ModelViewSet):
    
    permission_classes = [
        permissions.IsAuthenticated
    ]
    

    serializer_class = invited_lectures_serializer
    
    def get_queryset(self):
        return invited_lectures.objects.filter(staff = self.request.user)
        #return staff_detail.objects.all()

    def perform_create(self,serializer):
        serializer.save(staff = self.request.user)


class Experience_Abroad_ViewSet(viewsets.ModelViewSet):
    
    permission_classes = [
        permissions.IsAuthenticated
    ]
    

    serializer_class = experience_abroad_serializer
    
    def get_queryset(self):
        return experience_abroad.objects.filter(staff = self.request.user)
        #return staff_detail.objects.all()

    def perform_create(self,serializer):
        serializer.save(staff = self.request.user)


class Book_Published_ViewSet(viewsets.ModelViewSet):
    
    permission_classes = [
        permissions.IsAuthenticated
    ]
    

    serializer_class = book_published_serializer
    
    def get_queryset(self):
        return book_published.objects.filter(staff = self.request.user)
        #return staff_detail.objects.all()

    def perform_create(self,serializer):
        serializer.save(staff = self.request.user)


class EAO_Programme_ViewSet(viewsets.ModelViewSet):
    
    permission_classes = [
        permissions.IsAuthenticated
    ]
    

    serializer_class = EAO_Programme_serializer
    
    def get_queryset(self):
        return ext_and_outreach_prog.objects.filter(staff = self.request.user)
        #return staff_detail.objects.all()

    def perform_create(self,serializer):
        serializer.save(staff = self.request.user)



class Achievement_ViewSet(viewsets.ModelViewSet):
    
    permission_classes = [
        permissions.IsAuthenticated
    ]
    

    serializer_class = Achievement_serializer
    
    def get_queryset(self):
        return achievements.objects.filter(staff = self.request.user)
        #return staff_detail.objects.all()

    def perform_create(self,serializer):
        serializer.save(staff = self.request.user)



class Research_ViewSet(viewsets.ModelViewSet):
    
    permission_classes = [
        permissions.IsAuthenticated
    ]
    

    serializer_class = Research_serializer
    
    def get_queryset(self):
        return research.objects.filter(staff = self.request.user)
        #return staff_detail.objects.all()

    def perform_create(self,serializer):
        serializer.save(staff = self.request.user)


class Research_Table_ViewSet(viewsets.ModelViewSet):
    
    permission_classes = [
        permissions.IsAuthenticated
    ]
    

    serializer_class = Research_Table_serializer
    
    def get_queryset(self):
        return research_table.objects.filter(staff = self.request.user)
        #return staff_detail.objects.all()

    def perform_create(self,serializer):
        serializer.save(staff = self.request.user)



#-------------------------FOR ADMIN----------------------------------------------------

class Admin_Publication_ViewSet(viewsets.ModelViewSet):
    
    
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = publication_serializer
    
    def get_queryset(self):
        return publication.objects.all()










"""
from rest_framework.generics import ListAPIView,RetrieveAPIView


class staff_detail_ListView(ListAPIView):
    queryset = staff_detail.objects.all()
    serializer_class = staff_detail_serializer

class staff_detail_RetrieveView(RetrieveAPIView):
    queryset = staff_detail.objects.all()
    serializer_class = staff_detail_serializer"""
