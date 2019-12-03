import React from 'react';
import { Form, Input, Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { addCSW } from '../../actions/csw';

class CustomForm extends React.Component {

  state = {
    csw_form : null,
    redirect : false,
    title: '',
    type_name: '',
    level: '',
    country: '',
    csw_type: '',
    pdf: '',
    file : null,
}

static propTypes = {
  addCSW: PropTypes.func.isRequired
}

onChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
}

dropdown = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
  this.setState({csw_form: e.target.value});
}

onFileChange = e => {
  this.setState({
    file : e.target.files[0]
  });
}


onSubmit = (e) => {
  //e.preventDefault();

  if(this.props.type === 'add' && (this.state.csw_form === 'organized' || this.state.csw_form === 'cha_co-cha'))
  {
  let form_data = new FormData();
  form_data.append('pdf', this.state.file, this.state.file.name);
  form_data.append('title', this.state.title);
  form_data.append('type_name', this.state.type_name);
  form_data.append('level', this.state.level);
  form_data.append('csw_type', this.state.csw_type);
  
  var pair;
  //display values in console
  for (pair of form_data.entries()) {
    console.log(pair[0]+ ' : ' + pair[1]); 
  }

  this.props.addCSW(form_data);
  }

  else if(this.props.type === 'add' && this.state.csw_form === 'paper')
  {
    let form_data = new FormData();
    form_data.append('pdf', this.state.file, this.state.file.name);
    form_data.append('title', this.state.title);
    form_data.append('type_name', this.state.type_name);
    form_data.append('country', this.state.country);
    form_data.append('csw_type', this.state.csw_type);
    
    //display values in console
    for (pair of form_data.entries()) {
      console.log(pair[0]+ ' : ' + pair[1]); 
    }
  
    this.props.addCSW(form_data);
  }

  else{
    console.log("submit");
  }

};

/*
onSubmit = e => {
  
  e.preventDefault();
  if(this.props.type === 'add' && (this.state.csw_form === 'organized' || this.state.csw_form === 'cha_co-cha'))
  {
    const {title,type_name,level,csw_type} = this.state;

  const csw_info = {title,type_name,level,csw_type}
    
  console.log(csw_info);
    this.props.addCSW(csw_info);
  }

  else if(this.props.type === 'add' && this.state.csw_form === 'paper')
  {
    const {title,type_name,country,csw_type} = this.state;

    const csw_info = {title,type_name,country,csw_type}

    console.log(csw_info);
    this.props.addCSW(csw_info);
  }

  else{
    console.log("submit");
  }
}
*/
  render() {
    const cswtype = this.state.csw_form;
    return (
      <div>
        <CustomLayout>
        <Form onSubmit ={this.onSubmit}>

        <select name="csw_type" onChange = {this.dropdown}>
            <option disabled selected value> -- select an option -- </option>
            <option value="organized">ORGANIZED</option>
            <option value="cha_co-cha">CHAIRED/CO-CHAIRED</option>
            <option value="paper">PAPER PRESENTED</option>
        </select><br/><br/>

        {
        cswtype === 'organized' || cswtype === 'cha_co-cha' ? (
          <div>
          <Form.Item label="TITLE">
          <Input name = "title" placeholder="Enter Title" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="TYPE">
          <Input name = "type_name" placeholder="Enter Type Name" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="LEVEL">
          <Input name = "level" placeholder="Enter Level" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="FILE">
            <input type="file" name="pdf" accept="application/pdf" required onChange = {this.onFileChange}></input>
          </Form.Item>
          <Form.Item>
          <Button type="primary" htmlType = "submit">{this.props.btnText}</Button>
          </Form.Item>
          </div>
        ) : (
        cswtype === 'paper' ? (
          <div>
          <Form.Item label="TITLE">
          <Input name = "title" placeholder="Enter Title" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="TYPE">
          <Input name = "type_name" placeholder="Enter Type Name" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="COUNTRY">
          <Input name = "country" placeholder="Enter Country Name" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="FILE">
            <input type="file" name="pdf" accept="application/pdf" required onChange = {this.onFileChange}></input>
          </Form.Item>
          <Form.Item>
          <Button type="primary" htmlType = "submit">{this.props.btnText}</Button>
          </Form.Item>
          </div>
        ) : (
          null
        )) 
        }

        </Form>
        </CustomLayout>
      </div>
    );
  }
}


export default connect(null,{ addCSW })(CustomForm);