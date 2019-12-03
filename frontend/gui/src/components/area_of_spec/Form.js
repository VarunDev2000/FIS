import React from 'react';
import { Form, Input, Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { addSpecialization } from '../../actions/specialization';

class CustomForm extends React.Component {

  state = {
    type_form : null,
    redirect : false,
    area_name: '',
    mem: '',
    spec_mem_type: '',
}

static propTypes = {
  addSpecialization: PropTypes.func.isRequired
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
  this.setState({type_form: e.target.value});
}

onSubmit = e => {
  
  e.preventDefault();
  if(this.props.type === 'add' && this.state.type_form === 'spec')
  {
    const {area_name,spec_mem_type} = this.state;
    const spec_mem = {area_name,spec_mem_type};

    //console.log(spec_mem);
    this.props.addSpecialization(spec_mem);
    //this.props.history.push('/specialization');
    window.open("/specialization","_self");
  }

  else if(this.props.type === 'add' && this.state.type_form === 'mem')
  {
    const {mem,spec_mem_type} = this.state;
    const spec_mem = {mem,spec_mem_type}
    
    //console.log(spec_mem);
    this.props.addSpecialization(spec_mem);
    //this.props.history.push('/');
    window.open("/specialization","_self");
  }

  else{
  }
}

  render() {
    const spec_mem_type = this.state.type_form;
    return (
      <div>
        <CustomLayout>
        <Form onSubmit ={this.onSubmit}>

        <select name="spec_mem_type" defaultValue={'DEFAULT'} onChange = {this.dropdown}>
            <option value="DEFAULT" disabled> -- select an option -- </option>
            <option value="spec">SPECIALIZATION</option>
            <option value="mem">MEMBERSHIP</option>
        </select><br/><br/>

        {
        spec_mem_type === 'spec' ? (
          <div>
          <Form.Item label="AREA OF SPECIALIZATION">
          <Input name = "area_name" placeholder="Enter Specialization" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item>
          <Button type="primary" htmlType = "submit">{this.props.btnText}</Button>
          </Form.Item>
          </div>
        ) : (
        spec_mem_type === 'mem' ? (
          <div>
          <Form.Item label="MEMBERSHIPS IN PROFESSIONAL BODIES">
            <Input name = "mem" placeholder="Enter Membership" required onChange = {this.onChange} />
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


export default connect(null,{ addSpecialization })(CustomForm);