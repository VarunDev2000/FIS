from rest_framework.routers import DefaultRouter
from staff.api.views import (StaffinfoViewSet,QualificationinfoViewSet,
Area_of_spec_and_mem_ViewSet,Employment_ViewSet,Publication_ViewSet,
CSW_ViewSet,Project_ViewSet,Invited_Lectures_ViewSet,Experience_Abroad_ViewSet,
Book_Published_ViewSet,EAO_Programme_ViewSet,Achievement_ViewSet,Research_ViewSet,
Research_Table_ViewSet
)


router = DefaultRouter()
router.register(r'staffinfo', StaffinfoViewSet, basename='staffinfo')
router.register(r'qualification', QualificationinfoViewSet, basename='qualifications')
router.register(r'specialization', Area_of_spec_and_mem_ViewSet, basename='Area of Specialization and Membership')
router.register(r'employment', Employment_ViewSet, basename='employment')
router.register(r'publication', Publication_ViewSet, basename='publication')
router.register(r'csw', CSW_ViewSet, basename='csw')
router.register(r'project', Project_ViewSet, basename='project')
router.register(r'invited_lectures', Invited_Lectures_ViewSet, basename='Invited Lectures')
router.register(r'experience_abroad', Experience_Abroad_ViewSet, basename='Experience Abroad')
router.register(r'book_published', Book_Published_ViewSet, basename='Book Published')
router.register(r'eao_programme', EAO_Programme_ViewSet, basename='Extension and Outreach Programme')
router.register(r'achievements', Achievement_ViewSet, basename='Achievements')
router.register(r'research', Research_ViewSet, basename='Research')
router.register(r'research_table', Research_Table_ViewSet, basename='Research Table')

urlpatterns = router.urls



"""
from django.urls import path

from .views import staff_detail_ListView,staff_detail_RetrieveView


urlpatterns = [
    path('', staff_detail_ListView.as_view()),
    path('<pk>', staff_detail_RetrieveView.as_view()),
]
"""