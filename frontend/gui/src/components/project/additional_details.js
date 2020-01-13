import React from 'react';
import { Descriptions,Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { getProjectbyID } from '../../actions/project';

class ProAdDetails extends React.Component{

  static propTypes = {
    project: PropTypes.object.isRequired
  }

  state = {
    project:{},
    length : -1,
    redirect : false
  }

    popPDF(url) {
      if(url != null)
      {
      var ref = window.open(url,"thePop","menubar=1,resizable=1,scrollbars=1,status=1,height=1920,width=1020,top=0")
      ref.focus();
      }

      else{
        alert("No PDF to Show!!")
      }
    }
    
    componentDidMount() {
      const id = this.props.match.params.id;
      this.props.getProjectbyID(id);
    }    
    
    componentWillReceiveProps(props) {
      this.setState({
        project : props.project
      })
    }

    render(){
      var pro = this.state.project;
      var pro_len = Object.keys(pro).length;

    return (
      <div>
      <CustomLayout>
        {
          pro_len > 0 ? (
          <div key = {pro.id}>
            <Descriptions bordered>
            <Descriptions.Item label="PROJECT TITLE" span={3}>{ pro.pro_title }</Descriptions.Item>   
            <Descriptions.Item label="PROJECT TYPE" span={3}>{ pro.p_type }</Descriptions.Item>
            <Descriptions.Item label="PRINCIPLE INVESTIGATOR/COORDINATOR" span={3}>{ pro.investigator }</Descriptions.Item>
            <Descriptions.Item label="CO-INVESTIGATOR1" span={3}>{ pro.co_inves1 }</Descriptions.Item>
            <Descriptions.Item label="CO-INVESTIGATOR2" span={3}>{ pro.co_inves2 }</Descriptions.Item>
            <Descriptions.Item label="PROJECT STATUS" span={3}>{ pro.pro_type }</Descriptions.Item>
            <Descriptions.Item label="FUNDING AGENT" span={3}>{ pro.funding_agent }</Descriptions.Item>
            <Descriptions.Item label="AMOUNT" span={3}>{ pro.amt }</Descriptions.Item>
            <Descriptions.Item label="DURATION FROM" span={3}>{ pro.durationfrom }</Descriptions.Item>
            <Descriptions.Item label="DURATION TO" span={3}>{ pro.durationto }</Descriptions.Item>
            <Descriptions.Item label="DEPARTMENT" span={3}>{ pro.department }</Descriptions.Item>
            <Descriptions.Item label="CO-DEPARTMENT" span={3}>{ pro.co_dep }</Descriptions.Item>
            <Descriptions.Item label="CO-INSTITUTION" span={3}>{ pro.co_inst }</Descriptions.Item>
            <Descriptions.Item label="PROJECT ABSTRACT" span={3}>{ pro.pro_abstract }</Descriptions.Item>
            <Descriptions.Item label="PDF" >
            <Button span={3} target="ref" onClick={() => this.popPDF(pro.pdf)}>View</Button>
            </Descriptions.Item>
            </Descriptions>
           <br /><br/>
          </div>
      ) : (<h1></h1>)
      }
      </CustomLayout>
      </div>
    );
      
    }
}

const mapStateToProps = state => ({
  project: state.project.project_by_id
});


export default connect(mapStateToProps,{ getProjectbyID })(ProAdDetails);