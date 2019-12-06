import React from 'react';
import { Form, Input, Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { editEmployment,getEmploymentbyID,deleteEmployment } from '../../actions/employment';

class EmpEdit extends React.Component {
  
  state = {
    employment:{},
    emp:{},
    redirect : false,

    designation: '',
    from_date: '',
    to_date: '',
    department: '',
    campus: '',
    present_pay: '',
    nature_of_app: '',
    position: '',
    position_type: '',
    institution: '',
    years: '',
    exp_type: '',
    emp_type: '',
}

static propTypes = {
  editEmployment: PropTypes.func.isRequired,
  employment: PropTypes.object.isRequired,
  deleteEmployment: PropTypes.func.isRequired,
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
      this.props.deleteEmployment(id);
      window.open('/employment',"_self");
      //history.push('/qualification');
    } 
}


onSubmit = e => {

    const id = this.props.match.params.id;

    e.preventDefault();

    if(this.state.emp_type === 'univ')
    {
      //console.log(this.state.univ_emp_form);
      if(this.state.position_type === "present")
      {
        const {designation,from_date,department,campus,present_pay,nature_of_app,position_type,emp_type} = this.state;
      
        const emp_info = {designation,from_date,department,campus,present_pay,nature_of_app,position_type,emp_type};
  
            
        //console.log(emp_info);
        this.props.editEmployment(emp_info,id);
      }
  
      else if(this.state.position_type === "prev")
      {
        const {designation,from_date,to_date,department,campus,present_pay,nature_of_app,position_type,emp_type} = this.state;
      
        const emp_info = {designation,from_date,to_date,department,campus,present_pay,nature_of_app,position_type,emp_type};
  
            
        //console.log(emp_info);
        this.props.editEmployment(emp_info,id);
      }
  
      else if(this.state.position_type === "present_add" || this.state.position_type === "prev_add")
      {
        const {department,position,position_type,emp_type} = this.state;
      
        const emp_info = {department,position,position_type,emp_type};
  
            
        //console.log(emp_info);
        this.props.editEmployment(emp_info,id);
      }
      
    }
      else if(this.state.emp_type === "oth")
      {
        const {designation,institution,years,emp_type,exp_type} = this.state;
      
        const emp_info = {designation,institution,years,emp_type,exp_type};
  
            
        //console.log(emp_info);
        this.props.editEmployment(emp_info,id);
      }
  
    else{
    }
    window.open('/employment',"_self");
}


setStates(props)
{
  if(props.employment.emp_type === 'univ')
    {
      if(props.employment.position_type === "present")
      {
        this.setState({
          designation : props.employment.designation,
          from_date : props.employment.from_date,
          department : props.employment.department,
          campus : props.employment.campus,
          present_pay : props.employment.present_pay,
          nature_of_app : props.employment.nature_of_app,
          position_type : props.employment.position_type,
          emp_type : props.employment.emp_type,
        })
      }
  
      else if(props.employment.position_type === "prev")
      {
        this.setState({
          designation : props.employment.designation,
          from_date : props.employment.from_date,
          to_date : props.employment.to_date,
          department : props.employment.department,
          campus : props.employment.campus,
          present_pay : props.employment.present_pay,
          nature_of_app : props.employment.nature_of_app,
          position_type : props.employment.position_type,
          emp_type : props.employment.emp_type,
        })
      }
  
      else if(props.employment.position_type === "present_add" || props.employment.position_type === "prev_add")
      {
        this.setState({
          department : props.employment.department,
          position : props.employment.position,
          position_type : props.employment.position_type,
          emp_type : props.employment.emp_type,
        })
      }
      
    }
      else if(props.employment.emp_type === "oth")
      {
        this.setState({
          designation : props.employment.designation,
          institution : props.employment.institution,
          years : props.employment.years,
          emp_type : props.employment.emp_type,
          exp_type : props.employment.exp_type,
        })
      }
  
    else{
    }
}

componentDidMount()
{    
  const id = this.props.match.params.id;
  this.props.getEmploymentbyID(id);
}


componentWillReceiveProps(props) {
    this.setStates(props);
    this.setState({
      emp : props.employment
    })
}


  render() { 
    var emp = this.state.emp;
    var emp_len = Object.keys(emp).length;

    return (
      <div>
      <CustomLayout>
        {
        emp_len > 0 ? (
          <div>
  
          <div align="right">
            <Button type="danger" htmlType = "submit" onClick = {this.delete}>Delete</Button>
          </div>
  
          <Form onSubmit ={this.onSubmit}>
          {
            emp.emp_type === 'univ' ? (
            <div>
            {
            emp.position_type === "present" ? (
              <div>
              <Form.Item label="DESIGNATION">
              <Input name = "designation" placeholder="Enter Designation" required defaultValue = {emp.designation} onChange = {this.onChange} />
              </Form.Item>
              <Form.Item label="FROM">
                <input type = "date" name = "from_date" required defaultValue = {emp.from_date} onChange = {this.onChange} ></input>
              </Form.Item>
              <Form.Item label="DEPARTMENT/CENTRE">
                <Input name = "department" placeholder="Enter Department" required defaultValue = {emp.department} onChange = {this.onChange} />
              </Form.Item>
              <Form.Item label="CAMPUS">
                <Input name = "campus" placeholder="Campus Name" required defaultValue = {emp.campus} onChange = {this.onChange} />
              </Form.Item>
              <Form.Item label="PRESENT PAY">
                <Input name = "present_pay" placeholder="Present Pay" required defaultValue = {emp.present_pay} onChange = {this.onChange} />
              </Form.Item>
              <Form.Item label="NATURE OF APPOINTMENT">
                <Input name = "nature_of_app" placeholder="Nature of Appointment" required defaultValue = {emp.nature_of_app} onChange = {this.onChange} />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType = "submit">Submit</Button>
              </Form.Item>
              </div>

            ) : (emp.position_type === "prev" ? (

              <div>
              <Form.Item label="DESIGNATION">
              <Input name = "designation" placeholder="Enter Designation" required defaultValue = {emp.designation} onChange = {this.onChange} />
              </Form.Item>
              <Form.Item label="FROM">
                <input type = "date" name = "from_date" required defaultValue = {emp.from_date} onChange = {this.onChange} ></input>
              </Form.Item>
              <Form.Item label="TO">
                <input type = "date" name = "to_date" required defaultValue = {emp.to_date} onChange = {this.onChange} ></input>
              </Form.Item>
              <Form.Item label="DEPARTMENT/CENTRE">
                <Input name = "department" placeholder="Enter Department" required defaultValue = {emp.department} onChange = {this.onChange} />
              </Form.Item>
              <Form.Item label="CAMPUS">
                <Input name = "campus" placeholder="Campus Name" required defaultValue = {emp.campus} onChange = {this.onChange} />
              </Form.Item>
              <Form.Item label="PRESENT PAY">
                <Input name = "present_pay" placeholder="Present Pay" required defaultValue = {emp.present_pay} onChange = {this.onChange} />
              </Form.Item>
              <Form.Item label="NATURE OF APPOINTMENT">
                <Input name = "nature_of_app" placeholder="Nature of Appointment" required defaultValue = {emp.nature_of_app} onChange = {this.onChange} />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType = "submit">Submit</Button>
              </Form.Item>
              </div>

            ) : (
            emp.position_type === "present_add" || emp.position_type === "prev_add" ? 
            (

              <div>
              <Form.Item label="POSITION">
              <Input name = "position" placeholder="Enter position" required defaultValue = {emp.position} onChange = {this.onChange} />
              </Form.Item>
              <Form.Item label="DEPARTMENT/CENTRE">
                <Input name = "department" placeholder="Enter Department" required defaultValue = {emp.department} onChange = {this.onChange} />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType = "submit">Submit</Button>
              </Form.Item>
              </div>

            )  : (null)))
            }


            </div>
            ) : (
            emp.emp_type === 'oth' ? (

            <div>
              <Form.Item label="DESIGNATION">
              <Input name = "designation" placeholder="Enter designation" required defaultValue = {emp.designation} onChange = {this.onChange} />
              </Form.Item>
              <Form.Item label="INSTITUTION">
                <Input name = "institution" placeholder="Enter institution" required defaultValue = {emp.institution} onChange = {this.onChange} />
              </Form.Item>
              <Form.Item label="YEARS">
                <Input name = "years" placeholder="Enter years" required defaultValue = {emp.years} onChange = {this.onChange} />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType = "submit">Submit</Button>
              </Form.Item>
            </div>

            ) : (null)
            ) 
          }
          </Form>
          </div>
          ) : (<h1>ERROR!</h1>)
        }
        </CustomLayout>
      </div>
    );
  }
}



const mapStateToProps = state => ({
    employment: state.employment.employment_by_id
});

export default connect(mapStateToProps,{ editEmployment,getEmploymentbyID,deleteEmployment })(EmpEdit);
    