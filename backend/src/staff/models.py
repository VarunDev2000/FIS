from django.db import models
from phone_field import PhoneField
from django import forms
from django.contrib.auth.models import User
from django.urls import reverse
from django.core.validators import FileExtensionValidator


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



class qualification(models.Model):
    staff = models.ForeignKey(User, on_delete=models.CASCADE,related_name = "qualification",null=True)
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
    staff = models.ForeignKey(User, on_delete=models.CASCADE,related_name = "area_of_spec_and_mem",null=True)
    area_name = models.CharField(max_length=500, null=True, default=None)
    mem = models.CharField(max_length=500, null=True, default=None)
    spec_mem_type = models.CharField(max_length=200, null=False)

    class Meta:
        verbose_name_plural = "Specialization and Membership"

    def __str__(self):
        return self.staff.username+"'s Specialization and Membership"



class employment(models.Model):
    staff = models.ForeignKey(User, on_delete=models.CASCADE,related_name = "employment",null=True)
    designation = models.CharField(max_length=400,null=True)
    from_date = models.DateField( default=None,null=True)
    department = models.CharField(max_length=400, default=None,null=True)
    campus = models.CharField(max_length=400, default=None,null=True)
    present_pay = models.IntegerField(default=None,null=True)
    nature_of_app = models.CharField(max_length=400, default=None,null=True)
    position = models.CharField(max_length=400, default=None,null=True)
    position_type = models.CharField(max_length=400, default=None, null=True)
    institution = models.CharField(max_length=400, default=None,null=True)
    years = models.CharField(max_length=400, default=None,null=True)
    exp_type = models.CharField(max_length=400, default=None, null=True)
    emp_type = models.CharField(max_length=200, default=None, null=False)

    class Meta:
        verbose_name_plural = "Employment details"

    def __str__(self):
        return self.staff.username+"'s Emp Details"


class publication(models.Model):
    staff = models.ForeignKey(User, on_delete=models.CASCADE,related_name = "publication",null=True)
    title = models.CharField(max_length=800, null=False)
    level = models.CharField(max_length=400, null=False)
    year = models.IntegerField(null=False)
    pdf = models.FileField(upload_to='publications',max_length=400,
    default=None,null=False,validators=[FileExtensionValidator(allowed_extensions=['pdf'])])

    class Meta:
        verbose_name_plural = "Publications"

    def __str__(self):
        return self.staff.username+"'s Publications"


class csw(models.Model):
    staff = models.ForeignKey(User, on_delete=models.CASCADE,related_name = "csw",null=True)
    title = models.CharField(max_length=800,default=None,null=False)
    type_name = models.CharField(max_length=400,default=None,null=False)
    level = models.CharField(max_length=400,default=None,null=True)
    country = models.CharField(max_length=400,default=None,null=True)
    csw_type = models.CharField(max_length=400, null=False)
    pdf = models.FileField(upload_to='csw',max_length=400,
    default=None,null=False,validators=[FileExtensionValidator(allowed_extensions=['pdf'])])


    class Meta:
        verbose_name_plural = "Conference/Seminar/Workshop"

    def __str__(self):
        return self.staff.username+"'s C/S/W"



class project(models.Model):
    staff = models.ForeignKey(User, on_delete=models.CASCADE,related_name = "project",null=True)
    pro_title = models.CharField(max_length=800,default=None,null=False)
    funding_agent = models.CharField(max_length=400,default=None,null=False)
    amt = models.IntegerField(default=None,null=False)
    pro_type = models.CharField(max_length=800,default=None,null=False)
    pdf = models.FileField(upload_to='project',max_length=400,
    default=None,null=False,validators=[FileExtensionValidator(allowed_extensions=['pdf'])])


    class Meta:
        verbose_name_plural = "Projects"

    def __str__(self):
        return self.staff.username+"'s Projects"

#----------------------------FOR ONLY FORMS(NO DATA DISPLAY)--------------------------------------

class invited_lectures(models.Model):
    staff = models.ForeignKey(User, on_delete=models.CASCADE,related_name = "invited_lectures",null=True)
    level = models.CharField(max_length=400,default=None,null=False)
    topic = models.CharField(max_length=400,default=None,null=False)
    programme = models.CharField(max_length=400,default=None,null=False)
    institution = models.CharField(max_length=800,default=None,null=False)
    place = models.CharField(max_length=400,default=None,null=False)
    date = models.DateField(null=False, default=None)

    class Meta:
        verbose_name_plural = "Invited Lectures"

    def __str__(self):
        return self.staff.username+"'s Lectures(Invited)"

class experience_abroad(models.Model):
    staff = models.ForeignKey(User, on_delete=models.CASCADE,related_name = "experience_abroad",null=True)
    nature_of_assignment = models.CharField(max_length=400,default=None,null=False)
    from_date = models.DateField(null=False, default=None)
    to_date = models.DateField(null=False, default=None)
    institution = models.CharField(max_length=800,default=None,null=False)
    country = models.CharField(max_length=400,default=None,null=False)
    purp_of_visit = models.CharField(max_length=400,default=None,null=False)
    funding_agency = models.CharField(max_length=400,default=None,null=False)

    class Meta:
        verbose_name_plural = "Experience(Abroad)"

    def __str__(self):
        return self.staff.username+"'s experience(Abroad)"


class book_published(models.Model):
    staff = models.ForeignKey(User, on_delete=models.CASCADE,related_name = "book_published",null=True)
    title = models.CharField(max_length=400,default=None,null=False)
    author = models.CharField(max_length=400,default=None,null=False)
    co_author1 = models.CharField(max_length=400,default=None,null=True)
    co_author2 = models.CharField(max_length=800,default=None,null=True)
    publisher = models.CharField(max_length=400,default=None,null=False)
    place_of_publication = models.CharField(max_length=400,default=None,null=False)
    year_of_publication = models.IntegerField(default=None,null=False)
    edition_no = models.IntegerField(default=None,null=False)

    class Meta:
        verbose_name_plural = "Books Published"

    def __str__(self):
        return self.staff.username+"'s Published book"


class ext_and_outreach_prog(models.Model):
    staff = models.ForeignKey(User, on_delete=models.CASCADE,related_name = "ext_and_outreach_programme",null=True)
    type_of_prog = models.CharField(max_length=400,default=None,null=False)
    title_of_prog = models.CharField(max_length=400,default=None,null=False)
    your_role = models.CharField(max_length=400,default=None,null=False)
    cross_sec_of_participants = models.CharField(max_length=800,default=None,null=False)
    no_of_participants = models.IntegerField(default=None,null=False)
    funded_by = models.CharField(max_length=400,default=None,null=False)
    venue = models.CharField(max_length=400,default=None,null=False)
    from_date = models.DateField(default=None,null=False)
    to_date = models.DateField(default=None,null=False)

    class Meta:
        verbose_name_plural = "Extension and Outreach Programmes"

    def __str__(self):
        return self.staff.username+"'s extension and outreach programme"

