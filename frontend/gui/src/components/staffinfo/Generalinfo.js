import React from 'react';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { getStaffinfo } from '../../actions/generalinfo';
import history from '../common/history'
import { addStaffinfo,deleteStaffinfo,editStaffinfo } from '../../actions/generalinfo';
import user_pic from './user.png';
import $ from 'jquery';

class Generalinfo extends React.Component{

  static propTypes = {
    generalinfo: PropTypes.array.isRequired,
    deleteStaffinfo: PropTypes.func.isRequired,
    editStaffinfo: PropTypes.func.isRequired,
  }

  state = {
    generalinfo:{},
    numRows : 0,
    redirect : false,
    id:'',
    name:'',
    salutation:'',
    name: '',
    gender: '',
    dob: '',
    fath_hus_name: '',
    official_mail: '',
    personal_mail: '',
    aadhar: '',
    disability:'',
    pan: '',
    mobile_no: '',
    residence_ph_no: '',
    intercom1: '',
    intercom2: '',
    caste: '',
    community: '',
    res_address: '',
    perm_address: '',
    website_url: '',
    profile_pic: '',

    file : null,
    disabled : false,
    filechanged : false,
}

static propTypes = {
addStaffinfo: PropTypes.func.isRequired
}

delete = (e) => {
  e.preventDefault();
  const id = this.state.id;
  var conf = window.confirm("Do you want to delete ?");

  if (conf === true) {
    this.props.deleteStaffinfo(id);

    setTimeout( function(){
      window.open("/generalinfo","_self")
    }, 1000 );
  } 
}

onChange = e => {
this.setState({
  [e.target.name]: e.target.value
});
}

onFileChange = e => {

this.setState({
  file : e.target.files[0],
  filechanged : true
});


document.getElementById("uploadFile").value = e.target.files[0].name;

  const id = this.state.id;

  let form_data = new FormData();

  form_data.append('profile_pic', e.target.files[0], e.target.files[0].name);


  this.props.editStaffinfo(form_data,id);

  setTimeout( function(){
    window.open("/generalinfo","_self")
  }, 10 );

}

deleteFile = e => {

    this.setState({
      file : null,
      filechanged : false
    });
    
      const id = this.state.id;
    
      let form_data = new FormData();
    
      form_data.append('profile_pic', "");
    
    
      this.props.editStaffinfo(form_data,id);
    
      setTimeout( function(){
        window.open("/generalinfo","_self")
      }, 10 );
    
    }

onSubmit = e => {

//e.preventDefault();

  this.setState({
    disabled : true
  })

  let form_data = new FormData();
  if(this.state.filechanged == true)
  {
  form_data.append('profile_pic', this.state.file, this.state.file.name);
  }
  form_data.append('salutation', this.state.salutation);
  form_data.append('name', this.state.name);
  form_data.append('gender', this.state.gender);
  form_data.append('dob', this.state.dob);
  form_data.append('fath_hus_name ', this.state.fath_hus_name );
  form_data.append('official_mail ', this.state.official_mail );
  form_data.append('personal_mail ', this.state.personal_mail );
  form_data.append('aadhar', this.state.aadhar);
  form_data.append('pan', this.state.pan);
  form_data.append('mobile_no', this.state.mobile_no);
  form_data.append('residence_ph_no', this.state.residence_ph_no);
  form_data.append('caste', this.state.caste);
  form_data.append('community', this.state.community);
  form_data.append('res_address', this.state.res_address);
  form_data.append('perm_address', this.state.perm_address);
  form_data.append('website_url', this.state.website_url);
  form_data.append('disability', this.state.disability);
  form_data.append('intercom1', this.state.intercom1);
  form_data.append('intercom2', this.state.intercom2);

  /*
const {salutation,name,gender,dob,fath_hus_name,official_mail,personal_mail,aadhar,
  pan,mobile_no,residence_ph_no,caste,community,res_address,perm_address,
  website_url,disability,intercom1,intercom2} = this.state;

const s_info = {salutation,name,gender,dob,fath_hus_name,official_mail,personal_mail,aadhar,
  pan,mobile_no,residence_ph_no,caste,community,res_address,perm_address,
  website_url,disability,intercom1,intercom2};
  */
  
  //console.log(form_data);
  this.props.addStaffinfo(form_data);

  //window.open('/generalinfo',"_self");

  setTimeout( function(){
    window.open("/generalinfo","_self")
  }, 1000 );
  
}


onEditSubmit = e => {

  e.preventDefault();
  const id = this.state.id;

  let form_data = new FormData();

  if(this.state.filechanged == true)
  {
    form_data.append('profile_pic', this.state.file, this.state.file.name);
  }

  form_data.append('salutation', this.state.salutation);
  form_data.append('name', this.state.name);
  form_data.append('gender', this.state.gender);
  form_data.append('dob', this.state.dob);
  form_data.append('fath_hus_name ', this.state.fath_hus_name );
  form_data.append('official_mail ', this.state.official_mail );
  form_data.append('personal_mail ', this.state.personal_mail );
  form_data.append('aadhar', this.state.aadhar === null ? "" : this.state.aadhar);
  form_data.append('pan', this.state.pan === null ? "" : this.state.pan);
  form_data.append('mobile_no', this.state.mobile_no === null ? "" : this.state.mobile_no);
  form_data.append('residence_ph_no', this.state.residence_ph_no === null ? "" : this.state.residence_ph_no);
  form_data.append('caste', this.state.caste);
  form_data.append('community', this.state.community);
  form_data.append('res_address', this.state.res_address);
  form_data.append('perm_address', this.state.perm_address);
  form_data.append('website_url', this.state.website_url);
  form_data.append('disability', this.state.disability);
  form_data.append('intercom1', this.state.intercom1 === null ? "" : this.state.intercom1);
  form_data.append('intercom2', this.state.intercom2 === null ? "" : this.state.intercom2);

  
 /*
  const {salutation,name,gender,dob,fath_hus_name,official_mail,personal_mail,aadhar,
    pan,mobile_no,residence_ph_no,caste,community,res_address,perm_address,
    website_url,disability,intercom1,intercom2} = this.state;

  const s_info = {salutation,name,gender,dob,fath_hus_name,official_mail,personal_mail,aadhar,
    pan,mobile_no,residence_ph_no,caste,community,res_address,perm_address,
    website_url,disability,intercom1,intercom2,profile_pic};
    
console.log(s_info)
*/

    this.props.editStaffinfo(form_data,id);
    //window.open('/generalinfo',"_self");

    setTimeout( function(){
      window.open("/generalinfo","_self")
    }, 1000 );

}


changePage = (url,e) => {
  history.push(url)
}

