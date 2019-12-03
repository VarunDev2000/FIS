import React from 'react';
import { Form, Input, Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { addProject } from '../../actions/project';

class CustomForm extends React.Component {

  state = {
    pro_form : null,
    redirect : false,
    pro_title: '',
    funding_agent: '',
    amt: '',
    pro_type: '',
    pdf: '',
    file : null,
}

static propTypes = {
  addProject: PropTypes.func.isRequired
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
  this.setState({pro_form: e.target.value});
}


onFileChange = e => {
  this.setState({
    file : e.target.files[0]
  });
}


onSubmit = (e) => {
  //e.preventDefault();

  if(this.props.type === 'add' && (this.state.pro_form === 'on_going' || this.state.pro_form === 'completed'))
  {
  let form_data = new FormData();
  form_data.append('pdf', this.state.file, this.state.file.name);
  form_data.append('pro_title', this.state.pro_title);
  form_data.append('funding_agent', this.state.funding_agent);
  form_data.append('amt', this.state.amt);
  form_data.append('pro_type', this.state.pro_type);
  
  //display values in console
  for (var pair of form_data.entries()) {
    console.log(pair[0]+ ' : ' + pair[1]); 
  }

  this.props.addProject(form_data);
  }

  else{
    console.log("submit");
  }

};

/*
onSubmit = e => {
  
  e.preventDefault();
  if(this.props.type === 'add' && (this.state.pro_form === 'on_going' || this.state.pro_form === 'completed'))
  {
    const {pro_title,funding_agent,amt,pro_type} = this.state;

  const pro_info = {pro_title,funding_agent,amt,pro_type}
    
  console.log(pro_info);
    this.props.addProject(pro_info);
  }

  else{
    console.log("submit");
  }
}
*/

  render() {
    return (
      <div>
        <CustomLayout>
        <Form onSubmit ={this.onSubmit}>

        <select name="pro_type" onChange = {this.dropdown}>
            <option disabled selected value> -- select an option -- </option>
            <option value="on_going">ON GOING</option>
            <option value="completed">COMPLETED</option>
        </select><br/><br/>
          <div>
          <Form.Item label="PROJECT TITLE">
          <Input name = "pro_title" placeholder="Enter Project Title" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="FUNDING AGENT">
          <Input name = "funding_agent" placeholder="Enter Funding Agent" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="AMOUNT">
          <Input name = "amt" placeholder="Enter Amount" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="FILE">
            <input type="file" name="pdf" accept="application/pdf" required onChange = {this.onFileChange}></input>
          </Form.Item>
          <Form.Item>
          <Button type="primary" htmlType = "submit">{this.props.btnText}</Button>
          </Form.Item>
          </div>
        </Form>
        </CustomLayout>
      </div>
    );
  }
}


export default connect(null,{ addProject })(CustomForm);