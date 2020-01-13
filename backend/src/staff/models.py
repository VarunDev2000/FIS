from django.db import models
from phone_field import PhoneField
from django import forms
from django.contrib.auth.models import User
from django.urls import reverse
from django.core.validators import FileExtensionValidator


class staff_detail(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE,related_name = "staffinfo",null=True)
    salutation = models.CharField(max_length=200, null=False, default=None)
    disability = models.CharField(max_length=200, null=False, default=None)
    intercom1 = models.IntegerField(null = False,default = None)
    intercom2 = models.IntegerField(null = False,default = None)
    name = models.CharField(max_length=200, null=False, default=None)
    gender = models.CharField(max_length=200,blank=True, null=True)
    dob = models.DateField(null=False, default=None)
    fath_hus_name = models.CharField(max_length=200, null=False, default=None)
    official_mail = models.EmailField(
        default = None,null=False, help_text='A valid email address, please.')
    personal_mail = models.EmailField(
        null=True,blank = True, help_text='A valid email address, please.')
    aadhar = models.IntegerField(null=True)
    pan = models.IntegerField(null=True)
    mobile_no = models.IntegerField(default=None)
    residence_ph_no = models.IntegerField(default=None)
    caste = models.CharField(max_length=200,blank=True, null=True)
    community = models.CharField(max_length=200,blank=True, null=True)
    res_address = models.CharField(max_length=1000,default = None,null=False)
    perm_address = models.CharField(max_length=1000,blank=True, null=True,default =None)
    website_url = models.URLField(blank=True, null=True,max_length=1000, default=None)
    profile_pic = models.ImageField(default = None,null=True,upload_to='images/profile')

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
    durationfrom = models.CharField(max_length=10,default = None)
    durationto = models.CharField(max_length=10,default = None)
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
    to_date = models.DateField( default=None,null=True)
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
    first_author = models.CharField(max_length=400,default=None, null=False)
    corres_author = models.CharField(max_length=400,blank=True, null=True)
    all_auth_inorder = models.CharField(max_length=800,default=None,null=False)
    journal_name = models.CharField(max_length=800,default=None,null=False)
    volume = models.IntegerField(null=False,default=None)
    issue = models.IntegerField(null=False,default=None)
    year = models.CharField(max_length=100,default=None,null=False)
    page_no = models.CharField(max_length=300,default=None, null=False)
    publisher = models.CharField(max_length=100, null=True,blank =True)
    impact_factor = models.IntegerField(null=False,default=None) 
    ref_journal = models.CharField(max_length=300,default=None, null=False)
    pdf = models.FileField(upload_to='publications',max_length=400,
    default=None,null=True,validators=[FileExtensionValidator(allowed_extensions=['pdf'])])

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
    pro_type = models.CharField(max_length=800,default=None,null=False)
    investigator = models.CharField(max_length=800,default=None,null=False)
    co_inves1 = models.CharField(max_length=800,default=None,blank=True, null=True)
    co_inves2 = models.CharField(max_length=800,default=None,blank=True, null=True)
    p_type = models.CharField(max_length=800,default=None,null=False)
    funding_agent = models.CharField(max_length=400,default=None,null=False)
    amt = models.IntegerField(default=None,null=False)
    durationfrom = models.CharField(max_length=10,default = None,null=False)
    durationto = models.CharField(max_length=10,default = None,null=False)
    department = models.CharField(max_length=800,default=None,null=False)
    co_dep = models.CharField(max_length=800,default=None,blank=True, null=True)
    co_inst = models.CharField(max_length=800,default=None,blank=True, null=True)
    pro_abstract = models.CharField(max_length=1800,default=None,blank=True, null=True)
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
    date = models.CharField(max_length=400,default=None,null=False)

    class Meta:
        verbose_name_plural = "Invited Lectures"

    def __str__(self):
        return self.staff.username+"'s Lectures(Invited)"

class experience_abroad(models.Model):
    staff = models.ForeignKey(User, on_delete=models.CASCADE,related_name = "experience_abroad",null=True)
    nature_of_assignment = models.CharField(max_length=400,default=None,null=False)
    from_date = models.CharField(max_length=400,default=None,null=False)
    to_date = models.CharField(max_length=400,default=None,null=False)
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
    co_author1 = models.CharField(max_length=400,blank=True, null=True)
    co_author2 = models.CharField(max_length=400,blank=True, null=True)
    publisher = models.CharField(max_length=400,default=None,null=False)
    place_of_publication = models.CharField(max_length=400,default=None,null=False)
    year_of_publication = models.CharField(max_length=400,default=None,null=False)
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
    from_date = models.CharField(max_length=400,default=None,null=False)
    to_date = models.CharField(max_length=400,default=None,null=False)

    class Meta:
        verbose_name_plural = "Extension and Outreach Programmes"

    def __str__(self):
        return self.staff.username+"'s extension and outreach programme"

