import React from 'react';
import { Descriptions,Form, Input, Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { getSpecialization,deleteSpecialization } from '../../actions/specialization';
import history from '../common/history'

class SpecEdit extends React.Component {

  state = {
    specialization : {},
    redirect : false,
    type_form : null,

    area_name: '',
    mem: '',
    spec_mem_type: '',
}

static propTypes = {
  specialization: PropTypes.array.isRequired,
  deleteSpecialization: PropTypes.func.isRequired,
}

delete = (e) => {
  //e.preventDefault();
  const id = e.target.id;
  var conf = window.confirm("Do you want to delete ?");
  if (conf === true) {
  this.props.deleteSpecialization(id);
  //history.push('/specialization/edit');

  window.open("/specialization/edit","_self");
  }
}


onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
}

editClick = (e) => {
      history.push(`/specialization/edit/${e.target.id}`);

      //window.open('/specialization/edit',"_self");
}

onSubmit = e => {
    history.push('/specialization')
}

componentDidMount()
{    
    this.props.getSpecialization();
}

/*
componentDidUpdate(prevProps) {
  if (prevProps.specialization !== this.props.specialization) {
    var n = 0,spec_count = 0,mem_count = 0;
    this.props.specialization.map(s_m =>
      (
        s_m.spec_mem_type === "spec" ? (spec_count++,n++) : (s_m.spec_mem_type === "mem" ? (mem_count++,n++) : (null))
      ));
      
      localStorage.setItem('n',n);
      localStorage.setItem('spec_count',spec_count);
      localStorage.setItem('mem_count',mem_count);
  }
}
*/

componentWillReceiveProps(props)
{
  var n = 0,spec_count = 0,mem_count = 0;
  props.specialization.map(s_m =>
    (
      s_m.spec_mem_type === "spec" ? (spec_count++,n++) : (s_m.spec_mem_type === "mem" ? (mem_count++,n++) : (null))
    ));
    
    localStorage.setItem('n',n);
    localStorage.setItem('spec_count',spec_count);
    localStorage.setItem('mem_count',mem_count);
}

  render() {
    var spec_count = localStorage.getItem('spec_count');
    var mem_count = localStorage.getItem('mem_count');
    console.log(spec_count);

    return (
        <CustomLayout>
        {
          spec_count > 0 ? (
          <div>
              <br/>
          <Descriptions title="SPECIALIZATION"></Descriptions>
          {
          this.props.specialization.map(spec => (
          spec.spec_mem_type === 'spec' ? (
          <div key = {spec.id}>
          <Form id = {spec.id} className="aos_form">
          <Form.Item>
            <div className = "row">
            <div className = "col-sm-10">
            <Input name = "area_name" placeholder="Enter Specialization" required defaultValue = {spec.area_name} disabled />
            </div>
            <div className = "col-sm-1">
            <Button id = {spec.id} type="primary" onClick={this.editClick}>Edit</Button>
            </div>
            <div className = "col-sm-1">
            <Button id = {spec.id} type="danger" onClick = {this.delete}>Delete</Button>
            </div>
            </div>
          </Form.Item>
          </Form>
          </div>
          ) : (null)
          ))
          }
          </div>
          ) : (null)
        }

        {
          mem_count > 0 ? (
          <div>
            <br/>
          <Descriptions title="MEMBERSHIP"></Descriptions>
          {
          this.props.specialization.map(spec => (
          spec.spec_mem_type === 'mem' ? (
          <div key = {spec.id}>
          <Form id = {spec.id} className="aos_form">
          <Form.Item>
            <div className = "row">
            <div className = "col-sm-10">
            <Input name = "area_name" placeholder="Enter Specialization" required defaultValue = {spec.mem} disabled />
            </div>
            <div className = "col-sm-1">
            <Button id = {spec.id} type="primary" onClick={this.editClick}>Edit</Button>
            </div>
            <div className = "col-sm-1">
            <Button id = {spec.id} type="danger" onClick = {this.delete}>Delete</Button>
            </div>
            </div>
          </Form.Item>
          </Form>
          </div>
          ) : (null)
          ))
          }
          </div>
          ) : (null)
          }
        
        {
          <Form.Item>
          <Button type="primary" onClick ={this.onSubmit}>OK</Button>
          </Form.Item>
        }
        </CustomLayout>
    );
  }
}



const mapStateToProps = state => ({
    specialization: state.specialization.specialization
});

export default connect(mapStateToProps,{ getSpecialization,deleteSpecialization })(SpecEdit);