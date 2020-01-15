import React from 'react';
import { Form, Input, Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { editExp,getExpbyID,deleteExp } from '../../actions/experience_abroad';


class ExpEdit extends React.Component {

  state = {
    experience:{},
    exp:{},
    redirect : false,
    disabled : false,

    nature_of_assignment: '',
    from_date: '',
    to_date: '',
    institution: '',
    country : '',
    purp_of_visit: '',
    funding_agency: '',
}

static propTypes = {
  editExp: PropTypes.func.isRequired,
  experience: PropTypes.object.isRequired,
  deleteExp: PropTypes.func.isRequired,
}

delete = (e) => {
  e.preventDefault();
  const id = this.props.match.params.id;
  var conf = window.confirm("Do you want to delete ?");
  if (conf === true) {
    this.props.deleteExp(id);
    window.open('/experience_abroad',"_self");
  } 
}

onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
}


onSubmit = (e) => {

  e.preventDefault();

  if(this.state.from_date > this.state.to_date)
  {
    alert("Invalid Duration");
  }
  else{
  const id = this.props.match.params.id;
  const {nature_of_assignment,from_date,to_date,institution,country,purp_of_visit,funding_agency} = this.state;

  const exp = {nature_of_assignment,from_date,to_date,institution,country,purp_of_visit,funding_agency};
    

  this.props.editExp(exp,id);
  window.open('/experience_abroad',"_self");
  }
};


setStates(props)
{
    this.setState({
        nature_of_assignment: props.experience.nature_of_assignment,
        from_date: props.experience.from_date,
        to_date: props.experience.to_date,
        institution: props.experience.institution,
        country : props.experience.country,
        purp_of_visit: props.experience.purp_of_visit,
        funding_agency: props.experience.funding_agency,
    })
}


componentDidMount()
{    
  const id = this.props.match.params.id;
  this.props.getExpbyID(id);
}


componentWillReceiveProps(props) {
    this.setStates(props);
    this.setState({
      exp : props.experience
    })
}

  render() {
    var exp = this.state.exp;
    var exp_len = Object.keys(exp).length

    return (
      <div>
        <CustomLayout>
        {
        exp_len > 0 ? (
        <Form key = {exp.id} onSubmit ={this.onSubmit}>
        <div align="right">
          <Button type="danger" htmlType = "submit" onClick = {this.delete}>Delete</Button>
        </div>
        <Form.Item label="NATURE OF ASSIGNMENT">
            <Input name = "nature_of_assignment" defaultValue={this.state.nature_of_assignment} placeholder="Enter Nature of Assignment" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="DURATION">
            <label>From</label>{'\u00A0'}{'\u00A0'}
            <input type = "date" required name="from_date" defaultValue={this.state.from_date} onChange={this.onChange}></input>
            {'\u00A0'}{'\u00A0'}
            <label>To</label>{'\u00A0'}{'\u00A0'}           
            <input type = "date" required name="to_date" defaultValue={this.state.to_date} onChange={this.onChange}></input>
          </Form.Item>
          <Form.Item label="INSTITUTION/ORGANIZATION">
            <Input name = "institution" placeholder="Enter Institution Name" defaultValue={this.state.institution} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="COUNTRY">
            <Input name = "country" placeholder="Country Name" defaultValue={this.state.country} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="PURPOSE OF VISIT ">
            <select name="purp_of_visit" defaultValue={this.state.purp_of_visit} onChange = {this.onChange}>
              <option value="Others">Others</option>
              <option value="Paper Presentation in Conference">Paper Presentation in Conference</option>
              <option value="Chairing the Session in Conference">Chairing the Session in Conference</option>
              <option value="Post Doctral Research">Post Doctral Research</option>
              <option value="Joint Research Project">Joint Research Project</option>
              <option value="Expert Visit">Expert Visit</option>
              <option value="Visiting Faculty">Visiting Faculty</option>
              <option value="Visiting Lab Departments/University">Visiting Lab Departments/University</option>
              <option value="University Exchange Programme">University Exchange Programme</option>
            </select>
          </Form.Item>
          <Form.Item label="FUNDING AGENCY ">
            <Input name = "funding_agency" defaultValue={this.state.funding_agency} placeholder="Funding Agency Name" onChange = {this.onChange} />
          </Form.Item><br/>
          <Form.Item>
            <Button type="primary" htmlType = "submit">Submit</Button>
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
    experience: state.experience_abroad.exp_by_id
});


export default connect(mapStateToProps,{ editExp,getExpbyID,deleteExp })(ExpEdit);