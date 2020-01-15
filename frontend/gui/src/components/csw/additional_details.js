import React from 'react';
import { Form, Input,Descriptions, Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { getCSWbyID } from '../../actions/csw';


class AdDetails_CSW extends React.Component {

  state = {
    c_s_w:{},
    csw:{},
    redirect : false,
    disabled : false,
}

static propTypes = {
  c_s_w: PropTypes.object.isRequired,
}


popPDF(url) {
  if(url != null)
  {
  var ref = window.open(url,"thePop","menubar=1,resizable=1,scrollbars=1,status=1,height=1920,width=1020,top=0")
  ref.focus();
  }

  else{
    alert("No PDF Available!!")
  }
}

componentDidMount()
{    
  const id = this.props.match.params.id;
  this.props.getCSWbyID(id);
}


componentWillReceiveProps(props) {
    this.setState({
      csw : props.c_s_w
    })
}

  render() {
    var csw = this.state.csw;
    var csw_len = Object.keys(csw).length;
    var cswtype = csw.csw_type;

    return (
      <div>
        <CustomLayout>
        {
        csw_len > 0 ? (
          cswtype === 'organized' ? (
            <div  key = {csw.id}>
            <Descriptions bordered>
            <Descriptions.Item label="TYPE" span={3}>{ csw.type_name }</Descriptions.Item>
            <Descriptions.Item label="LEVEL" span={3}>{ csw.level }</Descriptions.Item>
            <Descriptions.Item label="TITLE" span={3}>{ csw.title }</Descriptions.Item>   
            <Descriptions.Item label="ROLE" span={3}>{ csw.role }</Descriptions.Item>
            <Descriptions.Item label="DURATION" span={3}>{ csw.durationfrom +" to "+csw.durationto}</Descriptions.Item>
            <Descriptions.Item label="PDF" >
            <Button span={3} target="ref" onClick={() => this.popPDF(csw.pdf)}>View</Button>
            </Descriptions.Item>
            </Descriptions>
            </div>
          ) : (
          cswtype === 'paper' ? (
            <div key = {csw.id}>
            <Descriptions bordered>
            <Descriptions.Item label="TYPE" span={3}>{ csw.type_name }</Descriptions.Item>
            <Descriptions.Item label="LEVEL" span={3}>{ csw.level }</Descriptions.Item>
            <Descriptions.Item label="TITLE" span={3}>{ csw.title }</Descriptions.Item>  
            <Descriptions.Item label="ORGANIZING INSTITUTION" span={3}>{ csw.institution }</Descriptions.Item>   
            <Descriptions.Item label="COUNTRY" span={3}>{ csw.country }</Descriptions.Item>
            <Descriptions.Item label="DURATION" span={3}>{ csw.durationfrom +" to "+csw.durationto}</Descriptions.Item>
            <Descriptions.Item label="PAPER TITLE" span={3}>{ csw.paper_title }</Descriptions.Item>
            <Descriptions.Item label="NATURE OF PRESENTATION" span={3}>{ csw.nature_of_pres }</Descriptions.Item>
            <Descriptions.Item label="PRESENTED BY" span={3}>{ csw.pres_by }</Descriptions.Item>
            <Descriptions.Item label="ALL AUTHORS IN ORDER" span={3}>{ csw.all_auth }</Descriptions.Item>
            <Descriptions.Item label="IS PUBLISHED IN PROCEEDING OF THE CONFERENCE" span={3}>{ csw.is_publi }</Descriptions.Item>
            <Descriptions.Item label="PDF" >
            <Button span={3} target="ref" onClick={() => this.popPDF(csw.pdf)}>View</Button>
            </Descriptions.Item>
            </Descriptions>
            <br /><br/>
            </div>
          ) : (
            cswtype === 'attended' ? (
              <div key = {csw.id}>
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
            ) : (
              cswtype === 'cha_co-cha' ? (
                <div key = {csw.id}>
                <Descriptions bordered>
                <Descriptions.Item label="TYPE" span={3}>{ csw.type_name }</Descriptions.Item>
                <Descriptions.Item label="LEVEL" span={3}>{ csw.level }</Descriptions.Item>
                <Descriptions.Item label="TITLE" span={3}>{ csw.title }</Descriptions.Item>
                <Descriptions.Item label="ROLE" span={3}>{ csw.role }</Descriptions.Item>
                <Descriptions.Item label="INSTITUTION" span={3}>{ csw.institution }</Descriptions.Item>   
                <Descriptions.Item label="DURATION" span={3}>{ csw.durationfrom +" to "+csw.durationto}</Descriptions.Item>
                <Descriptions.Item label="PDF" >
                <Button span={3} target="ref" onClick={() => this.popPDF(csw.pdf)}>View</Button>
                </Descriptions.Item>
                </Descriptions>
                <br /><br/>
                </div>
              ) : (
                null
              ))
          )) 
        ) : (<h1></h1>)
        }
        </CustomLayout>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    c_s_w: state.csw.csw_by_id
});


export default connect(mapStateToProps,{getCSWbyID })(AdDetails_CSW);