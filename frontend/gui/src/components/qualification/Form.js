import React from 'react';
import { Form, Input, Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { addQualification } from '../../actions/qualification';

class CustomForm extends React.Component {

  state = {
    deg_form : null,
    redirect : false,
    level: '',
    degree: '',
    branch: '',
    institution: '',
    university: '',
    duration: '',
    class_obtained: '',
    title_of_thesis: '',
    research_area: '',
    faculty: '',
    department: '',
    viva: '',
    degree_type: '',
}

static propTypes = {
  addQualification: PropTypes.func.isRequired
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
  this.setState({deg_form: e.target.value});
}

onSubmit = e => {
  
  e.preventDefault();
  if(this.props.type === 'add' && this.state.deg_form === 'ug_pg')
  {
    const {level,degree,branch,institution,university,duration,class_obtained,degree_type} = this.state;

    const quali = {level,degree,branch,institution,university,duration,class_obtained,degree_type}
    
    console.log(quali);
    this.props.addQualification(quali);
    //this.props.history.push('/qualification');
    window.open('/qualification',"_self");
  }

  else if(this.props.type === 'add' && this.state.deg_form === 'research')
  {
    const {degree,title_of_thesis,research_area,faculty,department,institution,university,duration,viva,degree_type} = this.state;

    const quali = {degree,title_of_thesis,research_area,faculty,department,institution,university,duration,viva,degree_type}
    
    console.log(quali);
    this.props.addQualification(quali);
    //this.props.history.push('/qualification');
    window.open('/qualification',"_self");
  }

  else{
    console.log("submit");
  }
}

  render() {
    const degreetype = this.state.deg_form;
    return (
      <div>
        <CustomLayout>
        <Form onSubmit ={this.onSubmit}>

        <select name="degree_type" defaultValue={'DEFAULT'} onChange = {this.dropdown}>
            <option disabled value="DEFAULT"> -- select an option -- </option>
            <option value="ug_pg">UG/PG</option>
            <option value="research">RESEARCH</option>
        </select><br/><br/>

        {
        degreetype === 'ug_pg' ? (
          <div>
          <Form.Item label="LEVEL">
          <Input name = "level" placeholder="Enter Level" required  onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="DEGREE">
            <Input name = "degree" placeholder="Enter Degree" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="BRANCH">
          <Input name = "branch" placeholder="Enter Branch" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="INSTITUTION">
            <Input name = "institution" placeholder="Institution" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="UNIVERSITY">
            <Input name = "university" placeholder="University" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="DURATION">
            <Input name = "duration" placeholder="xxxx TO yyyy" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="CLASS OBTAINED">
            <Input name = "class_obtained" placeholder="Enter Class" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item>
          <Button type="primary" htmlType = "submit">{this.props.btnText}</Button>
          </Form.Item>
          </div>
        ) : (
        degreetype === 'research' ? (
          <div>
          <Form.Item label="DEGREE">
            <Input name = "degree" placeholder="Enter Degree" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="TITLE OF THESIS">
          <Input name = "title_of_thesis" placeholder="Title of thesis" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="RESEARCH AREA">
          <Input name = "research_area" placeholder="Enter Your Research Area" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="FACULTY">
            <Input name = "faculty" placeholder="Enter Faculty" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="DEPARTMENT">
            <Input name = "department" placeholder="Enter Department" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="INSTITUTION">
            <Input name = "institution" placeholder="Institution" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="UNIVERSITY">
            <Input name = "university" placeholder="University" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="DURATION">
            <Input name = "duration" placeholder="xxxx TO yyyy" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="VIVA">
            <Input name = "viva" placeholder="Viva" required onChange = {this.onChange} />
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


export default connect(null,{ addQualification })(CustomForm);