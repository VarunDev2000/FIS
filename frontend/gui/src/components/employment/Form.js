import React from 'react';
import { Form, Input, Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { addEmployment } from '../../actions/employment';

class CustomForm extends React.Component {

  state = {
    emp_form : null,
    univ_emp_form : null,
    redirect : false,
    designation: '',
    from_date: '',
    to_date: '',
    department: '',
    campus: '',
    present_pay: '',
    nature_of_app: '',
    position: '',
    position_type: '',
    institution: '',
    years: '',
    exp_type: 'industry',
    emp_type: '',
}

static propTypes = {
  addEmployment: PropTypes.func.isRequired
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
  this.setState({emp_form: e.target.value});
}

position_dropdown = e => {
  this.setState({
    [e.target.name]: e.target.value
  });

  this.setState({univ_emp_form: e.target.value});
}


onSubmit = e => {
  
  e.preventDefault();
  if(this.state.emp_form == 'univ')
  {
    console.log(this.state.univ_emp_form);
    if(this.state.univ_emp_form == "present")
    {
      const {designation,from_date,department,campus,present_pay,nature_of_app,position_type,emp_type} = this.state;
    
      const emp_info = {designation,from_date,department,campus,present_pay,nature_of_app,position_type,emp_type};

          
      console.log(emp_info);
      this.props.addEmployment(emp_info);
    }

    else if(this.state.univ_emp_form == "prev")
    {
      const {designation,from_date,to_date,department,campus,present_pay,nature_of_app,position_type,emp_type} = this.state;
    
      const emp_info = {designation,from_date,to_date,department,campus,present_pay,nature_of_app,position_type,emp_type};

          
      console.log(emp_info);
      this.props.addEmployment(emp_info);
    }

    else if(this.state.univ_emp_form == "present_add" || this.state.univ_emp_form == "prev_add")
    {
      const {department,position,position_type,emp_type} = this.state;
    
      const emp_info = {department,position,position_type,emp_type};

          
      console.log(emp_info);
      this.props.addEmployment(emp_info);
    }
    
  }
    else if(this.state.emp_form == "oth")
    {
      const {designation,institution,years,emp_type,exp_type} = this.state;
    
      const emp_info = {designation,institution,years,emp_type,exp_type};

          
      console.log(emp_info);
      this.props.addEmployment(emp_info);
    }

  else{
    console.log("submit");
  }
}

  render() {
    const emp = this.state.emp_form;
    const pos = this.state.univ_emp_form;

    return (
      <div>
      <CustomLayout>
      <Form onSubmit ={this.onSubmit}>

      <select name="emp_type" onChange = {this.dropdown}>
          <option disabled selected value> -- select an option -- </option>
          <option value="univ">UNIVERSITY EMPLOYMENT DETAILS</option>
          <option value="oth">OTHER EMPLOYMENT DETAILS</option>
      </select><br/><br/>

      {
      emp == 'univ' ? (
        <div>
        <select name="position_type" onChange = {this.position_dropdown}>
          <option disabled selected value> -- select an option -- </option>
          <option value="present">PRESENT POSITION</option>
          <option value="prev">PREVIOUS POSITION</option>
          <option value="present_add">PRESENT ADDITIONAL RESPONSIBILITY</option>
          <option value="prev_add">PREVIOUS ADDITIONAL RESPONSIBILITY</option>
        </select><br/><br/>
        {
        pos == "present" ? (

          <div>
          <Form.Item label="DESIGNATION">
          <Input name = "designation" placeholder="Enter Designation" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="FROM">
            <input type = "date" name = "from_date" required onChange = {this.onChange} ></input>
          </Form.Item>
          <Form.Item label="DEPARTMENT/CENTRE">
            <Input name = "department" placeholder="Enter Department" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="CAMPUS">
            <Input name = "campus" placeholder="Campus Name" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="PRESENT PAY">
            <Input name = "present_pay" placeholder="Present Pay" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="NATURE OF APPOINTMENT">
            <Input name = "nature_of_app" placeholder="Nature of Appointment" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType = "submit">{this.props.btnText}</Button>
          </Form.Item>
          </div>

        ) : (pos == "prev" ? (

          <div>
          <Form.Item label="DESIGNATION">
          <Input name = "designation" placeholder="Enter Designation" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="FROM">
            <input type = "date" name = "from_date" required onChange = {this.onChange} ></input>
          </Form.Item>
          <Form.Item label="TO">
            <input type = "date" name = "to_date" required onChange = {this.onChange} ></input>
          </Form.Item>
          <Form.Item label="DEPARTMENT/CENTRE">
            <Input name = "department" placeholder="Enter Department" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="CAMPUS">
            <Input name = "campus" placeholder="Campus Name" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="PRESENT PAY">
            <Input name = "present_pay" placeholder="Present Pay" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="NATURE OF APPOINTMENT">
            <Input name = "nature_of_app" placeholder="Nature of Appointment" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType = "submit">{this.props.btnText}</Button>
          </Form.Item>
          </div>

        ) : (pos == "present_add" || pos == "prev_add" ? 
        (

          <div>
          <Form.Item label="POSITION">
          <Input name = "position" placeholder="Enter position" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="DEPARTMENT/CENTRE">
            <Input name = "department" placeholder="Enter Department" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType = "submit">{this.props.btnText}</Button>
          </Form.Item>
          </div>

        )  : (null)))
        }
       
        
        </div>
      ) : (
      emp == 'oth' ? (

        <div>
          <Form.Item label="EXPERIENCE TYPE">
          <select name="exp_type" required onChange = {this.onChange}>
            <option value="industry">INDUSTRY EXPERIENCE</option>
            <option value="academics">ACADEMICS/RESEARCH EXPERIENCE</option>
          </select>
          </Form.Item>
          <Form.Item label="DESIGNATION">
          <Input name = "designation" placeholder="Enter designation" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="INSTITUTION">
            <Input name = "institution" placeholder="Enter institution" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="YEARS">
            <Input name = "years" placeholder="Enter years" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType = "submit">{this.props.btnText}</Button>
          </Form.Item>
        </div>

      ) : (null)
      ) 
      }

      </Form>
      </CustomLayout>
    </div>
    );
  }
}


export default connect(null,{ addEmployment })(CustomForm);