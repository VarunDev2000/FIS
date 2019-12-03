import React from 'react';
import { Descriptions,Button } from 'antd';
import { Redirect } from 'react-router-dom';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { getEmployment } from '../../actions/employment';

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

    renderRedirect = (type) => {
      if (this.state.redirect && type === 'edit') {
        return <Redirect to = '/employment/edit' />
      }

      else if (this.state.redirect && type === 'add') {
        return <Redirect to = '/employment/add' />
      }
    }

    
      componentDidMount() {
        this.props.getEmployment();
        this.setState({ length: Object.keys(this.props.employment).length });
      }
      

    render(){
      var n = 0;

      var present_count = 0;
      var prev_count = 0;
      var present_add_count = 0;
      var prev_add_count = 0;

      var oth_count = 0;
      var industry_count = 0;
      var academics_count = 0;

      this.props.employment.map(emp =>
        (
          emp.emp_type === "univ" ? (emp.position_type === "present" ? (present_count++,n++) 
          : (emp.position_type === "prev" ? (prev_count++,n++) : 
            (emp.position_type === "present_add" ? (present_add_count++,n++) : 
            (emp.position_type === "prev_add" ? (prev_add_count++,n++):(null))))) : 
            (emp.exp_type === "industry" ? (industry_count++,oth_count++) : (emp.exp_type === "academics") ? 
            (academics_count++,oth_count++) : (null))
        )
        );

    return (
      <div>
      <CustomLayout>

      {
      n > 0 ? (
        <div> 
        <hr/>
        <u><h2>UNIVERSITY EMPLOYMENT DETAILS</h2></u>
        <hr/> 
      {  
      present_count > 0 ? (
        <div>
        <h4>PRESENT POSITIONS</h4>
        <br/>
        {
        this.props.employment.map(emp => (
        emp.position_type === "present" ? ( 
        <div>
        <Descriptions bordered>
        <Descriptions.Item label="DESIGNATION" span={3}>{ emp.designation }</Descriptions.Item>   
        <Descriptions.Item label="FROM" span={3}>{ emp.from_date }</Descriptions.Item>
        <Descriptions.Item label="DEPARTMENT/CENTRE" span={3}>{ emp.department }</Descriptions.Item>
        <Descriptions.Item label="CAMPUS" span={3}>{emp.campus}</Descriptions.Item>
        <Descriptions.Item label="PRESENT PAY" span={3}>{emp.present_pay}</Descriptions.Item>
        <Descriptions.Item label="NATURE OF APPOINTMENT" span={3}>{emp.nature_of_app}</Descriptions.Item>       
        </Descriptions>
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
      prev_count > 0 ? (
        <div>
        <h4>PREVIOUS POSITIONS</h4>
        <br/>
        {
        this.props.employment.map(emp => (
        emp.position_type === "prev" ? ( 
        <div>
        <Descriptions bordered>
        <Descriptions.Item label="DESIGNATION" span={3}>{ emp.designation }</Descriptions.Item>   
        <Descriptions.Item label="FROM" span={3}>{ emp.from_date }</Descriptions.Item>
        <Descriptions.Item label="TO" span={3}>{ emp.to_date }</Descriptions.Item>
        <Descriptions.Item label="DEPARTMENT/CENTRE" span={3}>{ emp.department }</Descriptions.Item>
        <Descriptions.Item label="CAMPUS" span={3}>{emp.campus}</Descriptions.Item>
        <Descriptions.Item label="PRESENT PAY" span={3}>{emp.present_pay}</Descriptions.Item>
        <Descriptions.Item label="NATURE OF APPOINTMENT" span={3}>{emp.nature_of_app}</Descriptions.Item>       
        </Descriptions>
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
        <h4>PRESENT ADDITIONAL POSITIONS</h4>
        <br/>
        {
        this.props.employment.map(emp => (
        emp.position_type === "present_add" ? ( 
        <div>
        <Descriptions bordered>
        <Descriptions.Item label="POSITION" span={3}>{ emp.position }</Descriptions.Item>   
        <Descriptions.Item label="DEPARTMENT/CENTRE" span={3}>{ emp.department }</Descriptions.Item>
        </Descriptions>
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
        <h4>PREVIOUS ADDITIONAL POSITIONS</h4>
        <br/>
        {
        this.props.employment.map(emp => (
        emp.position_type === "prev_add" ? ( 
        <div>
        <Descriptions bordered>
        <Descriptions.Item label="POSITION" span={3}>{ emp.position }</Descriptions.Item>   
        <Descriptions.Item label="DEPARTMENT/CENTRE" span={3}>{ emp.department }</Descriptions.Item>
        </Descriptions>
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
    <hr/>
    <u><h2>OTHER EMPLOYMENT DETAILS</h2></u>
    <hr/>
    {
    industry_count > 0 ? ( 
    <div>
    <h4>INDUSTRY EXPERIENCE</h4>
    <br/>
    {
    this.props.employment.map(emp => (
    emp.exp_type === "industry" ? (
    <div>
    <Descriptions bordered>
    <Descriptions.Item label="DESIGNATION" span={3}>{ emp.designation }</Descriptions.Item>   
    <Descriptions.Item label="INSTITUTION" span={3}>{ emp.institution }</Descriptions.Item>
    <Descriptions.Item label="YEARS" span={3}>{ emp.years }</Descriptions.Item>
    </Descriptions>
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
    <h4>ACADEMICS/RESEARCH EXPERIENCE</h4>
    <br/>
    {
    this.props.employment.map(emp => (
    emp.exp_type === "academics" ? (
    <div>
    <Descriptions bordered>
    <Descriptions.Item label="DESIGNATION" span={3}>{ emp.designation }</Descriptions.Item>   
    <Descriptions.Item label="INSTITUTION" span={3}>{ emp.institution }</Descriptions.Item>
    <Descriptions.Item label="YEARS" span={3}>{ emp.years }</Descriptions.Item>
    </Descriptions>
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
    

    
      {this.renderRedirect('add')}
      <Button type="primary" onClick={this.setRedirect}>Add Employment information</Button>
      </CustomLayout>
      </div>
    );
    }
  }


const mapStateToProps = state => ({
  employment: state.employment.employment
});


export default connect(mapStateToProps,{ getEmployment })(Employment_view);