import React from 'react';
import { Descriptions,Button } from 'antd';
import { Redirect } from 'react-router-dom';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { getCSW } from '../../actions/csw';

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

    renderRedirect = (type) => {
      if (this.state.redirect && type === 'edit') {
        return <Redirect to = '/csw/edit' />
      }

      else if (this.state.redirect && type === 'add') {
        return <Redirect to = '/csw/add' />
      }
    }

    
      componentDidMount() {
        this.props.getCSW();
        this.setState({ length: Object.keys(this.props.csw).length });
      }
      

    render(){
        var n = 0;

        var org_count = 0;
        var cha_count = 0;
        var paper_count = 0;
  
        this.props.csw.map(csw =>
          (
            csw.csw_type === "organized" ? (org_count++,n++) : 
            (csw.csw_type === "cha_co-cha" ? (cha_count++,n++) :
            (csw.csw_type === "paper" ? (paper_count++,n++) : (null)))
          )
          );

    return (
      <div>
      <CustomLayout>

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
          <div>
            <Descriptions bordered>
            <Descriptions.Item label="TITLE" span={3}>{ csw.title }</Descriptions.Item>   
            <Descriptions.Item label="TYPE" span={3}>{ csw.type_name }</Descriptions.Item>
            <Descriptions.Item label="LEVEL" span={3}>{ csw.level }</Descriptions.Item>
            <Descriptions.Item label="PDF" >
            <Button span={3} target="ref" onClick={() => this.popPDF(csw.pdf)}>View</Button>
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
        cha_count > 0 ? (
        <div>
        <h2>CHAIRED/CO-CHAIRED</h2>
        <br/>
        {
        this.props.csw.map(csw => (
          csw.csw_type === "cha_co-cha" ? ( 
          <div>
            <Descriptions bordered>
            <Descriptions.Item label="TITLE" span={3}>{ csw.title }</Descriptions.Item>   
            <Descriptions.Item label="TYPE" span={3}>{ csw.type_name }</Descriptions.Item>
            <Descriptions.Item label="LEVEL" span={3}>{ csw.level }</Descriptions.Item>
            <Descriptions.Item label="PDF" >
            <Button span={3} target="ref" onClick={() => this.popPDF(csw.pdf)}>View</Button>
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
        paper_count > 0 ? (
        <div>
        <h2>PAPER PRESENTED</h2>
        <br/>
        {
        this.props.csw.map(csw => (
          csw.csw_type === "paper" ? ( 
          <div>
            <Descriptions bordered>
            <Descriptions.Item label="TITLE" span={3}>{ csw.title }</Descriptions.Item>   
            <Descriptions.Item label="TYPE" span={3}>{ csw.type_name }</Descriptions.Item>
            <Descriptions.Item label="COUNTRY" span={3}>{ csw.country }</Descriptions.Item>
            <Descriptions.Item label="PDF" >
            <Button span={3} target="ref" onClick={() => this.popPDF(csw.pdf)}>View</Button>
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
      <Button type="primary" onClick={this.setRedirect}>Add</Button>
      </CustomLayout>
      </div>
    );
      
    }
}

const mapStateToProps = state => ({
  csw: state.csw.csw
});


export default connect(mapStateToProps,{ getCSW })(CSW_view);