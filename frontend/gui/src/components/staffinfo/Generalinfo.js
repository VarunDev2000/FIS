import React from 'react';
import { Descriptions,Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { getStaffinfo } from '../../actions/generalinfo';
import history from '../common/history'

class Generalinfo extends React.Component{

  static propTypes = {
    generalinfo: PropTypes.array.isRequired
  }

  state = {
    generalinfo:{},
    redirect : false,
    numRows : 0
}


    setRedirect = () => {
      this.setState({
        redirect: true
      })
    }

    addRedirect = () => {
      history.push('generalinfo/add');

      //window.open("/add","_self");
    }

    editRedirect = (e) => {
      var id = e.target.id;
      history.push(`generalinfo/edit/${id}`);

        //window.open('/edit',"_self");

    }

    
      componentDidMount() {
        this.props.getStaffinfo();
      }

      componentWillReceiveProps(props) {
          this.setState({
            numRows : props.length
          })
          localStorage.setItem('length',props.length)
      }
      

    render(){
      var numRows = localStorage.getItem('length');
    return (
      <CustomLayout>
      {
       numRows == 0 ? (
            <Button type="primary" onClick={this.addRedirect}>Add Details</Button>
      ) : (
      this.props.generalinfo.map(ginfo => (
              <div key = {'staffinfo'+ginfo.id}>
              <h2>INFORMATION</h2><br/>
              <Descriptions bordered>
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
              <br/>
              <Button id={ginfo.id} type="primary" className="editButton" onClick={this.editRedirect}>EDIT</Button>
            </div>
      ))
      )
      }
      </CustomLayout>
    );
    }
  }

const mapStateToProps = state => ({
  generalinfo: state.generalinfo.generalinfo,
  length : state.generalinfo.length
});


export default connect(mapStateToProps,{ getStaffinfo })(Generalinfo);