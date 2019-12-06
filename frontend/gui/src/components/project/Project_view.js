import React from 'react';
import { Descriptions,Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { getProject } from '../../actions/project';
import history from '../common/history';

class Project_view extends React.Component{

  static propTypes = {
    project: PropTypes.array.isRequired
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

    addRedirect = () => {
      history.push('/project/add');

      //window.open("/qualification/edit","_self");
    }


    editRedirect = (e) => {
        var id = e.target.id;
        history.push(`/project/edit/${id}`);
        
        //console.log(e.target.id);
        //window.open("/qualification/edit","_self");
    }


    
      componentDidMount() {
        this.props.getProject();
        this.setState({ length: Object.keys(this.props.project).length });
      }      

      componentWillReceiveProps(props) {
          var n = 0,on_going_count = 0,comp_count = 0;
          props.project.map(pro =>
            (
              pro.pro_type === "on_going" ? (on_going_count++,n++) : 
              (pro.pro_type === "completed" ? (comp_count++,n++) : (null))
            )
            );

            localStorage.setItem('n',n);
            localStorage.setItem('on_going_count',on_going_count);
            localStorage.setItem('comp_count',comp_count);

      }

    render(){
        var n = localStorage.getItem('n');;
        var on_going_count = localStorage.getItem('on_going_count');;
        var comp_count = localStorage.getItem('comp_count');

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
          pro.pro_type === "on_going" ? ( 
          <div key = {pro.id}>
              <div align = "right">
                <Button id = {pro.id} type = "primary" onClick={this.editRedirect}>Edit</Button>
              </div>
              <br/>
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
          pro.pro_type === "completed" ? ( 
          <div key = {pro.id}>
            <div align = "right">
              <Button id = {pro.id} type = "primary" onClick={this.editRedirect}>Edit</Button>
            </div>
            <br/>
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

      <Button type="primary" onClick={this.addRedirect}>Add Project</Button>
      </CustomLayout>
      </div>
    );
      
    }
}

const mapStateToProps = state => ({
  project: state.project.project
});


export default connect(mapStateToProps,{ getProject })(Project_view);