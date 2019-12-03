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
    purp_of_visit: '',
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
          <Form.Item label="NATURE OF ASSIGNMENT">
            <Input name = "nature_of_assignment" placeholder="Enter Nature of Assignment" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="FROM DATE">
            <input type = "date" name = "from_date" required onChange = {this.onChange} ></input>
          </Form.Item>
          <Form.Item label="TO DATE">
            <input type = "date" name = "to_date" required onChange = {this.onChange} ></input>
          </Form.Item>
          <Form.Item label="INSTITUTION/ORGANIZATION">
            <Input name = "institution" placeholder="Enter Institution Name" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="COUNTRY">
            <Input name = "country" placeholder="Country Name" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="PURPOSE OF VISIT ">
            <Input name = "purp_of_visit" placeholder="Enter Purpose of Visit" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="FUNDING AGENCY ">
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