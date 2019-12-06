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
    year: '',
    pdf: '',
    file : null,
    disabled : false,
}

static propTypes = {
  addPublication: PropTypes.func.isRequired
}

onChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
}

onFileChange = e => {
  this.setState({
    file : e.target.files[0]
  });
}


onSubmit = (e) => {
  
  this.setState({
    disabled : true
  })
  e.preventDefault();

  let form_data = new FormData();
  form_data.append('pdf', this.state.file, this.state.file.name);
  form_data.append('title', this.state.title);
  form_data.append('level', this.state.level);
  form_data.append('year', this.state.year);
  
  //display values in console
  /* 
  for (var pair of form_data.entries()) {
    console.log(pair[0]+ ' : ' + pair[1]); 
  }

  for (var value of form_data.values()) {
    console.log(value);
  }
  */

  this.props.addPublication(form_data);

  setTimeout( function(){
    window.open("/publication","_self")
  }, 1000 );
};

/*
onSubmit = e => {
  
  e.preventDefault();
  if(this.props.type == 'add')
  {
  const {title,level,year,pdf} = this.state;

  const publi_info = {title,level,year,pdf};
    
    console.log(publi_info);
    this.props.addPublication(publi_info);
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
          <Form.Item label="TITLE">
            <Input name = "title" placeholder="Enter Title" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="LEVEL">
            <Input name = "level" placeholder="Enter Level" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="YEAR">
            <Input name = "year" placeholder="Enter Year" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="FILE">
            <input type="file" name="pdf" accept="application/pdf" required onChange = {this.onFileChange}></input>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType = "submit" disabled = {this.state.disabled}>{this.props.btnText}</Button>
          </Form.Item>
        </Form>
        </CustomLayout>
      </div>
    );
  }
}


export default connect(null,{ addPublication })(CustomForm);