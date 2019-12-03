import React from 'react';
import { Descriptions,Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { getQualification } from '../../actions/qualification';
import history from '../common/history'

class Qualification_view extends React.Component{

  static propTypes = {
    qualification: PropTypes.array.isRequired
  }

  state = {
    qualification:{},
    redirect : false,
    numRows : 0,
    ug_pg_count : 0,
    r_count : 0
  }


    setRedirect = () => {
      this.setState({
        redirect: true
      })
    }

    addRedirect = () => {
      history.push('/qualification/add');

      //window.open("/qualification/edit","_self");
    }


    editRedirect = (e) => {
        var id = e.target.id;
        history.push(`/qualification/edit/${id}`);
        
        //console.log(e.target.id);
        //window.open("/qualification/edit","_self");
    }

    
      componentDidMount() {
        this.props.getQualification();
      }


      componentDidUpdate(prevProps) {
        if (prevProps.qualification !== this.props.qualification) {
          var ug_pg_count=0,research_count=0,n=0;

          this.props.qualification.map(quali => 
          quali.degree_type === 'ug_pg' ? (ug_pg_count++,n++) : (research_count++,n++));
          this.setState({
            numRows : n,
            ug_pg_count : ug_pg_count,
            r_count : research_count
          })
        }
      }
      

    render(){
      var numRows =this.state.numRows;
      var ug_pg_count = this.state.ug_pg_count;
      var r_count = this.state.r_count;

    return (
      <div>
      {
      numRows === 0 ? (
        <CustomLayout>
        </CustomLayout>
      ) : (
        <CustomLayout>
        <Button type="primary" onClick={this.addRedirect}>Add Details</Button>
        <br/><br/>
        <div>
          {
          ug_pg_count > 0 ? (
          <div>
          <Descriptions title="UG/PG"></Descriptions>
          {
          this.props.qualification.map(quali => (
          quali.degree_type === "ug_pg" ? ( 
          <div key = {'ugpg'+quali.id}>
            <Descriptions bordered>
            <Descriptions.Item label="LEVEL" span={3}>{ quali.level }</Descriptions.Item>   
            <Descriptions.Item label="DEGREE" span={3}>{ quali.degree }</Descriptions.Item>
            <Descriptions.Item label="BRANCH" span={3}>{ quali.branch }</Descriptions.Item>
            <Descriptions.Item label="INSTITUTION" span={3}>{quali.institution}</Descriptions.Item>
            <Descriptions.Item label="UNIVERSITY" span={3}>{quali.university}</Descriptions.Item>
            <Descriptions.Item label="DURATION" span={3}>{quali.duration}</Descriptions.Item>
            <Descriptions.Item label="CLASS OBTAINED" span={3}>{quali.class_obtained}</Descriptions.Item>
            </Descriptions>
            <br/>

            <Button id={quali.id} type="primary" onClick={this.editRedirect}>Edit</Button>
          <br /><br/>
          </div>
          ):(null)))
          }
          </div>
          ) : (null)
          }

          {
          r_count > 0 ? ( 
          <div>
          <Descriptions title="RESEARCH"></Descriptions>
          {
          this.props.qualification.map(quali => (
          quali.degree_type === "research" ? ( 
          <div key = {'research'+quali.id}>
                <Descriptions bordered>
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
                 <br/>
                <Button id={quali.id} type="primary" onClick={this.editRedirect}>Edit</Button>
              <br /><br/>
            </div>
          ):(null)))
          }
          </div>) : (null)
          }
          </div>
      </CustomLayout>
      )

      }
      </div>
    );
      
    }
}

const mapStateToProps = state => ({
  qualification: state.qualification.qualification
});


export default connect(mapStateToProps,{ getQualification })(Qualification_view);