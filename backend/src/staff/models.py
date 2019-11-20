from django.db import models
from phone_field import PhoneField
from django import forms
from django.contrib.auth.models import User
from django.urls import reverse


class staff_detail(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE,related_name = "staffinfo",null=True)
    name = models.CharField(max_length=200, null=False, default=None)
    gender = models.CharField(max_length=200, null=True)
    dob = models.DateField(null=False, default=None)
    fath_hus_name = models.CharField(max_length=200, null=False, default=None)
    official_mail = models.EmailField(
        null=True, help_text='A valid email address, please.')
    personal_mail = models.EmailField(
        null=True, help_text='A valid email address, please.')
    aadhar = models.IntegerField(default=None)
    pan = models.IntegerField(default=None)
    mobile_no = models.IntegerField(default=None)
    residence_ph_no = models.IntegerField(default=None)
    caste = models.CharField(max_length=200, null=True)
    community = models.CharField(max_length=200, null=True)
    res_address = models.CharField(max_length=1000, null=True)
    perm_address = models.CharField(max_length=1000, null=True)
    website_url = models.URLField(max_length=1000, default=None)

    class Meta:
        verbose_name_plural = "Staff"

    def __str__(self):
        return self.name


"""
class qualification(models.Model):
    staff = models.ForeignKey(User, on_delete=models.CASCADE)
    level = models.CharField(max_length=200, default=None, null=True)
    degree = models.CharField(max_length=200)
    branch = models.CharField(max_length=200, default=None, null=True)
    institution = models.CharField(max_length=400)
    university = models.CharField(max_length=400)
    duration = models.CharField(max_length=300)
    class_obtained = models.CharField(max_length=200, default=None, null=True)
    title_of_thesis = models.CharField(max_length=700, default=None, null=True)
    research_area = models.CharField(max_length=300, default=None, null=True)
    faculty = models.CharField(max_length=200, default=None, null=True)
    department = models.CharField(max_length=200, default=None, null=True)
    viva = models.CharField(max_length=100, default=None, null=True)
    degree_type = models.CharField(max_length=200, default=None, null=False)

    class Meta:
        verbose_name_plural = "Qualifications"

    def __str__(self):
        return self.staff.username+"'s Qualification"


class area_of_spec_and_mem(models.Model):
    staff = models.ForeignKey(User, on_delete=models.CASCADE)
    area_name = models.CharField(max_length=500, null=True, default=None)
    mem = models.CharField(max_length=500, null=True, default=None)
    spec_mem_type = models.CharField(max_length=200, null=False)

    class Meta:
        verbose_name_plural = "Specializations and Membership"

    def __str__(self):
        return self.staff.username+"'s Specializations and Membership"


class employment(models.Model):
    staff = models.ForeignKey(User, on_delete=models.CASCADE)
    designation = models.CharField(max_length=400)
    from_date = models.DateField()
    department = models.CharField(max_length=400, default=None)
    campus = models.CharField(max_length=400, default=None)
    present_pay = models.IntegerField(default=None)
    nature_of_app = models.CharField(max_length=400, default=None)
    position = models.CharField(max_length=400, default=None)
    position_type = models.CharField(max_length=400, default=None, null=False)
    institution = models.CharField(max_length=400, default=None)
    years = models.CharField(max_length=400, default=None)
    exp_type = models.CharField(max_length=400, default=None, null=False)
    emp_type = models.CharField(max_length=200, default=None, null=False)

    class Meta:
        verbose_name_plural = "Employment details"

    def __str__(self):
        return self.staff.username+"'s Emp Details"


class publication(models.Model):
    staff = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=800, null=False)
    level = models.CharField(max_length=400, null=False)
    year = models.IntegerField(null=False)

    class Meta:
        verbose_name_plural = "Publications"

    def __str__(self):
        return self.staff.username+"'s Publications"


class csw(models.Model):
    staff = models.ForeignKey(User, on_delete=models.CASCADE, default=None)
    title = models.CharField(max_length=800, null=False)
    type_name = models.CharField(max_length=400, null=False)
    level = models.CharField(max_length=400, null=False)
    csw_type = models.CharField(max_length=400, null=False)

    class Meta:
        verbose_name_plural = "Conference/Seminar/Workshop"

    def __str__(self):
        return self.staff.username+"'s C/S/W"


class project(models.Model):
    staff = models.ForeignKey(User, on_delete=models.CASCADE, default=None)
    pro_title = models.CharField(max_length=800, null=False)
    funding_agent = models.CharField(max_length=400, null=False)
    amt = models.IntegerField(null=False)
    pro_type = models.CharField(max_length=400, null=False)

    class Meta:
        verbose_name_plural = "Projects"

    def __str__(self):
        return self.staff.username+"'s Projects"
"""
