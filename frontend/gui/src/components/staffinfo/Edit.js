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
      window.open('/',"_self");
    } 
}


onSubmit = e => {
  
  e.preventDefault();
  const id = this.props.match.params.id;

  const {name,gender,dob,fath_hus_name,official_mail,personal_mail,aadhar,
    pan,mobile_no,residence_ph_no,caste,community,res_address,perm_address,
    website_url} = this.state;

  const s_info = {name,gender,dob,fath_hus_name,official_mail,personal_mail,aadhar,
    pan,mobile_no,residence_ph_no,caste,community,res_address,perm_address,
    website_url};
    
    console.log(s_info);
    this.props.editStaffinfo(s_info,id);
    window.open('/',"_self");
    //history.push('/');
}

    setStates(props)
    {
      this.setState({
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
        website_url : props.generalinfo.website_url
      })
    }

    componentDidMount() {
      const id = this.props.match.params.id;
      this.props.getStaffinfobyID(id);
    }

    componentDidUpdate(prevProps) {
      if (prevProps.generalinfo !== this.props.generalinfo) {
        this.setStates(this.props);
        this.setState({
          g_info : this.props.generalinfo
        })
      }
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

      </div>
      ) : (<h1><center>ERROR!</center></h1>)
      }
      </CustomLayout>
    );
  }
}


const mapStateToProps = state => ({
    generalinfo: state.generalinfo.generalinfo_by_id
});

export default connect(mapStateToProps,{ editStaffinfo,getStaffinfobyID,deleteStaffinfo })(Edit);
    