from django.db import models
from phone_field import PhoneField
from django import forms
from django.contrib.auth.models import User
from django.urls import reverse
from django.core.validators import FileExtensionValidator


class staff_detail(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE,related_name = "staffinfo",null=True)
    salutation = models.CharField(max_length=200,blank=True, null=True, default=None)
    disability = models.CharField(max_length=200, blank=True, null=True, default=None)
    intercom1 = models.IntegerField(blank=True, null=True,default = None)
    intercom2 = models.IntegerField(blank=True, null=True,default = None)
    name = models.CharField(max_length=200, blank=True, null=True, default=None)
    gender = models.CharField(max_length=200,blank=True, null=True)
    dob = models.DateField(blank=True, null=True, default=None)
    fath_hus_name = models.CharField(max_length=200, blank=True, null=True, default=None)
    official_mail = models.EmailField(
        default = None,blank=True, null=True, help_text='A valid email address, please.')
    personal_mail = models.EmailField(
        null=True,blank = True, help_text='A valid email address, please.')
    aadhar = models.IntegerField(blank=True, null=True)
    pan = models.IntegerField(blank=True, null=True)
    mobile_no = models.IntegerField(blank=True, null=True, default=None)
    residence_ph_no = models.IntegerField(blank=True, null=True, default=None)
    caste = models.CharField(max_length=200,blank=True, null=True)
    community = models.CharField(max_length=200,blank=True, null=True)
    res_address = models.CharField(max_length=1000,default = None,blank=True, null=True)
    perm_address = models.CharField(max_length=1000,blank=True, null=True,default =None)
    website_url = models.URLField(blank=True, null=True,max_length=1000, default=None)
    profile_pic = models.ImageField(default = None,null=True,upload_to='images/profile')

    class Meta:
        verbose_name_plural = "Staff"

    def __str__(self):
        return self.name



class qualification(models.Model):
    staff = models.ForeignKey(User, on_delete=models.CASCADE,related_name = "qualification",null=True)
    level = models.CharField(max_length=200, default=None, blank=True, null=True)
    degree = models.CharField(max_length=200, blank=True, null=True)
    branch = models.CharField(max_length=200, default=None, blank=True, null=True)
    institution = models.CharField(max_length=400, blank=True, null=True)
    university = models.CharField(max_length=400, blank=True, null=True)
    durationfrom = models.CharField(max_length=10,default = None, blank=True, null=True)
    durationto = models.CharField(max_length=10,default = None, blank=True, null=True)
    class_obtained = models.CharField(max_length=200, default=None, blank=True, null=True)
    title_of_thesis = models.CharField(max_length=700, default=None, blank=True, null=True)
    research_area = models.CharField(max_length=300, default=None, blank=True, null=True)
    faculty = models.CharField(max_length=200, default=None, blank=True, null=True)
    department = models.CharField(max_length=200, default=None, blank=True, null=True)
    viva = models.CharField(max_length=100, default=None, blank=True, null=True)
    degree_type = models.CharField(max_length=200, default=None, blank=True, null=True)

    class Meta:
        verbose_name_plural = "Qualifications"

    def __str__(self):
        return self.staff.username+"'s Qualification"


class area_of_spec_and_mem(models.Model):
    staff = models.ForeignKey(User, on_delete=models.CASCADE,related_name = "area_of_spec_and_mem",null=True)
    area_name = models.CharField(max_length=500, blank=True, null=True, default=None)
    mem = models.CharField(max_length=500, blank=True, null=True, default=None)
    spec_mem_type = models.CharField(max_length=200, blank=True, null=True)

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
    title = models.CharField(max_length=800,blank=True, null=True)
    level = models.CharField(max_length=400,blank=True, null=True)
    first_author = models.CharField(max_length=400,default=None,blank=True, null=True)
    corres_author = models.CharField(max_length=400,blank=True, null=True)
    all_auth_inorder = models.CharField(max_length=800,default=None,blank=True, null=True)
    journal_name = models.CharField(max_length=800,default=None,blank=True, null=True)
    volume = models.IntegerField(blank=True, null=True)
    issue = models.IntegerField(blank=True, null=True)
    year = models.CharField(max_length=100,default=None,blank=True, null=True)
    page_no = models.CharField(max_length=300,default=None,blank=True, null=True)
    publisher = models.CharField(max_length=100, null=True,blank =True)
    impact_factor = models.CharField(max_length=100,blank=True, null=True,default=None) 
    ref_journal = models.CharField(max_length=300,default=None, blank=True, null=True)
    pdf = models.FileField(upload_to='publications',max_length=400,
    default=None,null=True,validators=[FileExtensionValidator(allowed_extensions=['pdf'])])

    class Meta:
        verbose_name_plural = "Publications"

    def __str__(self):
        return self.staff.username+"'s Publications"


