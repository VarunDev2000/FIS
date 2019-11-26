import React from 'react';
import { Form, Input, Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { editStaffinfo,getStaffinfo,deleteStaffinfo } from '../../actions/generalinfo';

class Edit extends React.Component {

  state = {
    generalinfo:{},
    id : this.props.location.state.id,
    redirect : false,

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
}

static propTypes = {
  editStaffinfo: PropTypes.func.isRequired,
  generalinfo: PropTypes.array.isRequired,
  deleteStaffinfo: PropTypes.func.isRequired,
}

onChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
}

delete = (e) => {
    e.preventDefault();

    this.props.deleteStaffinfo(this.state.id);
    window.open('/',"_self");
}

setStates = () => {
    this.props.generalinfo.map(ginfo => (
            this.state.name = ginfo.name,
            this.state.gender = ginfo.gender,
            this.state.dob = ginfo.dob,
            this.state.fath_hus_name = ginfo.fath_hus_name,
            this.state.official_mail = ginfo.official_mail,
            this.state.personal_mail = ginfo.personal_mail,
            this.state.aadhar = ginfo.aadhar,
            this.state.pan = ginfo.pan,
            this.state.mobile_no = ginfo.mobile_no,
            this.state.residence_ph_no = ginfo.residence_ph_no,
            this.state.caste = ginfo.caste,
            this.state.community = ginfo.community,
            this.state.res_address = ginfo.res_address,
            this.state.perm_address = ginfo.perm_address,
            this.state.website_url = ginfo.website_url
    ));
}

onSubmit = e => {
  
  e.preventDefault();
  const {name,gender,dob,fath_hus_name,official_mail,personal_mail,aadhar,
    pan,mobile_no,residence_ph_no,caste,community,res_address,perm_address,
    website_url} = this.state;

  const s_info = {name,gender,dob,fath_hus_name,official_mail,personal_mail,aadhar,
    pan,mobile_no,residence_ph_no,caste,community,res_address,perm_address,
    website_url};
    
    console.log(s_info);
    this.props.editStaffinfo(s_info,this.state.id);
    window.open('/',"_self");

}

componentDidMount() {
    this.props.getStaffinfo();
    this.setStates();
}


  render() {
    return (
      <div>
        { 
        this.props.generalinfo.map(ginfo => (
        <CustomLayout>
        <div align="right">
          <Button type="danger" htmlType = "submit" onClick = {this.delete}>Delete</Button>
        </div>
        <Form onSubmit ={this.onSubmit}>
          <Form.Item label="NAME">
            <Input name = "name" placeholder="Enter name" defaultValue = {ginfo.name} required onChange = {this.onChange} />         
          </Form.Item>
          <Form.Item label="GENDER">
            <Input name = "gender" placeholder="gender"  required defaultValue = {ginfo.gender} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="DOB">
            <input type = "date" name = "dob"  required defaultValue = {ginfo.dob} onChange = {this.onChange} ></input>
          </Form.Item>
          <Form.Item label="FATHER/HUSBAND NAME">
            <Input name = "fath_hus_name" placeholder="Fath or Hus name" required defaultValue = {ginfo.fath_hus_name} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="OFFICIAL MAIL">
            <Input name = "official_mail" placeholder="mail"  required defaultValue = {ginfo.official_mail} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="PERSONAL MAIL">
            <Input name = "personal_mail" placeholder="mail"  required defaultValue = {ginfo.personal_mail} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="AADHAR">
            <Input name = "aadhar" placeholder="Aadhar no"   required defaultValue = {ginfo.aadhar} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="PAN">
            <Input name = "pan" placeholder="Pan card no"   required defaultValue = {ginfo.pan} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="MOBILE NO">
            <Input name = "mobile_no" placeholder="Mobile"   required defaultValue = {ginfo.mobile_no} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="RESIDENCE PHONE NO">
            <Input name = "residence_ph_no" placeholder="Residence"  required defaultValue = {ginfo.residence_ph_no} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="CASTE">
            <Input name = "caste" placeholder="Caste"  required defaultValue = {ginfo.caste} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="COMMUNITY">
            <Input name = "community" placeholder="Community"  required defaultValue = {ginfo.community} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="RESIDENTIAL ADDRESS">
            <Input name = "res_address" placeholder="Address"  required defaultValue = {ginfo.res_address} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="PERMANENT ADDRESS">
            <Input name = "perm_address" placeholder="Address"  required defaultValue = {ginfo.perm_address} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="WEBSITE">
            <Input name = "website_url" placeholder="URL"  required defaultValue = {ginfo.website_url} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType = "submit">submit</Button>
          </Form.Item>
        </Form>
        </CustomLayout>
        ))
        }
      </div>
    );
  }
}


const mapStateToProps = state => ({
    generalinfo: state.generalinfo.generalinfo
});

export default connect(mapStateToProps,{ editStaffinfo,getStaffinfo,deleteStaffinfo })(Edit);
    