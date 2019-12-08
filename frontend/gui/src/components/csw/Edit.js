import React from 'react';
import { Form, Input, Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { editCSW,getCSWbyID,deleteCSW } from '../../actions/csw';


class CSWEdit extends React.Component {

  state = {
    c_s_w:{},
    csw:{},
    redirect : false,

    title: '',
    type_name: '',
    level: '',
    country: '',
    csw_type: '',
    pdf: '',

    file : null,
    filechanged : false,
    disabled : false,
}

static propTypes = {
  editCSW: PropTypes.func.isRequired,
  c_s_w: PropTypes.object.isRequired,
  deleteCSW: PropTypes.func.isRequired,
}

delete = (e) => {
  e.preventDefault();
  const id = this.props.match.params.id;
  var conf = window.confirm("Do you want to delete ?");
  if (conf === true) {
    this.props.deleteCSW(id);
    window.open('/csw',"_self");
  } 
}

onChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
}

onFileChange = e => {
  this.setState({
    file : e.target.files[0],
    filechanged : true
  });
}

popPDF(url) {
    var ref = window.open(url,"thePop","menubar=1,resizable=1,scrollbars=1,status=1,height=1920,width=1020,top=0")
    ref.focus();
  }

onSubmit = (e) => {

    this.setState({
        disabled : true
      })
      e.preventDefault();
      const id = this.props.match.params.id;
    
      if((this.state.csw_type === 'organized' || this.state.csw_type === 'cha_co-cha'))
      {
      let form_data = new FormData();
      if(this.state.filechanged == true)
      {
        form_data.append('pdf', this.state.file, this.state.file.name);
      }
      form_data.append('title', this.state.title);
      form_data.append('type_name', this.state.type_name);
      form_data.append('level', this.state.level);
      form_data.append('csw_type', this.state.csw_type);
      
      //var pair;
      //display values in console
      /*
      for (pair of form_data.entries()) {
        console.log(pair[0]+ ' : ' + pair[1]); 
      }
      */
    
      this.props.editCSW(form_data,id);
    
      setTimeout( function(){
        window.open("/csw","_self")
      }, 1000 );
      }
    
      else if(this.state.csw_type === 'paper')
      {
        let form_data = new FormData();
        if(this.state.filechanged == true)
        {
          form_data.append('pdf', this.state.file, this.state.file.name);
        }
        form_data.append('title', this.state.title);
        form_data.append('type_name', this.state.type_name);
        form_data.append('country', this.state.country);
        form_data.append('csw_type', this.state.csw_type);
        
        //display values in console
        /*
        for (pair of form_data.entries()) {
          console.log(pair[0]+ ' : ' + pair[1]); 
        }
        */
      
        this.props.editCSW(form_data,id);
    
        setTimeout( function(){
          window.open("/csw","_self")
        }, 1000 );
      }
    
      else{
      }
    
};


setStates(props)
{
    if (props.c_s_w.csw_type === 'organized' || props.c_s_w.csw_type === 'cha_co-cha')
    {
        this.setState({
            title: props.c_s_w.title,
            type_name: props.c_s_w.type_name,
            level: props.c_s_w.level,
            csw_type: props.c_s_w.csw_type,
            pdf: props.c_s_w.pdf,
        })
    }

    else
    {
        this.setState({
            title: props.c_s_w.title,
            type_name: props.c_s_w.type_name,
            country: props.c_s_w.country,
            csw_type: props.c_s_w.csw_type,
            pdf: props.c_s_w.pdf,
        })
    }
}


componentDidMount()
{    
  const id = this.props.match.params.id;
  this.props.getCSWbyID(id);
}


componentWillReceiveProps(props) {
    this.setStates(props);
    this.setState({
      csw : props.c_s_w
    })
}

  render() {
    var csw = this.state.csw;
    var csw_len = Object.keys(csw).length

    return (
      <div>
        <CustomLayout>
        {
        csw_len > 0 ? (
            csw.csw_type === 'organized' || csw.csw_type === 'cha_co-cha' ? (
                <div key = {csw.id}>
                <Form onSubmit = {this.onSubmit}>
                <Form.Item label="TITLE">
                <Input name = "title" placeholder="Enter Title" required defaultValue = {csw.title} onChange = {this.onChange} />
                </Form.Item>
                <Form.Item label="TYPE">
                <Input name = "type_name" placeholder="Enter Type Name" required defaultValue = {csw.type_name} onChange = {this.onChange} />
                </Form.Item>
                <Form.Item label="LEVEL">
                <Input name = "level" placeholder="Enter Level" required defaultValue = {csw.level} onChange = {this.onChange} />
                </Form.Item>
                <Form.Item label="EXISTING PDF">
                  <Button span={3} target="ref" onClick={() => this.popPDF(csw.pdf)}>View</Button>
                </Form.Item>
                <Form.Item label="ADD NEW PDF">
                  <input type="file" name="pdf" accept="application/pdf"  onChange = {this.onFileChange}></input>
                </Form.Item>
                <br/>
                <Form.Item>
                <Button type="primary" htmlType = "submit" disabled = {this.state.disabled}>Submit</Button>
                </Form.Item>
                </Form>
                </div>
              ) : (
              csw.csw_type === 'paper' ? (
                <div key = {csw.id}>
                <Form onSubmit = {this.onSubmit}>
                <Form.Item label="TITLE">
                <Input name = "title" placeholder="Enter Title" required defaultValue = {csw.title} onChange = {this.onChange} />
                </Form.Item>
                <Form.Item label="TYPE">
                <Input name = "type_name" placeholder="Enter Type Name" required defaultValue = {csw.type_name} onChange = {this.onChange} />
                </Form.Item>
                <Form.Item label="COUNTRY">
                <Input name = "country" placeholder="Enter Country Name" required defaultValue = {csw.country} onChange = {this.onChange} />
                </Form.Item>
                <Form.Item label="EXISTING PDF">
                  <Button span={3} target="ref" onClick={() => this.popPDF(csw.pdf)}>View</Button>
                </Form.Item>
                <Form.Item label="ADD NEW PDF">
                  <input type="file" name="pdf" accept="application/pdf"  onChange = {this.onFileChange}></input>
                </Form.Item>
                <br/>
                <Form.Item>
                <Button type="primary" htmlType = "submit" disabled = {this.state.disabled}>Submit</Button>
                </Form.Item>
                </Form>
                </div>
              ) : (
                null
              )) 
        ) : (<h1>Error!</h1>)
        }
        </CustomLayout>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    c_s_w: state.csw.csw_by_id
});


export default connect(mapStateToProps,{ editCSW,getCSWbyID,deleteCSW })(CSWEdit);