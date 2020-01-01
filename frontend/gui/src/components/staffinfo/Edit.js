import React from 'react';
import { Form, Input, Button } from 'antd';
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
    intercom2: ''
}

static propTypes = {
  editStaffinfo: PropTypes.func.isRequired,
  generalinfo: PropTypes.object.isRequired,
  deleteStaffinfo: PropTypes.func.isRequired,
}

onChange = e => {
  this.setState({
    [e.target.name]: e.target.value
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

  const {salutation,name,gender,dob,fath_hus_name,official_mail,personal_mail,aadhar,
    pan,mobile_no,residence_ph_no,caste,community,res_address,perm_address,
    website_url,disability,intercom1,intercom2} = this.state;

  const s_info = {salutation,name,gender,dob,fath_hus_name,official_mail,personal_mail,aadhar,
    pan,mobile_no,residence_ph_no,caste,community,res_address,perm_address,
    website_url,disability,intercom1,intercom2};

    //console.log(s_info)
    this.props.editStaffinfo(s_info,id);
    window.open('/generalinfo',"_self");
    //history.push('/');
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
        intercom2 : props.generalinfo.intercom2
      })
    }

    componentDidMount() {
      const id = this.props.match.params.id;
      this.props.getStaffinfobyID(id);
    }

    componentWillReceiveProps(props) {
        this.setStates(this.props);
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
        <div align="right">
          <Button type="danger" htmlType = "submit" onClick = {this.delete}>Delete</Button>
        </div>
        <Form onSubmit = {this.onSubmit}>
        <Form.Item label="SALUTATION">
          <select name = "salutation" defaultValue = {ginfo.salutation} onChange = {this.onChange}>
            <option value="Dr">Dr</option>
            <option value="Dr.">Dr.</option>
            <option value="Prof.">Prof.</option>
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Ms.">Ms.</option>
          </select>
          </Form.Item>
          <Form.Item label="NAME">
            <Input name = "name" placeholder="Enter name" defaultValue = {ginfo.name} required onChange = {this.onChange} />         
          </Form.Item>
          <Form.Item label="GENDER">
            <select name = "gender" defaultValue={ginfo.gender} onChange = {this.onChange}>
            <option value="Other">OTHER</option>
            <option value="Male">MALE</option>
            <option value="Female">FEMALE</option>
          </select>
          </Form.Item>
          <Form.Item label="DOB">
            <input type = "date" name = "dob"  required defaultValue = {ginfo.dob} onChange = {this.onChange} ></input>
          </Form.Item>
          <Form.Item label="FATHER/HUSBAND NAME">
            <Input name = "fath_hus_name" placeholder="Fath or Hus name" required defaultValue = {ginfo.fath_hus_name} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="PERSON WITH DISABILITY">
          <select name = "disability"  defaultValue={ginfo.disability} onChange = {this.onChange}>
            <option value="yes">YES</option>
            <option value="no">NO</option>
          </select>
          </Form.Item>
          <Form.Item label="OFFICIAL MAIL">
          <Input type = "email" name = "official_mail" placeholder="Enter Official Mail" defaultValue = {ginfo.official_mail} required onChange = {this.onChange} />         
          </Form.Item>
          <Form.Item label="PERSONAL MAIL">
          <Input type = "email" name = "personal_mail" placeholder="Enter Personal Mail" defaultValue = {ginfo.personal_mail} required onChange = {this.onChange} />         
          </Form.Item>
          <Form.Item label="AADHAR">
            <Input type = "number" name = "aadhar" placeholder="Aadhar no"   defaultValue = {ginfo.aadhar} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="PAN">
            <Input type = "number" name = "pan" placeholder="Pan card no"   defaultValue = {ginfo.pan} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="MOBILE NO">
            <Input type = "number" name = "mobile_no" placeholder="Mobile"   required defaultValue = {ginfo.mobile_no} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="RESIDENCE PHONE NO">
            <Input type = "number" name = "residence_ph_no" placeholder="Residence"  required defaultValue = {ginfo.residence_ph_no} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="COMMUNITY">
          <select name = "community" defaultValue = {ginfo.community} onChange = {this.onChange}>
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
            <Input type = "number" name = "intercom1" required defaultValue = {ginfo.intercom1} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="INTERCOM NO 2">
            <Input type = "number" name = "intercom2" required defaultValue = {ginfo.intercom2} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="RESIDENTIAL ADDRESS">
            <Input name = "res_address" placeholder="Address"  required defaultValue = {ginfo.res_address} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="PERMANENT ADDRESS">
            <Input name = "perm_address" placeholder="Address"  defaultValue = {ginfo.perm_address} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="WEBSITE">
            <Input type = "url" name = "website_url" placeholder="URL"  defaultValue = {ginfo.website_url} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType = "submit">submit</Button>
          </Form.Item>
        </Form>

      </div>
      ) : (<h1><center>ERROR!</center></h1>)
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