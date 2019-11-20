from rest_framework.routers import DefaultRouter
from staff.api.views import StaffinfoViewSet,QualificationinfoViewSet,Area_of_spec_and_mem_ViewSet,Employment_ViewSet

router = DefaultRouter()
router.register(r'staffinfo', StaffinfoViewSet, basename='staffinfo')
router.register(r'qualification', QualificationinfoViewSet, basename='qualifications')
router.register(r'specialization', Area_of_spec_and_mem_ViewSet, basename='Area of Specialization and Membership')
router.register(r'employment', Employment_ViewSet, basename='employment')

urlpatterns = router.urls



"""
from django.urls import path

from .views import staff_detail_ListView,staff_detail_RetrieveView


urlpatterns = [
    path('', staff_detail_ListView.as_view()),
    path('<pk>', staff_detail_RetrieveView.as_view()),
]
"""