    setRedirect = () => {
      this.setState({
        redirect: true
      })
    }

    addRedirect = () => {
      history.push('generalinfo/add');

      //window.open("/add","_self");
    }

    editRedirect = (e) => {
      var id = e.target.id;
      history.push(`generalinfo/edit/${id}`);

        //window.open('/edit',"_self");

    }

    setStates(props)
    {
      props.generalinfo.map(ginfo => (
      this.setState({
        id : ginfo.id,
        name : ginfo.name,
        salutation :ginfo.salutation,
        name : ginfo.name,
        gender : ginfo.gender,
        dob : ginfo.dob,
        fath_hus_name : ginfo.fath_hus_name,
        official_mail : ginfo.official_mail,
        personal_mail : ginfo.personal_mail,
        aadhar : ginfo.aadhar,
        pan : ginfo.pan,
        mobile_no : ginfo.mobile_no,
        residence_ph_no : ginfo.residence_ph_no,
        caste : ginfo.caste,
        community : ginfo.community,
        res_address : ginfo.res_address,
        perm_address : ginfo.perm_address,
        website_url : ginfo.website_url,
        disability : ginfo.disability,
        intercom1 : ginfo.intercom1,
        intercom2 : ginfo.intercom2,
        profile_pic : ginfo.profile_pic,
      })
      ))
    }
    

    
      componentDidMount() {
        this.props.getStaffinfo();
        $("#profileImage").click(function(e) {
          $("#imageUpload").click();
      });
      }

