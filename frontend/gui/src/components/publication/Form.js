import React from 'react';
import { Form, Input, Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { addPublication } from '../../actions/publication';

import '../styles/assets2/css/style.css'
import '../styles/assets2/fonts/material-icon/css/material-design-iconic-font.min.css'

class CustomForm extends React.Component {

  state = {
    redirect : false,
    title: '',
    level: 'International',
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
    disabled : false,
    filechanged : false,
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


onSubmit = (e) => {

  e.preventDefault();

  if(this.state.year === "")
  {
    alert("Year Field can't be Empty!!");
  }
  else{
    this.setState({
      disabled : true
    })

    let form_data = new FormData();
    if(this.state.filechanged == true)
    {
    form_data.append('pdf', this.state.file, this.state.file.name);
    }
    form_data.append('title', this.state.title);
    form_data.append('level', this.state.level);
    form_data.append('year', this.state.year);
    form_data.append('first_author ', this.state.first_author );
    form_data.append('corres_author ', this.state.corres_author );
    form_data.append('all_auth_inorder ', this.state.all_auth_inorder );
    form_data.append('journal_name', this.state.journal_name);
    form_data.append('volume', this.state.volume);
    form_data.append('issue', this.state.issue);
    form_data.append('page_no', this.state.page_no);
    form_data.append('publisher', this.state.publisher);
    form_data.append('impact_factor', this.state.impact_factor);
    form_data.append('ref_journal', this.state.ref_journal);
    
    /*display values in console
    
    for (var pair of form_data.entries()) {
      console.log(pair[0]+ ' : ' + pair[1]); 
    }

    for (var value of form_data.values()) {
      console.log(value);
    }
    */
    this.props.addPublication(form_data);
    
    setTimeout( function(){
      window.open("/publication","_self")
    }, 1000 );
  }
};

/*
onSubmit = e => {
  
  e.preventDefault();
  if(this.props.type == 'add')
  {
  const {title,level,year,pdf} = this.state;

  const publi_info = {title,level,year,pdf};
    
    console.log(publi_info);
    this.props.addPublication(publi_info);
  }

  else{
    console.log("submit");
  }
}
*/


  render() {
    const year = [];

    for (let i = 1950;i <= (new Date().getFullYear());i++) {
      year.push(<option key = {i} value = {i}>{i}</option>)
    }

    return (
      <div>
        <CustomLayout>
        <div class="main">
	<center>
        <div class="container">
            <form onSubmit ={this.onSubmit} class="appointment-form" id="appointment-form">
                <h2>Add Publication</h2>
                <div class="form-group-1">
                <select name="level" onChange = {this.onChange}>
                  <option value="International">International</option>
                  <option value="National">National</option>
                </select>
                    <input name = "title" placeholder="Title" required onChange = {this.onChange} />
                    <input type="text" name = "first_author" placeholder="First Author"  onChange = {this.onChange} />
                    <input type="text" name = "corres_author" placeholder="Corresponding Author" onChange = {this.onChange}  />
                    <input type="text" name = "all_auth_inorder" placeholder="All Authors in Order"  onChange = {this.onChange} />
                    <input type="text" name = "journal_name" placeholder="Journal Name"  onChange = {this.onChange}  />
                    <input type = "number" name = "volume"  placeholder="Volume" onChange = {this.onChange}/>
                    <input type = "number" name = "issue" placeholder="Issue" onChange = {this.onChange} />
                    <p className="label-p">Year</p>
                    <input type="month" name = "year" required onChange = {this.onChange}></input>
                    <input name = "page_no" placeholder="Page No"  onChange = {this.onChange} />
                    <input name = "publisher" placeholder="Publisher Name"  onChange = {this.onChange} />
                    <input name = "impact_factor" placeholder="Impact Factor"  onChange = {this.onChange} />
                    <p className="label-p">Is it a Refereed Journal?</p>
                    <select name="ref_journal" defaultValue={'DEFAULT'} onChange = {this.onChange}>
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


        </CustomLayout>
      </div>
    );
  }
}


export default connect(null,{ addPublication })(CustomForm);