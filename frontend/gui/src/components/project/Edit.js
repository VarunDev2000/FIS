import React from 'react';
import { Form, Input, Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { editProject,getProjectbyID,deleteProject } from '../../actions/project';

class ProEdit extends React.Component {

  state = {
    project:{},
    pro:{},
    redirect : false,

    pro_title: '',
    funding_agent: '',
    amt: '',
    pro_type: '',
    pdf: '',

    file : null,
    filechanged : false,
    disabled : false,
}

static propTypes = {
  editProject: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
  deleteProject: PropTypes.func.isRequired,
}

delete = (e) => {
  e.preventDefault();
  const id = this.props.match.params.id;
  var conf = window.confirm("Do you want to delete ?");
  if (conf === true) {
    this.props.deleteProject(id);
    window.open('/project',"_self");
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
  let form_data = new FormData();
  if(this.state.filechanged == true)
  {
  form_data.append('pdf', this.state.file, this.state.file.name);
  }
  form_data.append('pro_title', this.state.pro_title);
  form_data.append('funding_agent', this.state.funding_agent);
  form_data.append('amt', this.state.amt);
  form_data.append('pro_type', this.state.pro_type);
  
  //display values in console
  /*
  for (var pair of form_data.entries()) {
    console.log(pair[0]+ ' : ' + pair[1]); 
  }
  */
  this.props.editProject(form_data,id);

  setTimeout( function(){
    window.open("/project","_self")
  }, 1000 );
};


setStates(props)
{
    this.setState({
      pro_title : props.project.pro_title,
      funding_agent : props.project.funding_agent,
      amt : props.project.amt,
      pdf : props.project.pdf,
      pro_type : props.project.pro_type,
    })
}


componentDidMount()
{    
  const id = this.props.match.params.id;
  this.props.getProjectbyID(id);
}


componentWillReceiveProps(props) {
    this.setStates(props);
    this.setState({
      pro : props.project
    })
}

  render() {
    var pro = this.state.pro;
    var pro_len = Object.keys(pro).length

    return (
      <div>
        <CustomLayout>
        {
        pro_len > 0 ? (
        <Form key = {pro.id} onSubmit ={this.onSubmit}>
        <div align="right">
          <Button type="danger" htmlType = "submit" onClick = {this.delete}>Delete</Button>
        </div>
        <Form.Item label="PROJECT TITLE">
          <Input name = "pro_title" placeholder="Enter Project Title" required defaultValue = {pro.pro_title} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="FUNDING AGENT">
          <Input name = "funding_agent" placeholder="Enter Funding Agent" required defaultValue = {pro.funding_agent} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="AMOUNT">
          <Input name = "amt" placeholder="Enter Amount" required defaultValue = {pro.amt} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="EXISTING PDF">
            <Button span={3} target="ref" onClick={() => this.popPDF(pro.pdf)}>View</Button>
          </Form.Item>
          <Form.Item label="ADD NEW PDF">
            <input type="file" name="pdf" accept="application/pdf"  onChange = {this.onFileChange}></input>
          </Form.Item>
          <br/>
          <Form.Item>
            <Button type="primary" htmlType = "submit" disabled = {this.state.disabled}>Submit</Button>
          </Form.Item>
        </Form>
        ) : (<h1>Error!</h1>)
        }
        </CustomLayout>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    project: state.project.project_by_id
});


export default connect(mapStateToProps,{ editProject,getProjectbyID,deleteProject })(ProEdit);
