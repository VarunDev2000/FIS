import React from 'react';
import { Form, Input, Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { addResearch } from '../../actions/research';


class CustomForm extends React.Component {

  state = {
    reg_no : '',
    name_of_scholar : '',
    title : '',
    status : 'on_going',
    capacity : 'Supervisor',
}

static propTypes = {
  addResearch: PropTypes.func.isRequired
}

onChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
}


onSubmit = (e) => {

  e.preventDefault();

  const {reg_no,name_of_scholar,title,status,capacity} = this.state;

  const res = {reg_no,name_of_scholar,title,status,capacity}

  this.props.addResearch(res);
  window.open('/research',"_self");
    
};

  render() {

    return (
      <div>
        <CustomLayout>
        <Form onSubmit ={this.onSubmit}>
          <Form.Item label="REGISTER NO">
            <Input name = "reg_no" required placeholder="Enter Register No" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="NAME OF SCHOLAR">
            <Input name = "name_of_scholar" placeholder="Enter Scholar Name"  onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="TITLE">
            <Input name = "title" required placeholder="Enter Title" onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="STATUS">
          <select name="status"  onChange = {this.onChange}>
            <option value="on_going">ONGOING</option>
            <option value="completed">COMPLETED</option>
          </select>
          </Form.Item>
          <Form.Item label="CAPACITY">
            <select name="capacity"  onChange = {this.onChange}>
              <option value="Supervisor">Supervisor</option>
              <option value="Joint-Supervisor">Joint-Supervisor</option>
            </select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType = "submit" >{this.props.btnText}</Button>
          </Form.Item>
        </Form>
        </CustomLayout>
      </div>
    );
  }
}


export default connect(null,{ addResearch })(CustomForm);