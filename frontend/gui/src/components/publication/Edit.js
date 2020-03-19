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
    first_author: '',
    corres_author: '',
    all_auth_inorder: '', 
    journal_name: '',
    volume: '',
    issue: '',
    page_no: '',
    publisher: '',
    impact_factor: '',
    ref_journal: '',
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
  if(e.target.value === "")
  {
    this.setState({
      [e.target.name]: ""
    });
  }

  else{
    this.setState({
      [e.target.name]: e.target.value
    });
  }
}

onFileChange = e => {
  this.setState({
    file : e.target.files[0],
    filechanged : true
  });
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
  form_data.append('level',this.state.level);
  form_data.append('year', this.state.year);
  form_data.append('first_author ', this.state.first_author );
  form_data.append('corres_author ', this.state.corres_author );
  form_data.append('all_auth_inorder ', this.state.all_auth_inorder );
  form_data.append('journal_name', this.state.journal_name);
  form_data.append('volume', this.state.volume === null ? '' : this.state.volume);
  form_data.append('issue',this.state.issue === null ? '' : this.state.issue);
  form_data.append('page_no', this.state.page_no);
  form_data.append('publisher', this.state.publisher);
  //form_data.append('impact_factor', this.state.impact_factor);
  form_data.append('ref_journal', this.state.ref_journal);
  
  /*
  for (var pair of form_data.entries()) {
    console.log(pair[0]+ ', ' + pair[1]); 
  }
  */

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
      first_author: props.publication.first_author,
      corres_author: props.publication.corres_author,
      all_auth_inorder: props.publication.all_auth_inorder, 
      journal_name: props.publication.journal_name,
      volume: props.publication.volume,
      issue: props.publication.issue,
      page_no: props.publication.page_no,
      publisher: props.publication.publisher,
      impact_factor: props.publication.impact_factor,
      ref_journal: props.publication.ref_journal,
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
    const year = [];

    for (let i = 1950;i <= (new Date().getFullYear());i++) {
      year.push(<option key = {i} value = {i}>{i}</option>)
    }

    return (
      <div>
        <CustomLayout>
        {
        publi_len > 0 ? (
        <Form key = {publi.id} onSubmit ={this.onSubmit}>
        <Form.Item label="LEVEL">
            <select name="level" defaultValue = {this.state.level} onChange = {this.onChange}>
            <option value="International">International</option>
            <option value="National">National</option>
            </select>
          </Form.Item>
          <Form.Item label="TITLE">
            <Input name = "title" defaultValue = {this.state.title} placeholder="Enter Title" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="FIRST AUTOR">
            <Input name = "first_author"  defaultValue = {this.state.first_author} placeholder="Enter First Author"  onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="CORRESPONDING AUTHOR">
            <Input name = "corres_author" defaultValue = {this.state.corres_author} placeholder="Enter Corresponding Author" onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="ALL AUTHOR'S INCLUDING THE ABOVE IN ORDER">
            <Input name = "all_auth_inorder"  defaultValue = {this.state.all_auth_inorder} placeholder="" onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="JOURNAL NAME">
            <Input name = "journal_name"  defaultValue = {this.state.journal_name} placeholder="Enter Journal Name"  onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="VOLUME">
            <Input type = "number" name = "volume"  defaultValue = {this.state.volume} placeholder="" onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="ISSUE">
            <Input type = "number" name = "issue"  defaultValue = {this.state.issue} placeholder="" onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="YEAR">
          <input type="month" name = "year" required onChange = {this.onChange} defaultValue = {this.state.year}></input>
           </Form.Item>
          <Form.Item label="PAGE NO">
            <Input name = "page_no"  placeholder="Enter Page No" defaultValue = {this.state.page_no}  onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="PUBLISHER">
            <Input name = "publisher" placeholder="Enter Publisher Name"  defaultValue = {this.state.publisher} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="IMPACT FACTOR IN THE YEAR OF PUBLICATION">
            <Input  name = "impact_factor" defaultValue = {this.state.impact_factor} placeholder="Enter Impact Factor"  onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="IS IT A REFEREED JOURNAL?">
          <select name="ref_journal"  defaultValue = {this.state.ref_journal} onChange = {this.onChange}>
            <option disabled value=""> -- select an option -- </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          </Form.Item>
          <Form.Item label="EXISTING PDF">
            <Button span={3} target="ref" onClick={() => this.popPDF(publi.pdf)}>View</Button>
          </Form.Item>
          <Form.Item label="ADD NEW PDF">
            <input type="file" name="pdf" className="file_upload_btn" accept="application/pdf"  onChange = {this.onFileChange}></input>
          </Form.Item>
          <br/>
          <Form.Item>
            <Button type="primary" htmlType = "submit" disabled = {this.state.disabled}>Submit</Button>
          </Form.Item>
        </Form>
        ) : (<h1></h1>)
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