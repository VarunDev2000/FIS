import React from 'react';
import { Descriptions,Button } from 'antd';
import { Redirect } from 'react-router-dom';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { getProject } from '../../actions/project';

class Project_view extends React.Component{

  static propTypes = {
    csw: PropTypes.array.isRequired
  }

  state = {
    project:{},
    length : -1,
    redirect : false
  }


    setRedirect = () => {
      this.setState({
        redirect: true
      })
    }

    popPDF(url) {
      var ref = window.open(url,"thePop","menubar=1,resizable=1,scrollbars=1,status=1,height=1920,width=1020,top=0")
      ref.focus();
    }

    renderRedirect = (type) => {
      if (this.state.redirect && type === 'edit') {
        return <Redirect to = '/project/edit' />
      }

      else if (this.state.redirect && type === 'add') {
        return <Redirect to = '/project/add' />
      }
    }

    
      componentDidMount() {
        this.props.getProject();
        this.setState({ length: Object.keys(this.props.project).length });
      }
      

    render(){
        var n = 0;

        var on_going_count = 0;
        var comp_count = 0;
  
        this.props.project.map(pro =>
          (
            pro.pro_type == "on_going" ? (on_going_count++,n++) : 
            (pro.pro_type == "completed" ? (comp_count++,n++) : (n = n))
          )
          );

    return (
      <div>
      <CustomLayout>

      {
      n == 0 ? (
                  <div>
                  </div>
      ) : (
        <div>
        {
        on_going_count > 0 ? (
        <div>
        <h2>ON GOING</h2>
        <br/>
        {
        this.props.project.map(pro => (
          pro.pro_type == "on_going" ? ( 
          <div>
            <Descriptions bordered>
            <Descriptions.Item label="PROJECT TITLE" span={3}>{ pro.pro_title }</Descriptions.Item>   
            <Descriptions.Item label="FUNDING AGENT" span={3}>{ pro.funding_agent }</Descriptions.Item>
            <Descriptions.Item label="AMOUNT" span={3}>{ pro.amt }</Descriptions.Item>
            <Descriptions.Item label="PDF" >
              <Button span={3} target="ref" onClick={() => this.popPDF(pro.pdf)}>View</Button>
            </Descriptions.Item>
            </Descriptions>
          <br /><br/>
          </div>
          )  :  (null))
      )
      }
      </div>
      ) : (null)
      }

      {
        comp_count > 0 ? (
        <div>
        <h2>COMPLETED</h2>
        <br/>
        {
        this.props.project.map(pro => (
          pro.pro_type == "completed" ? ( 
          <div>
            <Descriptions bordered>
            <Descriptions.Item label="PROJECT TITLE" span={3}>{ pro.pro_title }</Descriptions.Item>   
            <Descriptions.Item label="FUNDING AGENT" span={3}>{ pro.funding_agent }</Descriptions.Item>
            <Descriptions.Item label="AMOUNT" span={3}>{ pro.amt }</Descriptions.Item>
            <Descriptions.Item label="PDF" >
              <Button span={3} target="ref" onClick={() => this.popPDF(pro.pdf)}>View</Button>
            </Descriptions.Item>
            </Descriptions>
          <br /><br/>
          </div>
          )  :  (null))
      )
      }
      </div>
      ) : (null)
      }
      </div>
      )

      }

      {this.renderRedirect('add')}
      <Button type="primary" onClick={this.setRedirect}>Add Project</Button>
      </CustomLayout>
      </div>
    );
      
    }
}

const mapStateToProps = state => ({
  project: state.project.project
});


export default connect(mapStateToProps,{ getProject })(Project_view);