import React from 'react';
import { Form, Input, Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { addStaffinfo } from '../../actions/generalinfo';

class CustomForm extends React.Component {

  state = {
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
  addStaffinfo: PropTypes.func.isRequired
}

onChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
}

onSubmit = e => {
  
  e.preventDefault();
  if(this.props.type == 'add')
  {
  const {name,gender,dob,fath_hus_name,official_mail,personal_mail,aadhar,
    pan,mobile_no,residence_ph_no,caste,community,res_address,perm_address,
    website_url} = this.state;

  const s_info = {name,gender,dob,fath_hus_name,official_mail,personal_mail,aadhar,
    pan,mobile_no,residence_ph_no,caste,community,res_address,perm_address,
    website_url};
    
    console.log(s_info);
    this.props.addStaffinfo(s_info);
  }

  else{
    console.log("submit");
  }
}

  render() {
    const {name,gender,dob,fath_hus_name,official_mail,personal_mail,aadhar,
    pan,mobile_no,residence_ph_no,caste,community,res_address,perm_address,
    website_url} = this.state;

    return (
      <div>
        <CustomLayout>
        <Form onSubmit ={this.onSubmit}>
          <Form.Item label="NAME">
            <Input name = "name" placeholder="Enter name" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="GENDER">
            <Input name = "gender" placeholder="gender" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="DOB">
            <input type = "date" name = "dob" required onChange = {this.onChange} ></input>
          </Form.Item>
          <Form.Item label="FATHER/HUSBAND NAME">
            <Input name = "fath_hus_name" placeholder="Fath or Hus name" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="OFFICIAL MAIL">
            <Input name = "official_mail" placeholder="mail" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="PERSONAL MAIL">
            <Input name = "personal_mail" placeholder="mail" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="AADHAR">
            <Input name = "aadhar" placeholder="Aadhar no" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="PAN">
            <Input name = "pan" placeholder="Pan card no" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="MOBILE NO">
            <Input name = "mobile_no" placeholder="Mobile" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="RESIDENCE PHONE NO">
            <Input name = "residence_ph_no" placeholder="Residence" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="CASTE">
            <Input name = "caste" placeholder="Caste" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="COMMUNITY">
            <Input name = "community" placeholder="Community" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="RESIDENTIAL ADDRESS">
            <Input name = "res_address" placeholder="Address" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="PERMANENT ADDRESS">
            <Input name = "perm_address" placeholder="Address" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="WEBSITE">
            <Input name = "website_url" placeholder="URL" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType = "submit">{this.props.btnText}</Button>
          </Form.Item>
        </Form>
        </CustomLayout>
      </div>
    );
  }
}


export default connect(null,{ addStaffinfo })(CustomForm);