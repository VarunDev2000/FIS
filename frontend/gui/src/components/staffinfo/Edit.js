import React from 'react';
import { Form, Input, Button } from 'antd';
import { Card, CardImg,CardBody } from 'reactstrap';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { editStaffinfo,getStaffinfobyID,deleteStaffinfo } from '../../actions/generalinfo';

class Edit extends React.Component {

  state = {
    generalinfo:{},
    g_info:{},
    redirect : false,

    salutation: '',
    name: '',
    gender: '',
    dob: '',
    fath_hus_name: '',
    official_mail: '',
    personal_mail: '',
    aadhar: '',
    pan: '',
    mobile_no: '',
    residence_ph_no: '',
    caste: '',
    community: '',
    res_address: '',
    perm_address: '',
    website_url: '',
    disability: '',
    intercom1: '',
    intercom2: '',
    profile_pic: '',

    file : null,
    disabled : false,
    filechanged : false,
    delete_profile_pic : false,
}

static propTypes = {
  editStaffinfo: PropTypes.func.isRequired,
  generalinfo: PropTypes.object.isRequired,
  deleteStaffinfo: PropTypes.func.isRequired,
}

deleteProfilePicture = e =>{
  e.preventDefault();
  const id = this.props.match.params.id;
  var conf = window.confirm("Do you want to delete ?");
  if (conf === true) {

    let form_data = new FormData();
    form_data.append('profile_pic', "");
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

    for (var pair of form_data.entries()) {
      console.log(pair[0]+ ' - ' + pair[1]); 

    }
    this.props.editStaffinfo(form_data,id);
    window.open('/generalinfo',"_self");
  } 
}


popIMAGE(url) {
  if(url != null)
  {
  var ref = window.open(url,"thePop","menubar=1,resizable=1,scrollbars=1,status=1,height=1920,width=1020,top=0")
  ref.focus();
  }

  else{
    alert("Profile Picture Unavailable!!")
  }
}

onChange = e => {
  if(e.target.value === "")
  {
    this.setState({
      [e.target.name]: ""
    });
  }

  else{
    this.setState({
      [e.target.name]: e.target.value
    });
  }
}


onFileChange = e => {
  this.setState({
    file : e.target.files[0],
    filechanged : true
  });
}

delete = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    var conf = window.confirm("Do you want to delete ?");
    if (conf === true) {
      this.props.deleteStaffinfo(id);
      //history.push('/');
      window.open('/generalinfo',"_self");
    } 
}


