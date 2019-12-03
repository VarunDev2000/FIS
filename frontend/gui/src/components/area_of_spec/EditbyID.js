import React from 'react';
import { Form, Input, Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { editSpecialization,getSpecializationbyID } from '../../actions/specialization';

class SpecEditbyID extends React.Component {

  state = {
    specialization : {},
    spec : {},
    redirect : false,
    type_form : null,

    area_name: '',
    mem: '',
    spec_mem_type: '',
}

static propTypes = {
  editSpecialization: PropTypes.func.isRequired,
  specialization: PropTypes.object.isRequired,
}


onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
}

onSubmit = (e) => {
      e.preventDefault();

    const id = e.target.id;
    var spec = {};

    if(this.state.spec_mem_type === "spec")
    {
    const {area_name,spec_mem_type} = this.state;
    spec = {area_name,spec_mem_type}
    this.props.editSpecialization(spec,id);
    }

    else
    {
    const {mem,spec_mem_type} = this.state;
    spec = {mem,spec_mem_type}
    this.props.editSpecialization(spec,id);
    }

      //history.push('/specialization/edit');

    window.open('/specialization/edit',"_self");
}

setStates(props)
{
    if(props.specialization.spec_mem_type === 'spec')
    {
        this.setState({
            area_name : props.specialization.area_name,
            spec_mem_type : props.specialization.spec_mem_type
        })
    }

    else{
        this.setState({
            mem : props.specialization.mem,
            spec_mem_type : props.specialization.spec_mem_type
        })
    }
}

componentDidMount()
{    
    const id = this.props.match.params.id;
    this.props.getSpecializationbyID(id);
}

componentDidUpdate(prevProps) {
  if (prevProps.specialization !== this.props.specialization) {
    this.setStates(this.props);
    this.setState({
      spec : this.props.specialization
    })
  }
}


  render() {
    const id = this.props.match.params.id;
    var spec = this.state.spec;


    return (
        <CustomLayout>
        {
        id != null ? (
          spec.spec_mem_type === 'spec' ? (
          <div key = {spec.id}>
          <Form id = {spec.id} onSubmit={this.onSubmit}>
          <Form.Item>
            <Input name = "area_name" placeholder="Enter Specialization" required defaultValue = {spec.area_name} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item>
            <Button id = {spec.id} type="primary" htmlType = "submit">OK</Button>
          </Form.Item>
          </Form>
          </div>
          ) : (
            <div key = {spec.id}>
            <Form id = {spec.id} onSubmit={this.onSubmit}>
            <Form.Item>
              <Input name = "mem" placeholder="Enter Membership" required defaultValue = {spec.mem} onChange = {this.onChange} />
            </Form.Item>
            <Form.Item>
              <Button id = {spec.id} type="primary" htmlType = "submit">OK</Button>
            </Form.Item>
            </Form>
            </div>
          )
        ) : (null)
        }
        </CustomLayout>
    );
  }
}



const mapStateToProps = state => ({
    specialization: state.specialization.specialization_by_id
});

export default connect(mapStateToProps,{ editSpecialization,getSpecializationbyID })(SpecEditbyID);