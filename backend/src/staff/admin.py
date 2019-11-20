from django.contrib import admin
from . models import staff_detail,qualification,area_of_spec_and_mem,employment

admin.site.register(staff_detail)
admin.site.register(qualification)
admin.site.register(area_of_spec_and_mem)
admin.site.register(employment)

"""
admin.site.register(publication)
admin.site.register(csw)
admin.site.register(project)
"""
