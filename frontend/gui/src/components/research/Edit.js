import React from 'react';
import { Form, Input, Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { editResearch,getResearchbyID,deleteResearch } from '../../actions/research';


class ResearchEdit extends React.Component {

  state = {
    research:{},
    res:{},
    redirect : false,

    reg_no : '',
    name_of_scholar : '',
    title : '',
    status : '',
    capacity : '',
}

static propTypes = {
  editResearch: PropTypes.func.isRequired,
  research: PropTypes.object.isRequired,
  deleteResearch: PropTypes.func.isRequired,
}

delete = (e) => {
  e.preventDefault();
  const id = this.props.match.params.id;
  var conf = window.confirm("Do you want to delete ?");
  if (conf === true) {
    this.props.deleteResearch(id);
    window.open('/research',"_self");
  } 
}

onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
}


onSubmit = (e) => {

  e.preventDefault();
  const id = this.props.match.params.id;

  const {reg_no,name_of_scholar,title,status,capacity} = this.state;

  const res = {reg_no,name_of_scholar,title,status,capacity}

  this.props.editResearch(res,id);

  window.open('/research',"_self");
};


setStates(props)
{
    this.setState({
      reg_no : props.research.reg_no,
      name_of_scholar : props.research.name_of_scholar,
      title : props.research.title,
      status : props.research.status,
      capacity : props.research.capacity,
    })
}


componentDidMount()
{    
  const id = this.props.match.params.id;
  this.props.getResearchbyID(id);
}


componentWillReceiveProps(props) {
    this.setStates(props);
    this.setState({
      res : props.research
    })
}

  render() {
    var res = this.state.res;
    var res_len = Object.keys(res).length;

    return (
      <div>
        <CustomLayout>
        {
        res_len > 0 ? (
        <Form key = {res.id} onSubmit ={this.onSubmit}>
        <div align="right">
          <Button type="danger" htmlType = "submit" onClick = {this.delete}>Delete</Button>
        </div>
          <Form.Item label="STATUS">
          <select name="status" defaultValue={this.state.status} onChange = {this.onChange}>
            <option value="on_going">ONGOING</option>
            <option value="completed">COMPLETED</option>
          </select>
          </Form.Item>
          <Form.Item label="REGISTER NO">
            <Input name = "reg_no" required defaultValue={this.state.reg_no} placeholder="Enter Register No" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="NAME OF SCHOLAR">
            <Input name = "name_of_scholar" defaultValue={this.state.name_of_scholar} placeholder="Enter Scholar Name"  onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="TITLE">
            <Input name = "title" required defaultValue={this.state.title} placeholder="Enter Title" onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="CAPACITY">
            <select name="capacity"  defaultValue={this.state.capacity} onChange = {this.onChange}>
              <option value="Supervisor">Supervisor</option>
              <option value="Joint-Supervisor">Joint-Supervisor</option>
            </select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType = "submit" >Submit</Button>
          </Form.Item>
        </Form>
        ) : (<h1></h1>)
        }
        </CustomLayout>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    research: state.research.research_by_id
});


export default connect(mapStateToProps,{ editResearch,getResearchbyID,deleteResearch })(ResearchEdit);