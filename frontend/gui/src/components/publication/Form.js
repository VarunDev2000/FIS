import React from 'react';
import { Form, Input, Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { addPublication } from '../../actions/publication';


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
    ref_journal: 'Yes',
    pdf: '',
    file : null,
    disabled : false,
}

static propTypes = {
  addPublication: PropTypes.func.isRequired
}

onChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
}

onFileChange = e => {
  this.setState({
    file : e.target.files[0]
  });
}


onSubmit = (e) => {
  
  this.setState({
    disabled : true
  })
  e.preventDefault();

  let form_data = new FormData();
  form_data.append('pdf', this.state.file, this.state.file.name);
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
        <Form onSubmit ={this.onSubmit}>
          <Form.Item label="LEVEL">
            <select name="level" onChange = {this.onChange}>
            <option value="International">International</option>
            <option value="National">National</option>
            </select>
          </Form.Item>
          <Form.Item label="TITLE">
            <Input name = "title" placeholder="Enter Title" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="FIRST AUTOR">
            <Input name = "first_author" placeholder="Enter First Author" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="CORRESPONDING AUTHOR">
            <Input name = "corres_author" placeholder="Enter Corresponding Author" onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="ALL AUTHOR'S INCLUDING THE ABOVE IN ORDER">
            <Input name = "all_auth_inorder" placeholder="" onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="JOURNAL NAME">
            <Input name = "journal_name" placeholder="Enter Journal Name" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="VOLUME">
            <Input type = "number" name = "volume" required placeholder="" onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="ISSUE">
            <Input type = "number" name = "issue" placeholder="" onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="YEAR">
          <select required className = "selectClass" name="year" required defaultValue={'DEFAULT'} onChange = {this.onChange}>
            <option disabled value="DEFAULT"> </option>
            {year}
          </select> </Form.Item>
          <Form.Item label="PAGE NO">
            <Input name = "page_no" placeholder="Enter Page No" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="PUBLISHER">
            <Input name = "publisher" placeholder="Enter Publisher Name"  onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="IMPACT FACTOR IN THE YEAR OF PUBLICATION">
            <Input type = "number" name = "impact_factor" placeholder="Enter Impact Factor" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="IS IT A REFEREED JOURNAL?">
          <select name="ref_journal" onChange = {this.onChange}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          </Form.Item>
          <Form.Item label="FILE">
            <input type="file" name="pdf" accept="application/pdf" required onChange = {this.onFileChange}></input>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType = "submit" disabled = {this.state.disabled}>{this.props.btnText}</Button>
          </Form.Item>
        </Form>
        </CustomLayout>
      </div>
    );
  }
}


export default connect(null,{ addPublication })(CustomForm);