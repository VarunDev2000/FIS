import React from 'react';
import { Form, Input, Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { editPublication,getPublicationbyID,deletePublication } from '../../actions/publication';


class PubliEdit extends React.Component {

  state = {
    publication:{},
    publi:{},
    redirect : false,

    title: '',
    level: '',
    year: '',
    pdf: '',

    file : null,
    filechanged : false,
    disabled : false,
}

static propTypes = {
  editPublication: PropTypes.func.isRequired,
  publication: PropTypes.object.isRequired,
  deletePublication: PropTypes.func.isRequired,
}

delete = (e) => {
  e.preventDefault();
  const id = this.props.match.params.id;
  var conf = window.confirm("Do you want to delete ?");
  if (conf === true) {
    this.props.deletePublication(id);
    window.open('/publication',"_self");
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
  form_data.append('title', this.state.title);
  form_data.append('level', this.state.level);
  form_data.append('year', this.state.year);
  
  this.props.editPublication(form_data,id);

  setTimeout( function(){
    window.open("/publication","_self")
  }, 1000 );
};


setStates(props)
{
    this.setState({
      title : props.publication.title,
      level : props.publication.level,
      year : props.publication.year,
      pdf : props.publication.pdf
    })
}


componentDidMount()
{    
  const id = this.props.match.params.id;
  this.props.getPublicationbyID(id);
}


componentWillReceiveProps(props) {
    this.setStates(props);
    this.setState({
      publi : props.publication
    })
}

  render() {
    var publi = this.state.publi;
    var publi_len = Object.keys(publi).length

    return (
      <div>
        <CustomLayout>
        {
        publi_len > 0 ? (
        <Form key = {publi.id} onSubmit ={this.onSubmit}>
        <div align="right">
          <Button type="danger" htmlType = "submit" onClick = {this.delete}>Delete</Button>
        </div>
          <Form.Item label="TITLE">
            <Input name = "title" placeholder="Enter Title" required defaultValue = {publi.title} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="LEVEL">
            <Input name = "level" placeholder="Enter Level" required defaultValue = {publi.level} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="YEAR">
            <Input name = "year" placeholder="Enter Year" required defaultValue = {publi.year} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="EXISTING PDF">
            <Button span={3} target="ref" onClick={() => this.popPDF(publi.pdf)}>View</Button>
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
    publication: state.publication.publication_by_id
});


export default connect(mapStateToProps,{ editPublication,getPublicationbyID,deletePublication })(PubliEdit);