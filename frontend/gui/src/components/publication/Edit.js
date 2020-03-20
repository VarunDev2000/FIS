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
          <div class="main">
          <center>
                <div class="container">
                    <form onSubmit ={this.onSubmit} class="appointment-form" id="appointment-form">
                        <h2>Edit Publication</h2>
                        <div class="form-group-1">
                        <select name="level"  defaultValue = {this.state.level} onChange = {this.onChange}>
                          <option value="International">International</option>
                          <option value="National">National</option>
                        </select>
                            <input name = "title" defaultValue = {this.state.title} placeholder="Title" required onChange = {this.onChange} />
                            <input type="text" name = "first_author" defaultValue = {this.state.first_author} placeholder="First Author"  onChange = {this.onChange} />
                            <input type="text" name = "corres_author" defaultValue = {this.state.corres_author} placeholder="Corresponding Author" onChange = {this.onChange}  />
                            <input type="text" name = "all_auth_inorder" defaultValue = {this.state.all_auth_inorder} placeholder="All Authors in Order"  onChange = {this.onChange} />
                            <input type="text" name = "journal_name" defaultValue = {this.state.journal_name} placeholder="Journal Name"  onChange = {this.onChange}  />
                            <input type = "number" name = "volume"   defaultValue = {this.state.volume} placeholder="Volume" onChange = {this.onChange}/>
                            <input type = "number" name = "issue" defaultValue = {this.state.issue} placeholder="Issue" onChange = {this.onChange} />
                            <p className="label-p">Year</p>
                            <input type="month" name = "year" defaultValue = {this.state.year} required onChange = {this.onChange}></input>
                            <input name = "page_no" defaultValue = {this.state.page_no}  placeholder="Page No"  onChange = {this.onChange} />
                            <input name = "publisher" defaultValue = {this.state.publisher} placeholder="Publisher Name"  onChange = {this.onChange} />
                            <input name = "impact_factor" defaultValue = {this.state.impact_factor} placeholder="Impact Factor"  onChange = {this.onChange} />
                            <p className="label-p">Is it a Refereed Journal?</p>
                            <select name="ref_journal" defaultValue = {this.state.ref_journal} onChange = {this.onChange}>
                              <option disabled value="DEFAULT"> -- select an option -- </option>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </select>
                        </div>
                        <br/>
                        <div class="form-submit">
                            <input type="submit" name="submit" disabled = {this.state.disabled} id="submit" class="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </center>
            </div>
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