class csw(models.Model):
    staff = models.ForeignKey(User, on_delete=models.CASCADE,related_name = "csw",null=True)
    title = models.CharField(max_length=800,default=None,blank=True, null=True)
    type_name = models.CharField(max_length=400,default=None,blank=True, null=True)
    level = models.CharField(max_length=400,default=None,blank=True, null=True)
    role = models.CharField(max_length=400,default=None,blank=True, null=True)
    country = models.CharField(max_length=400,default=None,blank=True, null=True)
    institution = models.CharField(max_length=400,default=None,blank=True, null=True)
    paper_title = models.CharField(max_length=400, blank=True, null=True)
    nature_of_pres = models.CharField(max_length=400, blank=True, null=True)
    pres_by = models.CharField(max_length=400, blank=True, null=True)
    all_auth = models.CharField(max_length=400, blank=True, null=True)
    is_publi = models.CharField(max_length=400, blank=True, null=True)
    csw_type = models.CharField(max_length=400, blank=True, null=True)
    durationfrom = models.DateField(blank=True, null=True, default=None)
    durationto = models.DateField(blank=True, null=True, default=None)
    pdf = models.FileField(upload_to='csw',max_length=400,
    default=None,null=True,validators=[FileExtensionValidator(allowed_extensions=['pdf'])])


    class Meta:
        verbose_name_plural = "Conference/Seminar/Workshop"

    def __str__(self):
        return self.staff.username+"'s C/S/W"



class project(models.Model):
    staff = models.ForeignKey(User, on_delete=models.CASCADE,related_name = "project",null=True)
    pro_title = models.CharField(max_length=800,default=None,blank=True, null=True)
    pro_type = models.CharField(max_length=800,default=None,blank=True, null=True)
    investigator = models.CharField(max_length=800,default=None,blank=True, null=True)
    co_inves1 = models.CharField(max_length=800,default=None,blank=True, null=True)
    co_inves2 = models.CharField(max_length=800,default=None,blank=True, null=True)
    p_type = models.CharField(max_length=800,default=None,blank=True, null=True)
    funding_agent = models.CharField(max_length=400,default=None,blank=True, null=True)
    amt = models.IntegerField(default=None,blank=True, null=True)
    durationfrom = models.CharField(max_length=10,default = None,blank=True, null=True)
    durationto = models.CharField(max_length=10,default = None,blank=True, null=True)
    department = models.CharField(max_length=800,default=None,blank=True, null=True)
    co_dep = models.CharField(max_length=800,default=None,blank=True, null=True)
    co_inst = models.CharField(max_length=800,default=None,blank=True, null=True)
    pro_abstract = models.CharField(max_length=1800,default=None,blank=True, null=True)
    pdf = models.FileField(upload_to='project',max_length=400,
    default=None,null=True,validators=[FileExtensionValidator(allowed_extensions=['pdf'])])


    class Meta:
        verbose_name_plural = "Projects"

    def __str__(self):
        return self.staff.username+"'s Projects"


class invited_lectures(models.Model):
    staff = models.ForeignKey(User, on_delete=models.CASCADE,related_name = "invited_lectures",null=True)
    level = models.CharField(max_length=400,default=None,blank=True, null=True)
    topic = models.CharField(max_length=400,default=None,blank=True, null=True)
    programme = models.CharField(max_length=400,default=None,blank=True, null=True)
    institution = models.CharField(max_length=800,default=None,blank=True, null=True)
    place = models.CharField(max_length=400,default=None,blank=True, null=True)
    date = models.CharField(max_length=400,default=None,blank=True, null=True)

    class Meta:
        verbose_name_plural = "Invited Lectures"

    def __str__(self):
        return self.staff.username+"'s Lectures(Invited)"