onSubmit = e => {

  e.preventDefault();
  const id = this.props.match.params.id;

  let form_data = new FormData();

  if(this.state.filechanged == true)
  {
    this.setState({
      disabled : true
    })
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

    setStates(props)
    {
      this.setState({
        salutation : props.generalinfo.salutation,
        name : props.generalinfo.name,
        gender : props.generalinfo.gender,
        dob : props.generalinfo.dob,
        fath_hus_name : props.generalinfo.fath_hus_name,
        official_mail : props.generalinfo.official_mail,
        personal_mail : props.generalinfo.personal_mail,
        aadhar : props.generalinfo.aadhar,
        pan : props.generalinfo.pan,
        mobile_no : props.generalinfo.mobile_no,
        residence_ph_no : props.generalinfo.residence_ph_no,
        caste : props.generalinfo.caste,
        community : props.generalinfo.community,
        res_address : props.generalinfo.res_address,
        perm_address : props.generalinfo.perm_address,
        website_url : props.generalinfo.website_url,
        disability : props.generalinfo.disability,
        intercom1 : props.generalinfo.intercom1,
        intercom2 : props.generalinfo.intercom2,
        profile_pic : props.generalinfo.profile_pic,
      })
    }

    componentDidMount() {
      const id = this.props.match.params.id;
      this.props.getStaffinfobyID(id);
    }

    componentWillReceiveProps(props) {
        this.setStates(props);
        this.setState({
          g_info : props.generalinfo
        })
    }


  render() {
    const id = this.props.match.params.id;
    var ginfo = this.state.g_info;

    return (
      <CustomLayout>
      {
      id != null ? (
      <div key = {ginfo.id}>

        <Form onSubmit = {this.onSubmit}>
        <Form.Item label = "CHANGE OR ADD PROFILE PICTURE">
          <input type="file" name="pic" accept="image/*" onChange = {this.onFileChange}/>
          <br/>
          {
          ginfo.profile_pic != null ? (
          <div>
          <label>CURRENT PROFILE PICTURE :</label>
          <Card>
              <CardImg top  onClick={() => this.popIMAGE(ginfo.profile_pic)} src={ginfo.profile_pic}></CardImg>
              <CardBody style={{paddingBottom:"50px"}}>
              <Button type = "danger" style={{width:"160px"}} onClick={this.deleteProfilePicture}>DELETE</Button>
              </CardBody>
          </Card>
          </div>
          ) : (null)
          }
        </Form.Item>
        <hr/>
        <Form.Item label="SALUTATION">
          <select name = "salutation" defaultValue = {ginfo.salutation} onChange = {this.onChange}>
            <option value="">None</option>
            <option value="Dr">Dr</option>
            <option value="Dr.">Dr.</option>
            <option value="Prof.">Prof.</option>
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Ms.">Ms.</option>
          </select>
          </Form.Item>
          <Form.Item label="NAME">
            <Input name = "name" placeholder="Enter name" defaultValue = {ginfo.name}  onChange = {this.onChange} />         
          </Form.Item>
          <Form.Item label="GENDER">
            <select name = "gender" defaultValue={ginfo.gender} onChange = {this.onChange}>
            <option value="">None</option>
            <option value="Other">OTHER</option>
            <option value="Male">MALE</option>
            <option value="Female">FEMALE</option>
          </select>
          </Form.Item>
          <Form.Item label="DOB">
            <input type = "date" name = "dob"   defaultValue = {ginfo.dob} onChange = {this.onChange} ></input>
          </Form.Item>
          <Form.Item label="FATHER/HUSBAND NAME">
            <Input name = "fath_hus_name" placeholder="Fath or Hus name"  defaultValue = {ginfo.fath_hus_name} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="PERSON WITH DISABILITY">
          <select name = "disability"  defaultValue={ginfo.disability} onChange = {this.onChange}>
            <option value="">None</option>
            <option value="yes">YES</option>
            <option value="no">NO</option>
          </select>
          </Form.Item>
          <Form.Item label="OFFICIAL MAIL">
          <Input type = "email" name = "official_mail" placeholder="Enter Official Mail" defaultValue = {ginfo.official_mail}  onChange = {this.onChange} />         
          </Form.Item>
          <Form.Item label="PERSONAL MAIL">
          <Input type = "email" name = "personal_mail" placeholder="Enter Personal Mail" defaultValue = {ginfo.personal_mail}  onChange = {this.onChange} />         
          </Form.Item>
          <Form.Item label="AADHAR">
            <Input type = "number" name = "aadhar" placeholder="Aadhar no"   defaultValue = {ginfo.aadhar} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="PAN">
            <Input type = "number" name = "pan" placeholder="Pan card no"   defaultValue = {ginfo.pan} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="MOBILE NO">
            <Input type = "number" name = "mobile_no" placeholder="Mobile"    defaultValue = {ginfo.mobile_no} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="RESIDENCE PHONE NO">
            <Input type = "number" name = "residence_ph_no" placeholder="Residence"   defaultValue = {ginfo.residence_ph_no} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="COMMUNITY">
          <select name = "community" defaultValue = {ginfo.community} onChange = {this.onChange}>
            <option value="">None</option>
            <option value="Other community">OTHER COMMUNITY</option>
            <option value="Scheduled Tribe">SCHEDULED TRIBE</option>
            <option value="Scheduled Caste">SCHEDULED CASTE</option>
            <option value="Most Backward Community">MOST BACKWARD COMMUNITY</option>
            <option value="Backward Community">BACKWARD COMMUNITY</option>
          </select>
          </Form.Item>
          <Form.Item label="CASTE">
            <Input name = "caste" placeholder="Caste"  defaultValue = {ginfo.caste} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="INTERCOM NO 1">
            <Input type = "number" name = "intercom1"  defaultValue = {ginfo.intercom1} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="INTERCOM NO 2">
            <Input type = "number" name = "intercom2"  defaultValue = {ginfo.intercom2} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="RESIDENTIAL ADDRESS">
            <Input name = "res_address" placeholder="Address"   defaultValue = {ginfo.res_address} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="PERMANENT ADDRESS">
            <Input name = "perm_address" placeholder="Address"  defaultValue = {ginfo.perm_address} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="WEBSITE">
            <Input type = "url" name = "website_url" placeholder="URL"  defaultValue = {ginfo.website_url} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType = "submit" disabled = {this.state.disabled}>submit</Button>
          </Form.Item>
        </Form>

      </div>
      ) : (<h1></h1>)
      }
      </CustomLayout>
    );
  }
}


const mapStateToProps = state => (
  {
    generalinfo: state.generalinfo.generalinfo_by_id,
});

export default connect(mapStateToProps,{ editStaffinfo,getStaffinfobyID,deleteStaffinfo })(Edit);