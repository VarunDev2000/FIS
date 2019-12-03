import React from 'react';
import { Form, Input, Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { editQualification,getQualificationbyID,deleteQualification } from '../../actions/qualification';

class QualiEdit extends React.Component {
  
  state = {
    qualification:{},
    quali:{},
    redirect : false,

    level: '',
    degree: '',
    branch: '',
    institution: '',
    university: '',
    duration: '',
    class_obtained: '',
    title_of_thesis: '',
    research_area: '',
    faculty: '',
    department: '',
    viva: '',
    degree_type: '',
}

static propTypes = {
  editQualification: PropTypes.func.isRequired,
  qualification: PropTypes.object.isRequired,
  deleteQualification: PropTypes.func.isRequired,
}

onChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
}

delete = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    var conf = window.confirm("Do you want to delete ?");
    if (conf === true) {
      this.props.deleteQualification(id);
      window.open('/qualification',"_self");
      //history.push('/qualification');
    } 
}


onSubmit = e => {

    const id = this.props.match.params.id;
    e.preventDefault();
    if(this.state.degree_type === 'ug_pg')
    {
      const {level,degree,branch,institution,university,duration,class_obtained,degree_type} = this.state;
  
      const quali = {level,degree,branch,institution,university,duration,class_obtained,degree_type}
      
      //console.log(quali);
      this.props.editQualification(quali,id);
      //history.push('/qualification');
      window.open('/qualification',"_self");
      
    }
  
    else if(this.state.degree_type === 'research')
    {
      const {degree,title_of_thesis,research_area,faculty,department,institution,university,duration,viva,degree_type} = this.state;
  
      const quali = {degree,title_of_thesis,research_area,faculty,department,institution,university,duration,viva,degree_type}
      
      //console.log(quali);
      this.props.editQualification(quali,id);
      localStorage.removeItem('id');
      //history.push('/qualification');
      //this.props.history.push('/qualification');
      window.open('/qualification',"_self");
    }
  
    else{
    }
}


setStates(props)
{
  if(props.qualification.degree_type === 'ug_pg')
  {
    this.setState({
      level : props.qualification.level,
      degree : props.qualification.degree,
      branch : props.qualification.branch,
      institution : props.qualification.institution,
      university : props.qualification.university,
      duration : props.qualification.duration,
      class_obtained : props.qualification.class_obtained,
      degree_type : props.qualification.degree_type
    })
  }
  else
  {
    this.setState({
      degree : props.qualification.degree,
      title_of_thesis : props.qualification.title_of_thesis,
      research_area : props.qualification.research_area,
      faculty : props.qualification.faculty,
      department : props.qualification.department,
      institution : props.qualification.institution,
      university : props.qualification.university,
      duration : props.qualification.duration,
      viva : props.qualification.viva,
      degree_type : props.qualification.degree_type
    })
  }
}

componentDidMount()
{    
  const id = this.props.match.params.id;
  this.props.getQualificationbyID(id);
}


componentDidUpdate(prevProps) {
  if (prevProps.qualification !== this.props.qualification) {
    this.setStates(this.props);
    this.setState({
      quali : this.props.qualification
    })
  }
}


  render() { 
    const id = this.props.match.params.id;
    var quali = this.state.quali;

    return (
      <div>
      <CustomLayout>
        {
        id != null ? (
        <div>

        <div align="right">
          <Button type="danger" htmlType = "submit" onClick = {this.delete}>Delete</Button>
        </div>

        <Form onSubmit ={this.onSubmit}>
        {
        quali.degree_type === 'ug_pg' ? (
          <div key = {quali.id}>
          <Form.Item label="LEVEL">
          <Input name = "level" placeholder="Enter Level" required defaultValue = {quali.level} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="DEGREE">
            <Input name = "degree" placeholder="Enter Degree" required defaultValue = {quali.degree} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="BRANCH">
          <Input name = "branch" placeholder="Enter Branch" required defaultValue = {quali.branch} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="INSTITUTION">
            <Input  name = "institution" placeholder="Institution" required defaultValue = {quali.institution} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="UNIVERSITY">
            <Input name = "university" placeholder="University" required defaultValue = {quali.university} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="DURATION">
            <Input  name = "duration" placeholder="xxxx TO yyyy" required defaultValue = {quali.duration} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="CLASS OBTAINED">
            <Input name = "class_obtained" placeholder="Enter Class" required defaultValue = {quali.class_obtained} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item>
          <Button type="primary" htmlType = "submit">Submit</Button>
          </Form.Item>
        </div>
        ) : (
          <div key = {quali.id}>
          <Form.Item label="DEGREE">
            <Input name = "degree" placeholder="Enter Degree" required defaultValue = {quali.degree} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="TITLE OF THESIS">
          <Input name = "title_of_thesis" placeholder="Title of thesis" required defaultValue = {quali.title_of_thesis} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="RESEARCH AREA">
          <Input name = "research_area" placeholder="Enter Your Research Area" required defaultValue = {quali.research_area} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="FACULTY">
            <Input name = "faculty" placeholder="Enter Faculty" required defaultValue = {quali.faculty} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="DEPARTMENT">
            <Input name = "department" placeholder="Enter Department" required defaultValue = {quali.department} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="INSTITUTION">
            <Input name = "institution" placeholder="Institution" required defaultValue = {quali.institution} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="UNIVERSITY">
            <Input name = "university" placeholder="University" required defaultValue = {quali.university} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="DURATION">
            <Input name = "duration" placeholder="xxxx TO yyyy" required defaultValue = {quali.duration} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="VIVA">
            <Input name = "viva" placeholder="Viva" required defaultValue = {quali.viva} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item>
          <Button type="primary" htmlType = "submit">Submit</Button>
          </Form.Item>
          </div>
          ) 
        }
        </Form>
        </div>
        ) : (<h1><center>ERROR!</center></h1>)
        }
        </CustomLayout>
      </div>
    );
  }
}



const mapStateToProps = state => ({
    qualification: state.qualification.qualification_by_id
});

export default connect(mapStateToProps,{ editQualification,getQualificationbyID,deleteQualification })(QualiEdit);
    