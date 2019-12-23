import React from 'react';
import { Descriptions,Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { getCSW } from '../../actions/csw';
import history from '../common/history';

class CSW_view extends React.Component{

  static propTypes = {
    csw: PropTypes.array.isRequired
  }

  state = {
    csw:{},
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
      history.push('/csw/add');

      //window.open("/csw/add","_self");
    }


    editRedirect = (e) => {
        var id = e.target.id;
        history.push(`/csw/edit/${id}`);
        
        //console.log(e.target.id);
        //window.open("/csw/edit","_self");
    }

    
    componentDidMount() {
      this.props.getCSW();
    }
      
    componentWillReceiveProps(props) {
        var n = 0,org_count = 0,cha_count = 0,paper_count = 0;
  
        props.csw.map(csw =>
          (
            csw.csw_type === "organized" ? (org_count++,n++) : 
            (csw.csw_type === "cha_co-cha" ? (cha_count++,n++) :
            (csw.csw_type === "paper" ? (paper_count++,n++) : (null)))
          )
          );
        localStorage.setItem('n',n);
        localStorage.setItem('org_count',org_count);
        localStorage.setItem('cha_count',cha_count);
        localStorage.setItem('paper_count',paper_count);
    }


    render(){
        var n = localStorage.getItem('n');
        var org_count = localStorage.getItem('org_count');
        var cha_count = localStorage.getItem('cha_count');
        var paper_count = localStorage.getItem('paper_count');


    return (
      <div>
      <CustomLayout>
      <Button type="primary" onClick={this.addRedirect}>Add</Button>
      <br/><br/><br/>
      {
      n === 0 ? (
                  <div>
                  </div>
      ) : (
        <div>
        {
        org_count > 0 ? (
        <div>
        <h2>ORGANIZED</h2>
        <br/>
        {
        this.props.csw.map(csw => (
          csw.csw_type === "organized" ? ( 
          <div  key = {csw.id}>
            <Descriptions bordered>
            <Descriptions.Item label="TITLE" span={3}>{ csw.title }</Descriptions.Item>   
            <Descriptions.Item label="TYPE" span={3}>{ csw.type_name }</Descriptions.Item>
            <Descriptions.Item label="LEVEL" span={3}>{ csw.level }</Descriptions.Item>
            <Descriptions.Item label="PDF" >
            <Button span={3} target="ref" onClick={() => this.popPDF(csw.pdf)}>View</Button>
            </Descriptions.Item>
            </Descriptions>
            <Button id = {csw.id} type = "primary" className="editButton" onClick={this.editRedirect}>Edit</Button>
          <br /><br/>
          </div>
          )  :  (null))
      )
      }
      </div>
      ) : (null)
      }

      {
        cha_count > 0 ? (
        <div>
        <h2>CHAIRED/CO-CHAIRED</h2>
        <br/>
        {
        this.props.csw.map(csw => (
          csw.csw_type === "cha_co-cha" ? ( 
          <div key = {csw.id}>
            <Descriptions bordered>
            <Descriptions.Item label="TITLE" span={3}>{ csw.title }</Descriptions.Item>   
            <Descriptions.Item label="TYPE" span={3}>{ csw.type_name }</Descriptions.Item>
            <Descriptions.Item label="LEVEL" span={3}>{ csw.level }</Descriptions.Item>
            <Descriptions.Item label="PDF" >
            <Button span={3} target="ref" onClick={() => this.popPDF(csw.pdf)}>View</Button>
            </Descriptions.Item>
            </Descriptions>
            <Button id = {csw.id} type = "primary" className="editButton" onClick={this.editRedirect}>Edit</Button>
          <br /><br/>
          </div>
          )  :  (null))
      )
      }
      </div>
      ) : (null)
      }

      {
        paper_count > 0 ? (
        <div>
        <h2>PAPER PRESENTED</h2>
        <br/>
        {
        this.props.csw.map(csw => (
          csw.csw_type === "paper" ? ( 
          <div key = {csw.id}>
            <Descriptions bordered>
            <Descriptions.Item label="TITLE" span={3}>{ csw.title }</Descriptions.Item>   
            <Descriptions.Item label="TYPE" span={3}>{ csw.type_name }</Descriptions.Item>
            <Descriptions.Item label="COUNTRY" span={3}>{ csw.country }</Descriptions.Item>
            <Descriptions.Item label="PDF" >
            <Button span={3} target="ref" onClick={() => this.popPDF(csw.pdf)}>View</Button>
            </Descriptions.Item>
            </Descriptions>
            <Button id = {csw.id} type = "primary" className="editButton" onClick={this.editRedirect}>Edit</Button>
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

      </CustomLayout>
      </div>
    );
      
    }
}

const mapStateToProps = state => ({
  csw: state.csw.csw
});


export default connect(mapStateToProps,{ getCSW })(CSW_view);