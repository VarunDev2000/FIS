from rest_framework.routers import DefaultRouter
from staff.api.views import StaffinfoViewSet

router = DefaultRouter()
router.register(r'', StaffinfoViewSet, basename='staffinfo')
urlpatterns = router.urls



"""
from django.urls import path

from .views import staff_detail_ListView,staff_detail_RetrieveView


urlpatterns = [
    path('', staff_detail_ListView.as_view()),
    path('<pk>', staff_detail_RetrieveView.as_view()),
]
"""