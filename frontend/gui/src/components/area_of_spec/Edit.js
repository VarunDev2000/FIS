import React from 'react';
import { Form, Input, Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { editSpecialization,getSpecialization,deleteSpecialization } from '../../actions/specialization';

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
  editSpecialization: PropTypes.func.isRequired,
  specialization: PropTypes.array.isRequired,
  deleteSpecialization: PropTypes.func.isRequired,
}

dropdown = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    this.setState({type_form: e.target.value});
  }


delete = (id,e) => {
    //e.preventDefault();
    var conf = window.confirm("Do you want to delete ?");
    if (conf === true) {
      this.props.deleteSpecialization(id);
      //window.open('/specialization',"_self");
      window.location.reload();
      //this.props.history.push('/specialization');
    } 
}


onChange = (id,e) => {
    
    if(this.state.type_form === 'spec')
    {
      var area_name = e.target.value;
      var spec_mem_type = 'spec';
      const sm = {area_name,spec_mem_type};

      this.setState({
          spec_mem : sm,
          id : id
      })
  
      console.log(sm);
      
      //this.props.history.push('/specialization');
      //window.open("/specialization","_self");
    }
  
    else if(this.state.type_form === 'mem')
    {
      const {mem,spec_mem_type} = this.state;
      const spec_mem = {mem,spec_mem_type}
      
      console.log(spec_mem);
      this.props.editSpecialization(spec_mem,id);
      //this.props.history.push('/');
      //window.open("/specialization","_self");
    }
  
    else{
      console.log("submit");
    }
}

editClick = e => {
    this.props.editSpecialization(this.state.spec_mem,this.state.id);
    this.props.getSpecialization();
    window.location.reload();
}

onSubmit = e => {
    window.open("/specialization","_self");
}

componentDidMount()
{    
    this.props.getSpecialization();
}

componentDidUpdate() 
{
    this.props.getSpecialization();
}

  render() {
    const spec_mem_type = this.state.type_form;
    var spec_count = 0;
    return (
        <div>
        <CustomLayout>
        <Form>

        <select name="spec_mem_type" onChange = {this.dropdown}>
            <option disabled selected value> -- select an option -- </option>
            <option value="spec">SPECIALIZATION</option>
            <option value="mem">MEMBERSHIP</option>
        </select><br/><br/>

        {
        spec_mem_type === 'spec' ? (
        <div>
        {
          this.props.specialization.map(spec => (
          spec.spec_mem_type === 'spec' ? (
          spec_count++,

          <div>
          <Form.Item>
            <div class = "row">
            <div class = "col-sm-10">
            <Input name = "area_name" placeholder="Enter Specialization" required defaultValue = {spec.area_name} onChange = {this.onChange.bind(this,spec.id)} />
            </div>
            <div class = "col-sm-1">
            <Button variant="success" htmlType = "submit" onClick = {this.editClick}>Update</Button>
            </div>
            <div class = "col-sm-1">
            <Button type="danger" htmlType = "submit" onClick = {this.delete.bind(this,spec.id)}>Delete</Button>
            </div>
            </div>
          </Form.Item>
          </div>
          ) : (null)
          ))
        }
        {
        spec_count > 0 ? (
          <Form.Item>
          <Button type="primary" onClick ={this.onSubmit}>Submit</Button>
          </Form.Item>
        ) : (null)
        }
          </div>
        )
         : (
        spec_mem_type === 'mem' ? (
          <div>
          <Form.Item>
            <Input name = "mem" placeholder="Enter Membership" required onChange = {this.onChange} />
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



const mapStateToProps = state => ({
    specialization: state.specialization.specialization
});

export default connect(mapStateToProps,{ editSpecialization,getSpecialization,deleteSpecialization })(SpecEdit);