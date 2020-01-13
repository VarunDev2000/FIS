import React from 'react';
import { Form, Input, Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { addExp } from '../../actions/experience_abroad';

class CustomForm extends React.Component {

  state = {
    redirect : false,
    nature_of_assignment: '',
    from_date: '',
    to_date: '',
    institution: '',
    country : '',
    purp_of_visit: 'Others',
    funding_agency: '',
}

static propTypes = {
  addExp: PropTypes.func.isRequired
}

onChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
  console.log(e.target.value);
}


onSubmit = e => {

  //e.preventDefault();
    
  if(this.props.type === 'add')
  {
  const {nature_of_assignment,from_date,to_date,institution,country,purp_of_visit,funding_agency} = this.state;

  const exp = {nature_of_assignment,from_date,to_date,institution,country,purp_of_visit,funding_agency};
    
    console.log(exp);
    this.props.addExp(exp);
  }

  else{
    console.log("submit");
  }
}

  render() {
    return (
      <div>
        <CustomLayout>
        <Form onSubmit ={this.onSubmit}>
          <Form.Item label="* NATURE OF ASSIGNMENT">
            <Input name = "nature_of_assignment" placeholder="Enter Nature of Assignment" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="* DURATION">
            <label>From</label>{'\u00A0'}{'\u00A0'}
            <input type = "date" required name="from_date" onChange={this.onChange}></input>
            {'\u00A0'}{'\u00A0'}
            <label>To</label>{'\u00A0'}{'\u00A0'}           
            <input type = "date" required name="to_date" onChange={this.onChange}></input>
          </Form.Item>
          <Form.Item label="* INSTITUTION/ORGANIZATION">
            <Input name = "institution" placeholder="Enter Institution Name" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="* COUNTRY">
            <Input name = "country" placeholder="Country Name" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="* PURPOSE OF VISIT ">
            <select name="purp_of_visit" onChange = {this.onChange}>
              <option value="Others">Others</option>
              <option value="Paper Presentation in Conference">Paper Presentation in Conference</option>
              <option value="Chairing the Session in Conference">Chairing the Session in Conference</option>
              <option value="Post Doctral Research">Post Doctral Research</option>
              <option value="Joint Research Project">Joint Research Project</option>
              <option value="Expert Visit">Expert Visit</option>
              <option value="Visiting Faculty">Visiting Faculty</option>
              <option value="Visiting Lab Departments/University">Visiting Lab Departments/University</option>
              <option value="University Exchange Programme">University Exchange Programme</option>
            </select>
          </Form.Item>
          <Form.Item label="* FUNDING AGENCY ">
            <Input name = "funding_agency" placeholder="Funding Agency Name" required onChange = {this.onChange} />
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


export default connect(null,{ addExp })(CustomForm);