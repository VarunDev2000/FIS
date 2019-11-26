import React from 'react';
import { Form, Input, Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { addLecture } from '../../actions/invited_lectures';

class CustomForm extends React.Component {

  state = {
    redirect : false,
    level: 'international',
    programme: '',
    institution: '',
    place: '',
    date: '',
}

static propTypes = {
  addLecture: PropTypes.func.isRequired
}

onChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
  console.log(e.target.value);
}


onSubmit = e => {
  
  if(this.props.type == 'add')
  {
  const {level,topic,programme,institution,place,date} = this.state;

  const lec = {level,topic,programme,institution,place,date};
    
    console.log(lec);
    this.props.addLecture(lec);
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
          <Form.Item label="LEVEL">
          <select name="level" onChange = {this.onChange}>
            <option value="international">INTERNATIONAL</option>
            <option value="national">NATIONAL</option>
          </select>
          </Form.Item>
          <Form.Item label="TOPIC">
            <Input name = "topic" placeholder="Enter Topic" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="PROGRAMME">
            <Input name = "programme" placeholder="Programme name" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="INSTITUTION/ORGANIZATION">
            <Input name = "institution" placeholder="Enter Institution Name" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="PLACE ">
            <Input name = "place" placeholder="Enter Place Name" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="DATE">
            <input type = "date" name = "date" required onChange = {this.onChange} ></input>
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


export default connect(null,{ addLecture })(CustomForm);