      componentWillReceiveProps(props) {
          this.setState({
            numRows : props.length
          })
          localStorage.setItem('length',props.length)
          this.setStates(props);
          this.setState({
            g_info : props.generalinfo
          })
      }
      

    render(){
      var numRows = localStorage.getItem('length');
      var username = localStorage.getItem('username');
      
    return (
      <CustomLayout>
          <div class="">
          {
          numRows == 0 || numRows == null ? (
            <div class="container-fluid">
           <div class="row page-titles">
                    <div class="col-md-5 align-self-center">
                        <h4 class="text-themecolor">Profile</h4>
                    </div>
                    <div class="col-md-7 align-self-center text-right">
                        <div class="d-flex justify-content-end align-items-center">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a onClick = {this.changePage.bind(this,'/')}>Dashboard</a></li>
                                <li class="breadcrumb-item active"></li>
                            </ol>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-4 col-xlg-3 col-md-5">
                        <div class="card">
                            <div class="card-body">
                                <center class="m-t-30"> <img src={user_pic} class="img-circle" width="150" />
                                    <h4 class="card-title m-t-10">{username}</h4>
                                </center>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8 col-xlg-9 col-md-7">
                        <div class="card">
                            <div class="card-body">
                                <form class="form-horizontal form-material" onSubmit = {this.onSubmit}>
                                    <div class="form-group">
                                        <label class="col-md-12">Full Name</label>
                                        <div class="col-md-12">
                                            <input type="text" required  name = "name" onChange = {this.onChange} class="form-control form-control-line"/>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="example-email" class="col-md-12">Gender</label>
                                        <div class="col-md-12">
                                        <select name = "gender" onChange = {this.onChange} defaultValue={'DEFAULT'}>
                                          <option value="DEFAULT" disabled></option>
                                          <option value="Other">OTHER</option>
                                          <option value="Male">MALE</option>
                                          <option value="Female">FEMALE</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="example-email" class="col-md-12">Date of Birth</label>
                                        <div class="col-md-12">
                                            <input type="date"  name = "dob" onChange = {this.onChange} required class="form-control form-control-line" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="example-email" class="col-md-12">Father/Husband Name</label>
                                        <div class="col-md-12">
                                            <input type="text" onChange = {this.onChange} name = "fath_hus_name" class="form-control form-control-line"/>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="example-email" class="col-md-12">Official Mail</label>
                                        <div class="col-md-12">
                                            <input type="email" onChange = {this.onChange} name="official_mail"  class="form-control form-control-line"/>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="example-email" class="col-md-12">Personal Mail</label>
                                        <div class="col-md-12">
                                            <input type="email" onChange = {this.onChange} name="personal_mail" class="form-control form-control-line" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="example-email" class="col-md-12">Aadhar No</label>
                                        <div class="col-md-12">
                                            <input type="number" onChange = {this.onChange} name = "aadhar" class="form-control form-control-line"/>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="example-email" class="col-md-12">Pan No</label>
                                        <div class="col-md-12">
                                            <input type="number" onChange = {this.onChange} name = "pan"  class="form-control form-control-line" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="example-email" class="col-md-12">Mobile No</label>
                                        <div class="col-md-12">
                                            <input type="number" onChange = {this.onChange} name = "mobile_no"  class="form-control form-control-line" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="example-email" class="col-md-12">Residence Ph No</label>
                                        <div class="col-md-12">
                                            <input type="number" onChange = {this.onChange} name = "residence_ph_no"  class="form-control form-control-line" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="example-email" class="col-md-12">Community</label>
                                        <div class="col-md-12">
                                        <select name = "community" onChange = {this.onChange}  defaultValue={'DEFAULT'}>
                                          <option value="DEFAULT" disabled></option>
                                          <option value="Other community">OTHER COMMUNITY</option>
                                          <option value="Scheduled Tribe">SCHEDULED TRIBE</option>
                                          <option value="Scheduled Caste">SCHEDULED CASTE</option>
                                          <option value="Most Backward Community">MOST BACKWARD COMMUNITY</option>
                                          <option value="Backward Community">BACKWARD COMMUNITY</option>
                                        </select>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="example-email" class="col-md-12">Caste</label>
                                        <div class="col-md-12">
                                            <input type="text" onChange = {this.onChange} name = "caste"  class="form-control form-control-line"/>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="example-email" class="col-md-12">Intercom No 1</label>
                                        <div class="col-md-12">
                                            <input type="number" onChange = {this.onChange} name = "intercom1" class="form-control form-control-line" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="example-email" class="col-md-12">Intercom No 2</label>
                                        <div class="col-md-12">
                                            <input type="number" onChange = {this.onChange} name = "intercom2" class="form-control form-control-line" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="example-email" class="col-md-12">Residential Address</label>
                                        <div class="col-md-12">
                                            <input type="text" onChange = {this.onChange} name = "res_address"  class="form-control form-control-line" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="example-email" class="col-md-12">Permanent Address</label>
                                        <div class="col-md-12">
                                            <input type="text" onChange = {this.onChange} name = "perm_address" class="form-control form-control-line" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="example-email" class="col-md-12">Person With Disability?</label>
                                        <div class="col-md-12">
                                        <select name = "disability" onChange = {this.onChange} defaultValue={'DEFAULT'}>
                                          <option value="DEFAULT" disabled></option>
                                          <option value="yes">YES</option>
                                          <option value="no">NO</option>
                                        </select>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="example-email" class="col-md-12">Salutation</label>
                                        <div class="col-md-12">
                                        <select name = "salutation" onChange = {this.onChange} defaultValue={'DEFAULT'}>
                                          <option value="DEFAULT" disabled></option>
                                          <option value="Dr">Dr</option>
                                          <option value="Dr.">Dr.</option>
                                          <option value="Prof.">Prof.</option>
                                          <option value="Mr.">Mr.</option>
                                          <option value="Mrs.">Mrs.</option>
                                          <option value="Ms.">Ms.</option>
                                        </select>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="example-email" class="col-md-12">Website</label>
                                        <div class="col-md-12">
                                            <input type="url" onChange = {this.onChange} name = "website_url" class="form-control form-control-line" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-sm-12">
                                            <button class="btn btn-success" htmlType = "submit">Update Profile</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
          ) : (
           <div class="container-fluid">
           <div class="row page-titles">
                    <div class="col-md-5 align-self-center">
                        <h4 class="text-themecolor">Profile</h4>
                    </div>
                    <div class="col-md-7 align-self-center text-right">
                        <div class="d-flex justify-content-end align-items-center">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a onClick = {this.changePage.bind(this,'/')}>Dashboard</a></li>
                                <li class="breadcrumb-item active"></li>
                            </ol>
                            <button type="button" class="btn btn-danger d-none d-lg-block m-l-15" onClick={this.delete}>DELETE DETAILS</button>
                        </div>
                    </div>
                </div>

                {
                this.props.generalinfo.map(ginfo => (
                  <div class="row">
                  <div class="col-lg-4 col-xlg-3 col-md-5">
                      <div class="card">
                          <div class="card-body">
                              <center class="m-t-30">

                                  {
                                      ginfo.profile_pic == null ? (
                                        <img src={user_pic} id="profileImage" class="img-circle" width="150"/>
                                      ) : (
                                        <img src={ginfo.profile_pic} id="profileImage" class="img-circle" width="150"/>
                                      )
                                  }

                                  <h4 class="card-title m-t-10">{ginfo.name}</h4>
                                  <h6 class="card-subtitle">{ginfo.official_mail}</h6>
                                  <hr/>


                              <input id="uploadFile" placeholder="Choose Profile Picture" disabled="disabled" />

                              <div class="row">
                                <div class="col-sm-6">
                                <div class="fileUpload btn btn-primary">
                                    <span>Choose</span>
                                    <input type="file" class="upload" accept="image/*" name="profile_photo" onChange={this.onFileChange}/>
                                </div>
                                </div>

                                <div class="col-sm-1"></div>

                                {
                                ginfo.profile_pic != null ? (
                                <div class="col-sm-4">
                                    <button type="file" class="btn btn-danger d-none d-lg-block m-l-15 del" name="profile_photo" onClick={this.deleteFile}>Delete</button>
                                </div>
                                ):(
                                <div class="col-sm-4">
                                </div>
                                )
                                }  
                            </div>
                                                        
                              </center>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-8 col-xlg-9 col-md-7">
                      <div class="card">
                          <div class="card-body">
                              <form class="form-horizontal form-material" onSubmit = {this.onEditSubmit}>
                                  <div class="form-group">
                                      <label class="col-md-12">Full Name</label>
                                      <div class="col-md-12">
                                          <input type="text" required  name = "name" defaultValue={ginfo.name} onChange = {this.onChange} class="form-control form-control-line"/>
                                      </div>
                                  </div>
                                  <div class="form-group">
                                      <label for="example-email" class="col-md-12">Gender</label>
                                      <div class="col-md-12">
                                      <select name = "gender" onChange = {this.onChange} defaultValue={ginfo.gender}>
                                        <option value="DEFAULT" disabled></option>
                                        <option value="Other">OTHER</option>
                                        <option value="Male">MALE</option>
                                        <option value="Female">FEMALE</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div class="form-group">
                                      <label for="example-email" class="col-md-12">Date of Birth</label>
                                      <div class="col-md-12">
                                          <input type="date"  name = "dob" onChange = {this.onChange} defaultValue={ginfo.dob} required class="form-control form-control-line" />
                                      </div>
                                  </div>
                                  <div class="form-group">
                                      <label for="example-email" class="col-md-12">Father/Husband Name</label>
                                      <div class="col-md-12">
                                          <input type="text" onChange = {this.onChange} defaultValue={ginfo.fath_hus_name} name = "fath_hus_name" class="form-control form-control-line"/>
                                      </div>
                                  </div>
                                  <div class="form-group">
                                      <label for="example-email" class="col-md-12">Official Mail</label>
                                      <div class="col-md-12">
                                          <input type="email" onChange = {this.onChange} defaultValue={ginfo.official_mail} name="official_mail"  class="form-control form-control-line"/>
                                      </div>
                                  </div>
                                  <div class="form-group">
                                      <label for="example-email" class="col-md-12">Personal Mail</label>
                                      <div class="col-md-12">
                                          <input type="email" onChange = {this.onChange} defaultValue={ginfo.personal_mail} name="personal_mail" class="form-control form-control-line" />
                                      </div>
                                  </div>
                                  <div class="form-group">
                                      <label for="example-email" class="col-md-12">Aadhar No</label>
                                      <div class="col-md-12">
                                          <input type="number" onChange = {this.onChange} defaultValue={ginfo.aadhar} name = "aadhar" class="form-control form-control-line"/>
                                      </div>
                                  </div>
                                  <div class="form-group">
                                      <label for="example-email" class="col-md-12">Pan No</label>
                                      <div class="col-md-12">
                                          <input type="number" onChange = {this.onChange} defaultValue={ginfo.pan} name = "pan"  class="form-control form-control-line" />
                                      </div>
                                  </div>
                                  <div class="form-group">
                                      <label for="example-email" class="col-md-12">Mobile No</label>
                                      <div class="col-md-12">
                                          <input type="number" onChange = {this.onChange} defaultValue={ginfo.mobile_no} name = "mobile_no"  class="form-control form-control-line" />
                                      </div>
                                  </div>
                                  <div class="form-group">
                                      <label for="example-email" class="col-md-12">Residence Ph No</label>
                                      <div class="col-md-12">
                                          <input type="number" onChange = {this.onChange} defaultValue={ginfo.residence_ph_no} name = "residence_ph_no"  class="form-control form-control-line" />
                                      </div>
                                  </div>
                                  <div class="form-group">
                                      <label for="example-email" class="col-md-12">Community</label>
                                      <div class="col-md-12">
                                      <select name = "community" onChange = {this.onChange}  defaultValue={ginfo.community}>
                                        <option value="DEFAULT" disabled></option>
                                        <option value="Other community">OTHER COMMUNITY</option>
                                        <option value="Scheduled Tribe">SCHEDULED TRIBE</option>
                                        <option value="Scheduled Caste">SCHEDULED CASTE</option>
                                        <option value="Most Backward Community">MOST BACKWARD COMMUNITY</option>
                                        <option value="Backward Community">BACKWARD COMMUNITY</option>
                                      </select>
                                      </div>
                                  </div>
                                  <div class="form-group">
                                      <label for="example-email" class="col-md-12">Caste</label>
                                      <div class="col-md-12">
                                          <input type="text" onChange = {this.onChange} defaultValue={ginfo.caste} name = "caste"  class="form-control form-control-line"/>
                                      </div>
                                  </div>
                                  <div class="form-group">
                                      <label for="example-email" class="col-md-12">Intercom No 1</label>
                                      <div class="col-md-12">
                                          <input type="number" onChange = {this.onChange} defaultValue={ginfo.intercom1} name = "intercom1" class="form-control form-control-line" />
                                      </div>
                                  </div>
                                  <div class="form-group">
                                      <label for="example-email" class="col-md-12">Intercom No 2</label>
                                      <div class="col-md-12">
                                          <input type="number" onChange = {this.onChange} defaultValue={ginfo.intercom2} name = "intercom2" class="form-control form-control-line" />
                                      </div>
                                  </div>
                                  <div class="form-group">
                                      <label for="example-email" class="col-md-12">Residential Address</label>
                                      <div class="col-md-12">
                                          <input type="text" onChange = {this.onChange} defaultValue={ginfo.res_address} name = "res_address"  class="form-control form-control-line" />
                                      </div>
                                  </div>
                                  <div class="form-group">
                                      <label for="example-email" class="col-md-12">Permanent Address</label>
                                      <div class="col-md-12">
                                          <input type="text" onChange = {this.onChange} defaultValue={ginfo.perm_address} name = "perm_address" class="form-control form-control-line" />
                                      </div>
                                  </div>
                                  <div class="form-group">
                                      <label for="example-email" class="col-md-12">Person With Disability?</label>
                                      <div class="col-md-12">
                                      <select name = "disability" onChange = {this.onChange} defaultValue={ginfo.disability}>
                                        <option value="DEFAULT" disabled></option>
                                        <option value="yes">YES</option>
                                        <option value="no">NO</option>
                                      </select>
                                      </div>
                                  </div>
                                  <div class="form-group">
                                      <label for="example-email" class="col-md-12">Salutation</label>
                                      <div class="col-md-12">
                                      <select name = "salutation" onChange = {this.onChange} defaultValue={ginfo.salutation}>
                                        <option value="DEFAULT" disabled></option>
                                        <option value="Dr">Dr</option>
                                        <option value="Dr.">Dr.</option>
                                        <option value="Prof.">Prof.</option>
                                        <option value="Mr.">Mr.</option>
                                        <option value="Mrs.">Mrs.</option>
                                        <option value="Ms.">Ms.</option>
                                      </select>
                                      </div>
                                  </div>
                                  <div class="form-group">
                                      <label for="example-email" class="col-md-12">Website</label>
                                      <div class="col-md-12">
                                          <input type="url" onChange = {this.onChange} defaultValue={ginfo.website_url} name = "website_url" class="form-control form-control-line" />
                                      </div>
                                  </div>
                                  <div class="form-group">
                                      <div class="col-sm-12">
                                          <button class="btn btn-success" htmlType = "submit">Update Profile</button>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
                  </div>
                ))
                }

                </div>
          )
          }
            </div>
      </CustomLayout>
    );
    }
  }

const mapStateToProps = state => ({
  generalinfo: state.generalinfo.generalinfo,
  length : state.generalinfo.length
});


export default connect(mapStateToProps,{ getStaffinfo,addStaffinfo,deleteStaffinfo,editStaffinfo })(Generalinfo);