import React from 'react';
import { Descriptions,Button } from 'antd';
import { Redirect } from 'react-router-dom';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { getQualification } from '../../actions/qualification';

class Qualification_view extends React.Component{

  static propTypes = {
    qualification: PropTypes.array.isRequired
  }

  state = {
    qualification:{},
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
        return <Redirect to = '/qualification/edit' />
      }

      else if (this.state.redirect && type === 'add') {
        return <Redirect to = '/qualification/add' />
      }
    }

    
      componentDidMount() {
        this.props.getQualification();
        this.setState({ length: Object.keys(this.props.qualification).length });
      }
      

    render(){
      var numRows = 0;
      const render = this.props.qualification.map(quali => 
        (numRows++) );

    return (
      <div>
      <CustomLayout>

      {
      numRows == 0 ? (
                  <div>
                  </div>
      ) : (
        this.props.qualification.map(quali => (
          quali.degree_type == "ug_pg" ? ( 
          <div>
            <Descriptions title="UG/PG" bordered>
            <Descriptions.Item label="LEVEL" span={3}>{ quali.level }</Descriptions.Item>   
            <Descriptions.Item label="DEGREE" span={3}>{ quali.degree }</Descriptions.Item>
            <Descriptions.Item label="BRANCH" span={3}>{ quali.branch }</Descriptions.Item>
            <Descriptions.Item label="INSTITUTION" span={3}>{quali.institution}</Descriptions.Item>
            <Descriptions.Item label="UNIVERSITY" span={3}>{quali.university}</Descriptions.Item>
            <Descriptions.Item label="DURATION" span={3}>{quali.duration}</Descriptions.Item>
            <Descriptions.Item label="CLASS OBTAINED" span={3}>{quali.class_obtained}</Descriptions.Item>
            </Descriptions>
          <br /><br/>
          </div>
          )  :  ( 
          <div>
                <Descriptions title="RESEARCH" bordered>
                <Descriptions.Item label="DEGREE" span={3}>{ quali.degree }</Descriptions.Item>   
                <Descriptions.Item label="TITLE OF THESIS" span={3}>{ quali.title_of_thesis }</Descriptions.Item>
                <Descriptions.Item label="RESEARCH AREA" span={3}>{ quali.research_area }</Descriptions.Item>
                <Descriptions.Item label="FACULTY" span={3}>{quali.faculty}</Descriptions.Item>
                <Descriptions.Item label="DEPARTMENT" span={3}>{quali.department}</Descriptions.Item>
                <Descriptions.Item label="INSTITUTION" span={3}>{quali.institution}</Descriptions.Item>
                <Descriptions.Item label="UNIVERSITY" span={3}>{quali.university}</Descriptions.Item>
                <Descriptions.Item label="DURATION" span={3}>{quali.duration}</Descriptions.Item>
                <Descriptions.Item label="VIVA" span={3}>{quali.viva}</Descriptions.Item>       
                </Descriptions>
                      
              <br /><br/>
            </div>
          )
               
        )
      )
      )

      }

      {this.renderRedirect('add')}
      <Button type="primary" onClick={this.setRedirect}>Add Qualifications</Button>
      </CustomLayout>
      </div>
    );
      
    }
}

const mapStateToProps = state => ({
  qualification: state.qualification.qualification
});


export default connect(mapStateToProps,{ getQualification })(Qualification_view);