class experience_abroad(models.Model):
    staff = models.ForeignKey(User, on_delete=models.CASCADE,related_name = "experience_abroad",null=True)
    nature_of_assignment = models.CharField(max_length=400,default=None,blank=True, null=True)
    from_date = models.CharField(max_length=400,default=None,blank=True, null=True)
    to_date = models.CharField(max_length=400,default=None,blank=True, null=True)
    institution = models.CharField(max_length=800,default=None,blank=True, null=True)
    country = models.CharField(max_length=400,default=None,blank=True, null=True)
    purp_of_visit = models.CharField(max_length=400,default=None,blank=True, null=True)
    funding_agency = models.CharField(max_length=400,default=None,blank=True, null=True)

    class Meta:
        verbose_name_plural = "Experience(Abroad)"

    def __str__(self):
        return self.staff.username+"'s experience(Abroad)"


class book_published(models.Model):
    staff = models.ForeignKey(User, on_delete=models.CASCADE,related_name = "book_published",null=True)
    title = models.CharField(max_length=400,default=None,blank=True, null=True)
    author = models.CharField(max_length=400,default=None,blank=True, null=True)
    co_author1 = models.CharField(max_length=400,blank=True, null=True)
    co_author2 = models.CharField(max_length=400,blank=True, null=True)
    publisher = models.CharField(max_length=400,default=None,blank=True, null=True)
    place_of_publication = models.CharField(max_length=400,default=None,blank=True, null=True)
    year_of_publication = models.CharField(max_length=400,default=None,blank=True, null=True)
    edition_no = models.CharField(max_length=400,default=None,blank=True, null=True)

    class Meta:
        verbose_name_plural = "Books Published"

    def __str__(self):
        return self.staff.username+"'s Published book"


class ext_and_outreach_prog(models.Model):
    staff = models.ForeignKey(User, on_delete=models.CASCADE,related_name = "ext_and_outreach_programme",null=True)
    type_of_prog = models.CharField(max_length=400,default=None,blank=True, null=True)
    title_of_prog = models.CharField(max_length=400,default=None,blank=True, null=True)
    your_role = models.CharField(max_length=400,default=None,blank=True, null=True)
    cross_sec_of_participants = models.CharField(max_length=800,default=None,blank=True, null=True)
    no_of_participants = models.IntegerField(default=None,blank=True, null=True)
    funded_by = models.CharField(max_length=400,default=None,blank=True, null=True)
    venue = models.CharField(max_length=400,default=None,blank=True, null=True)
    from_date = models.CharField(max_length=400,default=None,blank=True, null=True)
    to_date = models.CharField(max_length=400,default=None,blank=True, null=True)

    class Meta:
        verbose_name_plural = "Extension and Outreach Programmes"

    def __str__(self):
        return self.staff.username+"'s extension and outreach programme"


class achievements(models.Model):
    staff = models.ForeignKey(User, on_delete=models.CASCADE,related_name = "achievements",null=True)
    title = models.CharField(max_length=400,default=None,blank=True, null=True)
    institution = models.CharField(max_length=400,default=None,blank=True, null=True)
    country = models.CharField(max_length=400,default=None,blank=True, null=True)
    year = models.CharField(max_length=800,default=None,blank=True, null=True)
    details = models.CharField(max_length=800,default=None,blank=True, null=True)
    level = models.CharField(max_length=400,default=None,blank=True, null=True)
    body = models.CharField(max_length=400,default=None,blank=True, null=True)
    capacity = models.CharField(max_length=400,default=None,blank=True, null=True)
    from_date = models.CharField(max_length=400,default=None,blank=True, null=True)
    to_date = models.CharField(max_length=400,default=None,blank=True, null=True)
    patent_no = models.CharField(max_length=400,default=None,blank=True, null=True)
    date = models.CharField(max_length=400,default=None,blank=True, null=True)
    file_no = models.CharField(max_length=400,default=None,blank=True, null=True)
    ach_type = models.CharField(max_length=400,default=None,blank=True, null=True)

    class Meta:
        verbose_name_plural = "Achievements"

    def __str__(self):
        return self.staff.username+"'s Achievements"