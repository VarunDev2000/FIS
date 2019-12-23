import React from 'react';
import { Descriptions,Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { getEmployment } from '../../actions/employment';
import history from '../common/history'

class Employment_view extends React.Component{

  static propTypes = {
    employment: PropTypes.array.isRequired
  }

  state = {
    employment:{},
    length : -1,
    redirect : false
  }


    setRedirect = () => {
      this.setState({
        redirect: true
      })
    }

    addRedirect = () => {
      history.push('/employment/add');

      //window.open("/qualification/edit","_self");
    }


    editRedirect = (e) => {
        var id = e.target.id;
        history.push(`/employment/edit/${id}`);
        
        //console.log(e.target.id);
        //window.open("/qualification/edit","_self");
    }

    
      componentDidMount() {
        this.props.getEmployment();
        this.setState({ length: Object.keys(this.props.employment).length });
      }

      componentWillReceiveProps(props) {
        var n = 0,present_count = 0,prev_count = 0,present_add_count = 0,prev_add_count = 0,oth_count = 0,industry_count = 0,academics_count = 0;
  
        props.employment.map(emp =>
          (
            emp.emp_type === "univ" ? (emp.position_type === "present" ? (present_count++,n++) 
            : (emp.position_type === "prev" ? (prev_count++,n++) : 
              (emp.position_type === "present_add" ? (present_add_count++,n++) : 
              (emp.position_type === "prev_add" ? (prev_add_count++,n++):(null))))) : 
              (emp.exp_type === "industry" ? (industry_count++,oth_count++) : (emp.exp_type === "academics") ? 
              (academics_count++,oth_count++) : (null))
          )
          );

          localStorage.setItem('n',n);
          localStorage.setItem('present_count',present_count);
          localStorage.setItem('prev_count',prev_count);
          localStorage.setItem('present_add_count',present_add_count);
          localStorage.setItem('prev_add_count',prev_add_count);
          localStorage.setItem('oth_count',oth_count);
          localStorage.setItem('industry_count',industry_count);
          localStorage.setItem('academics_count',academics_count);
      }
      

    render(){
      var n = localStorage.getItem('n');

      var present_count = localStorage.getItem('present_count');
      var prev_count = localStorage.getItem('prev_count');
      var present_add_count = localStorage.getItem('present_add_count');
      var prev_add_count = localStorage.getItem('prev_add_count');

      var oth_count = localStorage.getItem('oth_count');
      var industry_count = localStorage.getItem('industry_count');
      var academics_count = localStorage.getItem('academics_count');

    return (
      <div>
      <CustomLayout>

      <Button type="primary" onClick={this.addRedirect}>Add Employment information</Button>
      <br/><br/><br/>
      {
      n > 0 ? (
        <div> 
        <h3 className = "emp_heading_div">UNIVERSITY EMPLOYMENT DETAILS</h3><br/>
        <br/>
      {  
      present_count > 0 ? (
        <div>
        <h5>PRESENT POSITIONS :</h5>
        <br/>
        {
        this.props.employment.map(emp => (
        emp.position_type === "present" ? ( 
        <div key = {emp.id}>
        <Descriptions bordered>
        <Descriptions.Item label="DESIGNATION" span={3}>{ emp.designation }</Descriptions.Item>   
        <Descriptions.Item label="FROM" span={3}>{ emp.from_date }</Descriptions.Item>
        <Descriptions.Item label="DEPARTMENT/CENTRE" span={3}>{ emp.department }</Descriptions.Item>
        <Descriptions.Item label="CAMPUS" span={3}>{emp.campus}</Descriptions.Item>
        <Descriptions.Item label="PRESENT PAY" span={3}>{emp.present_pay}</Descriptions.Item>
        <Descriptions.Item label="NATURE OF APPOINTMENT" span={3}>{emp.nature_of_app}</Descriptions.Item>       
        </Descriptions>
        <Button id={emp.id} type="primary" className="editButton" onClick={this.editRedirect}>Edit</Button>
        </div>
        ) : (null)
        ))
        }
        
        <hr/>
        <br/>
        </div>
        ) : (null)  
      }
      
      {
      prev_count > 0 ? (
        <div>
        <h5>PREVIOUS POSITIONS :</h5>
        <br/>
        {
        this.props.employment.map(emp => (
        emp.position_type === "prev" ? ( 
        <div key = {emp.id}>
        <Descriptions bordered>
        <Descriptions.Item label="DESIGNATION" span={3}>{ emp.designation }</Descriptions.Item>   
        <Descriptions.Item label="FROM" span={3}>{ emp.from_date }</Descriptions.Item>
        <Descriptions.Item label="TO" span={3}>{ emp.to_date }</Descriptions.Item>
        <Descriptions.Item label="DEPARTMENT/CENTRE" span={3}>{ emp.department }</Descriptions.Item>
        <Descriptions.Item label="CAMPUS" span={3}>{emp.campus}</Descriptions.Item>
        <Descriptions.Item label="PRESENT PAY" span={3}>{emp.present_pay}</Descriptions.Item>
        <Descriptions.Item label="NATURE OF APPOINTMENT" span={3}>{emp.nature_of_app}</Descriptions.Item>       
        </Descriptions>        
        <Button id={emp.id} type="primary" className="editButton" onClick={this.editRedirect}>Edit</Button>
        <br/>
        </div>
        ) : (null)
        ))
        }

        <hr/>
        <br/>
        </div>
      
      ) : (null)  
      }
      {
      present_add_count > 0 ? (

       <div>
        <h5>PRESENT ADDITIONAL POSITIONS</h5>
        <br/>
        {
        this.props.employment.map(emp => (
        emp.position_type === "present_add" ? ( 
        <div key = {emp.id}>
        <Descriptions bordered>
        <Descriptions.Item label="POSITION" span={3}>{ emp.position }</Descriptions.Item>   
        <Descriptions.Item label="DEPARTMENT/CENTRE" span={3}>{ emp.department }</Descriptions.Item>
        </Descriptions>
        <Button id={emp.id} type="primary" className="editButton" onClick={this.editRedirect}>Edit</Button>
        <br/>
        </div>
        ) : (null)
        ))
        }
        
        <hr/>
        <br/>
        </div>
      
      ) : (null)  
      }
      {
      prev_add_count > 0 ? (

        <div>
        <h5>PREVIOUS ADDITIONAL POSITIONS</h5>
        <br/>
        {
        this.props.employment.map(emp => (
        emp.position_type === "prev_add" ? ( 
        <div key = {emp.id}>
        <Descriptions bordered>
        <Descriptions.Item label="POSITION" span={3}>{ emp.position }</Descriptions.Item>   
        <Descriptions.Item label="DEPARTMENT/CENTRE" span={3}>{ emp.department }</Descriptions.Item>
        </Descriptions>
        <Button id={emp.id} type="primary" className="editButton" onClick={this.editRedirect}>Edit</Button>
        <br/>
        </div>
        ) : (null)
        ))
        }
        
        <hr/>
        <br/>
        </div>
      
      ) : (null)
      }
      </div>
      ) : (null)
    }

    {
    oth_count > 0 ? (
    <div> 
    <h3 className = "emp_heading_div" >OTHER EMPLOYMENT DETAILS</h3>
    <br/><br/>
    {
    industry_count > 0 ? ( 
    <div>
    <h5>INDUSTRY EXPERIENCE</h5>
    <br/>
    {
    this.props.employment.map(emp => (
    emp.exp_type === "industry" ? (
    <div key = {emp.id}>
    <Descriptions bordered>
    <Descriptions.Item label="DESIGNATION" span={3}>{ emp.designation }</Descriptions.Item>   
    <Descriptions.Item label="INSTITUTION" span={3}>{ emp.institution }</Descriptions.Item>
    <Descriptions.Item label="YEARS" span={3}>{ emp.years }</Descriptions.Item>
    </Descriptions>
    <Button id={emp.id} type="primary" className="editButton" onClick={this.editRedirect}>Edit</Button>
    <hr/>
    <br/>
    </div>
    ) : (null)
    ))
    }
    </div>
    ) : (null)
    }

    {
    academics_count > 0 ? ( 
    <div>
    <h5>ACADEMICS/RESEARCH EXPERIENCE</h5>
    <br/>
    {
    this.props.employment.map(emp => (
    emp.exp_type === "academics" ? (
    <div key = {emp.id}>
    <Descriptions bordered>
    <Descriptions.Item label="DESIGNATION" span={3}>{ emp.designation }</Descriptions.Item>   
    <Descriptions.Item label="INSTITUTION" span={3}>{ emp.institution }</Descriptions.Item>
    <Descriptions.Item label="YEARS" span={3}>{ emp.years }</Descriptions.Item>
    </Descriptions>
    <Button id={emp.id} type="primary" className="editButton" onClick={this.editRedirect}>Edit</Button>
    <hr/>
    <br/>
    </div>
    ) : (null)
    ))
    }
    </div>
    ) : (null)
    }

    </div>
    ) : (null)
    }
    
    </CustomLayout>
      </div>
    );
    }
  }


const mapStateToProps = state => ({
  employment: state.employment.employment
});


export default connect(mapStateToProps,{ getEmployment })(Employment_view);