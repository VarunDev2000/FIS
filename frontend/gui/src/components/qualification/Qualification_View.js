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
      const render = this.props.qualification.map(ginfo => 
        (numRows++)
        );
    return (
       numRows == 0 ? (
                  <div>
                  <CustomLayout>
                  {this.renderRedirect('add')}
                  <Button type="primary" onClick={this.setRedirect}>Add Qualifications</Button>
                  </CustomLayout>
                  </div>
      ) : (

      this.props.qualification.map(ginfo => (
              <div>
              <CustomLayout>
              <Descriptions title="QUALIFICATIONS" bordered>
              <Descriptions.Item label="NAME" span={3}>{ ginfo.name }</Descriptions.Item>   
              <Descriptions.Item label="GENDER" span={3}>{ ginfo.gender }</Descriptions.Item>
              <Descriptions.Item label="DOB" span={3}>{ ginfo.dob }</Descriptions.Item>
              <Descriptions.Item label="FATHER/HUSBAND NAME" span={3}>{ginfo.fath_hus_name}</Descriptions.Item>
              <Descriptions.Item label="OFFICIAL MAIL" span={3}>{ginfo.official_mail}</Descriptions.Item>
              <Descriptions.Item label="PERSONAL MAIL" span={3}>{ginfo.personal_mail}</Descriptions.Item>
              <Descriptions.Item label="AADHAR NO" span={3}>{ginfo.aadhar}</Descriptions.Item>
              <Descriptions.Item label="PAN" span={3}>{ginfo.pan}</Descriptions.Item>
              <Descriptions.Item label="MOBILE NO" span={3}>{ginfo.mobile_no}</Descriptions.Item>
              <Descriptions.Item label="RESIDENCE PHONE NO" span={3}>{ginfo.residence_ph_no}</Descriptions.Item>
              <Descriptions.Item label="CASTE" span={3}>{ginfo.caste}</Descriptions.Item>
              <Descriptions.Item label="COMMUNITY" span={3}>{ginfo.community}</Descriptions.Item>
              <Descriptions.Item label="RESIDENTIAL ADDRESS" span={3}>{ginfo.res_address}</Descriptions.Item>               
              <Descriptions.Item label="PERMANENT ADDRESS" span={3}>{ginfo.perm_address}</Descriptions.Item>
              <Descriptions.Item label="WEBSITE" span={3}>{ginfo.website_url}</Descriptions.Item>
           
              </Descriptions>
                    
            <br /><br/>

            {this.renderRedirect('add')}
            <Button type="primary" onClick={this.setRedirect}>Add Qualifications</Button>
            </CustomLayout>
            </div>
      ))
      )
    );
      
    }
}

const mapStateToProps = state => ({
  qualification: state.qualification.qualification
});


export default connect(mapStateToProps,{ getQualification })(Qualification_view);