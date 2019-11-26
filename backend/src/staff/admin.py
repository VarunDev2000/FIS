from django.contrib import admin
from . models import (staff_detail,qualification,area_of_spec_and_mem,employment,
publication,csw,project,invited_lectures,experience_abroad,book_published,
ext_and_outreach_prog)

admin.site.register(staff_detail)
admin.site.register(qualification)
admin.site.register(area_of_spec_and_mem)
admin.site.register(employment)
admin.site.register(publication)
admin.site.register(csw)
admin.site.register(project)
admin.site.register(invited_lectures)
admin.site.register(experience_abroad)
admin.site.register(book_published)
admin.site.register(ext_and_outreach_prog)


