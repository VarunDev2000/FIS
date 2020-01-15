import React from 'react';
import { Descriptions,Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { getExp } from '../../actions/experience_abroad';
import history from '../common/history'

class Exp_view extends React.Component{

  static propTypes = {
    experience: PropTypes.array.isRequired
  }

  state = {
    experience:{},
    redirect : false,
    numRows : 0
}


    setRedirect = () => {
      this.setState({
        redirect: true
      })
    }

    addRedirect = () => {
      history.push('/experience_abroad/add');

      //window.open("/add","_self");
    }

    editRedirect = (e) => {
      var id = e.target.id;
      history.push(`/experience_abroad/edit/${id}`);

        //window.open('/edit',"_self");

    }

    
      componentDidMount() {
        this.props.getExp();
      }

      componentWillReceiveProps(props) {
        var count = 0;
        props.experience.map(exp => 
          (count++) );

        localStorage.setItem('length',count);
      }
      

    render(){
      var numRows = localStorage.getItem('length');
      
    return (
      <CustomLayout>
      <Button type="primary" onClick={this.addRedirect}>Add</Button><br/><br/><br/>
      {
       numRows == 0 || numRows == null ? (
            <div></div>
      ) : (
          <div>
         <h2>EXPERIENCE ABROAD</h2><br/>
        {
      this.props.experience.map(exp => (
              <div key = {'experience'+exp.id}>
              <Descriptions bordered>
              <Descriptions.Item label="NATURE OF ASSIGNMENT" span={3}>{ exp.nature_of_assignment }</Descriptions.Item>
              <Descriptions.Item label="DURATION" span={3}>{exp.from_date + " To " + exp.to_date}</Descriptions.Item>
      <Descriptions.Item label="INSTITUTION/ORGANIZATION" span={3}>{exp.institution}</Descriptions.Item>
              <Descriptions.Item label="COUNTRY" span={3}>{exp.country}</Descriptions.Item>
              <Descriptions.Item label="PURPOSE OF VISIT" span={3}>{exp.purp_of_visit}</Descriptions.Item>
              <Descriptions.Item label="FUNDING AGENCY" span={3}>{exp.funding_agency}</Descriptions.Item>
              </Descriptions>
              <Button id={exp.id} type="primary" className="editButton" onClick={this.editRedirect}>EDIT</Button>
            </div>
      ))
        }
      </div>
      )
      }
      </CustomLayout>
    );
    }
  }

const mapStateToProps = state => ({
  experience: state.experience_abroad.exp,
});


export default connect(mapStateToProps,{ getExp })(Exp_view);