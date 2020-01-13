import React from 'react';
import { Field,reduxForm } from 'redux-form'
import { Form, Input, Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { addStaffinfo } from '../../actions/generalinfo';

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined
  

const renderField = ({ input, type, meta: { touched, error, warning } }) => (
  <div>
    <div>
      <input {...input}  className="form-control"  type={type}/>
      {touched && ((error && <span className = "ew">*{error}</span>) || (warning && <span className = "ew">*{warning}</span>))}
    </div>
  </div>
)

class CustomForm extends React.Component {

  state = {
    redirect : false,
    salutation:'Dr',
    name: '',
    gender: 'Other',
    dob: '',
    fath_hus_name: '',
    official_mail: '',
    personal_mail: '',
    aadhar: null,
    disability:'yes',
    pan: null,
    mobile_no: '',
    residence_ph_no: '',
    intercom1: '',
    intercom2: '',
    caste: '',
    community: 'Other community',
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
  
  //e.preventDefault();
  if(this.props.type === 'add')
  {
  const {salutation,name,gender,dob,fath_hus_name,official_mail,personal_mail,aadhar,
    pan,mobile_no,residence_ph_no,caste,community,res_address,perm_address,
    website_url,disability,intercom1,intercom2} = this.state;

  const s_info = {salutation,name,gender,dob,fath_hus_name,official_mail,personal_mail,aadhar,
    pan,mobile_no,residence_ph_no,caste,community,res_address,perm_address,
    website_url,disability,intercom1,intercom2};
    
    //console.log(s_info);
    this.props.addStaffinfo(s_info);
    //history.push('/');
    window.open('/generalinfo',"_self");
  }

  else{
    console.log("submit");
  }
}

  render() {
    const { official_mail,personal_mail } = this.state;
    return (
      <div>
        <CustomLayout>
        <Form onSubmit = {this.props.handleSubmit(() => this.onSubmit(this))}>
          <Form.Item label="SALUTATION">
          <select name = "salutation" onChange = {this.onChange}>
            <option value="Dr">Dr</option>
            <option value="Dr.">Dr.</option>
            <option value="Prof.">Prof.</option>
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Ms.">Ms.</option>
          </select>
          </Form.Item>
          <Form.Item label = "ADD PROFILE PIC">
          <input type="file" name="pic" accept="image/*"/>
          </Form.Item>
          <Form.Item label="NAME">
            <Input name = "name" placeholder="Enter name" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="GENDER">
            <select name = "gender" onChange = {this.onChange}>
            <option value="Other">OTHER</option>
            <option value="Male">MALE</option>
            <option value="Female">FEMALE</option>
          </select>
          </Form.Item>
          <Form.Item label="DOB">
            <input type = "date" name = "dob" required onChange = {this.onChange} ></input>
          </Form.Item>
          <Form.Item label="FATHER/HUSBAND NAME">
            <Input name = "fath_hus_name" placeholder="Fath or Hus name" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="PERSON WITH DISABILITY">
          <select name = "disability" onChange = {this.onChange}>
            <option value="yes">YES</option>
            <option value="no">NO</option>
          </select>
          </Form.Item>
          <Form.Item label="OFFICIAL MAIL">
            <Field
                type="text"
                className="form-control"
                name="official_mail"
                onChange={this.onChange}
                value={official_mail}
                component={renderField}
                validate={[ email ]}
                required
              />
          </Form.Item>
          <Form.Item label="PERSONAL MAIL">
            <Field
                type="text"
                className="form-control"
                name="personal_mail"
                onChange={this.onChange}
                value={personal_mail}
                component={renderField}
                validate={[ email ]}
              />
          </Form.Item>
          <Form.Item label="AADHAR">
            <Input type = "number" name = "aadhar" placeholder="Aadhar no"  onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="PAN">
            <Input type = "number" name = "pan" placeholder="Pan card no"  onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="MOBILE NO">
            <Input type = "number" name = "mobile_no" placeholder="Mobile" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="RESIDENCE PHONE NO">
            <Input type = "number" name = "residence_ph_no" placeholder="Residence" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="COMMUNITY">
          <select name = "community" onChange = {this.onChange}>
            <option value="Other community">OTHER COMMUNITY</option>
            <option value="Scheduled Tribe">SCHEDULED TRIBE</option>
            <option value="Scheduled Caste">SCHEDULED CASTE</option>
            <option value="Most Backward Community">MOST BACKWARD COMMUNITY</option>
            <option value="Backward Community">BACKWARD COMMUNITY</option>
          </select>
          </Form.Item>
          <Form.Item label="CASTE">
            <Input name = "caste" placeholder="Caste"  onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="INTERCOM NO 1">
            <Input type = "number" name = "intercom1" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="INTERCOM NO 2">
            <Input type = "number" name = "intercom2" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="RESIDENTIAL ADDRESS">
            <Input name = "res_address" placeholder="Address" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="PERMANENT ADDRESS">
            <Input name = "perm_address" placeholder="Address"  onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="WEBSITE">
            <Input type = "url" name = "website_url" placeholder="URL"  onChange = {this.onChange} />
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

CustomForm = connect(null,{ addStaffinfo })(CustomForm);

export default reduxForm({
  form: 'CustomForm'
})(CustomForm);