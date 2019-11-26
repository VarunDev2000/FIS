import React from 'react';
import { Form, Input, Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { addPublication } from '../../actions/publication';

class CustomForm extends React.Component {

  state = {
    redirect : false,
    title: '',
    level: '',
    year: ''
}

static propTypes = {
  addPublication: PropTypes.func.isRequired
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
  const {title,level,year} = this.state;

  const publi_info = {title,level,year};
    
    console.log(publi_info);
    this.props.addPublication(publi_info);
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
          <Form.Item label="TITLE">
            <Input name = "title" placeholder="Enter Title" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="LEVEL">
            <Input name = "level" placeholder="Enter Level" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="YEAR">
            <Input name = "year" placeholder="Enter Year" required onChange = {this.onChange} />
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


export default connect(null,{ addPublication })(CustomForm);