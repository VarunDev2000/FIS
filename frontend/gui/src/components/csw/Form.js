import React from 'react';
import { Form, Input, Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { addCSW } from '../../actions/csw';

class CustomForm extends React.Component {

  state = {
    csw_form : 'organized',
    redirect : false,
    title: '',
    type_name: '',
    level: 'International',
    country: '',
    role: '',
    durationfrom: '',
    durationto: '',
    institution: '',
    paper_title: '',
    nature_of_pres: 'Oral',
    pres_by: '',
    all_auth: '',
    is_publi: 'Yes',
    csw_type: 'organized',
    pdf: '',
    file : null,
}

static propTypes = {
  addCSW: PropTypes.func.isRequired
}

onChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
}

dropdown = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
  this.setState({csw_form: e.target.value});
}

onFileChange = e => {
  this.setState({
    file : e.target.files[0]
  });
}


onSubmit = (e) => {

  e.preventDefault();

  var d_f = this.state.durationfrom;
  var d_t = this.state.durationto;

  if(d_f > d_t)
  {
    alert("Invalid Duration");
  }

  else{
  this.setState({
    disabled : true
  })

  if(this.props.type === 'add' && this.state.csw_form === 'organized')
  {
  let form_data = new FormData();
  if(this.state.filechanged == true)
  {
  form_data.append('pdf', this.state.file, this.state.file.name);
  }
  form_data.append('title', this.state.title);
  form_data.append('type_name', this.state.type_name);
  form_data.append('level', this.state.level);
  form_data.append('role', this.state.role);
  form_data.append('durationfrom', this.state.durationfrom);
  form_data.append('durationto', this.state.durationto);
  form_data.append('csw_type', this.state.csw_type);
  

  //display values in console
  /*
  var pair;
  for (pair of form_data.entries()) {
    console.log(pair[0]+ ' : ' + pair[1]); 
  }
  */

  this.props.addCSW(form_data);

  setTimeout( function(){
    window.open("/csw","_self")
  }, 1000 );
  }

  else if(this.props.type === 'add' && this.state.csw_form === 'cha_co-cha')
  {
  let form_data = new FormData();
  if(this.state.filechanged == true)
  {
  form_data.append('pdf', this.state.file, this.state.file.name);
  }
  form_data.append('title', this.state.title);
  form_data.append('type_name', this.state.type_name);
  form_data.append('level', this.state.level);
  form_data.append('role', this.state.role);
  form_data.append('institution', this.state.institution);
  form_data.append('durationto', this.state.durationto);
  form_data.append('durationfrom', this.state.durationfrom);
  form_data.append('csw_type', this.state.csw_type);
  

  //display values in console
  /*
  var pair;
  for (pair of form_data.entries()) {
    console.log(pair[0]+ ' : ' + pair[1]); 
  }
  */

  this.props.addCSW(form_data);

  setTimeout( function(){
    window.open("/csw","_self")
  }, 1000 );
  }

  else if(this.props.type === 'add' && this.state.csw_form === 'paper')
  {
    let form_data = new FormData();
    if(this.state.filechanged == true)
    {
    form_data.append('pdf', this.state.file, this.state.file.name);
    }
    form_data.append('title', this.state.title);
    form_data.append('type_name', this.state.type_name);
    form_data.append('level', this.state.level);
    form_data.append('institution', this.state.institution);
    form_data.append('country', this.state.country);
    form_data.append('durationto', this.state.durationto);
    form_data.append('durationfrom', this.state.durationfrom);
    form_data.append('paper_title', this.state.paper_title);
    form_data.append('nature_of_pres', this.state.nature_of_pres);
    form_data.append('pres_by', this.state.pres_by);
    form_data.append('nature_of_pres', this.state.all_auth);
    form_data.append('all_auth', this.state.nature_of_pres);
    form_data.append('is_publi', this.state.is_publi);
    form_data.append('csw_type', this.state.csw_type);
    
    //display values in console
    /*
    for (pair of form_data.entries()) {
      console.log(pair[0]+ ' : ' + pair[1]); 
    }
    */
  
    this.props.addCSW(form_data);

    setTimeout( function(){
      window.open("/csw","_self")
    }, 1000 );
  }

  else if(this.props.type === 'add' && this.state.csw_form === 'attended')
  {
    let form_data = new FormData();
    if(this.state.filechanged == true)
    {
    form_data.append('pdf', this.state.file, this.state.file.name);
    }
    form_data.append('title', this.state.title);
    form_data.append('type_name', this.state.type_name);
    form_data.append('level', this.state.level);
    form_data.append('institution', this.state.institution);
    form_data.append('country', this.state.country);
    form_data.append('durationto', this.state.durationto);
    form_data.append('durationfrom', this.state.durationfrom);
    form_data.append('csw_type', this.state.csw_type);
    
    //display values in console
    /*
    for (pair of form_data.entries()) {
      console.log(pair[0]+ ' : ' + pair[1]); 
    }
    */
  
    this.props.addCSW(form_data);

    setTimeout( function(){
      window.open("/csw","_self")
    }, 1000 );
  }

  else{
  }
  }
};

/*
onSubmit = e => {
  
  e.preventDefault();
  if(this.props.type === 'add' && (this.state.csw_form === 'organized' || this.state.csw_form === 'cha_co-cha'))
  {
    const {title,type_name,level,csw_type} = this.state;

  const csw_info = {title,type_name,level,csw_type}
    
  console.log(csw_info);
    this.props.addCSW(csw_info);
  }

  else if(this.props.type === 'add' && this.state.csw_form === 'paper')
  {
    const {title,type_name,country,csw_type} = this.state;

    const csw_info = {title,type_name,country,csw_type}

    console.log(csw_info);
    this.props.addCSW(csw_info);
  }

  else{
    console.log("submit");
  }
}
*/
  render() {
    const cswtype = this.state.csw_form;
    return (
      <div>
        <CustomLayout>
        <Form onSubmit ={this.onSubmit}>

        <select name="csw_type" onChange = {this.dropdown}>
            <option value="organized">ORGANIZED</option>
            <option value="cha_co-cha">CHAIRED/CO-CHAIRED</option>
            <option value="paper">PAPER PRESENTED</option>
            <option value="attended">ATTENDED</option>
        </select><br/><br/>

        {
        cswtype === 'organized' ? (
          <div>
          <Form.Item label="TYPE">
          <select name="type_name" defaultValue={'DEFAULT'} onChange = {this.onChange}>
            <option disabled value="DEFAULT"> -- select an option -- </option>
            <option value="WorkShop">WorkShop</option>
            <option value="Conference">Conference</option>
            <option value="Seminar">Seminar</option>
            <option value="Short Course">Short Course</option>
          </select>
          </Form.Item>
          <Form.Item label="LEVEL">
          <select name="level" onChange = {this.onChange}>
            <option value="International">International</option>
            <option value="National">National</option>
          </select>
          </Form.Item>
          <Form.Item label="TITLE">
          <Input name = "title" placeholder="Enter Title" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="ROLE">
          <Input name = "role" placeholder="Enter Role" onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="DURATION">
          <label>From</label> <input type = "date" name = "durationfrom" required onChange = {this.onChange} ></input>
          {'\u00A0'}{'\u00A0'}<label>To</label> <input type = "date" name = "durationto" required onChange = {this.onChange} ></input>
          </Form.Item>
          <Form.Item label="FILE">
            <input type="file" name="pdf" accept="application/pdf" onChange = {this.onFileChange}></input>
          </Form.Item>
          <Form.Item>
          <Button type="primary" htmlType = "submit" disabled = {this.state.disabled}>{this.props.btnText}</Button>
          </Form.Item>
          </div>
        ) : (
        cswtype === 'paper' ? (
          <div>
          <Form.Item label="TYPE">
          <select name="type_name" defaultValue={'DEFAULT'} onChange = {this.onChange}>
            <option disabled value="DEFAULT"> -- select an option -- </option>
            <option value="WorkShop">WorkShop</option>
            <option value="Conference">Conference</option>
            <option value="Seminar">Seminar</option>
            <option value="Short Course">Short Course</option>
          </select>
          </Form.Item>
          <Form.Item label="LEVEL">
          <select name="level" onChange = {this.onChange}>
            <option value="International">International</option>
            <option value="National">National</option>
          </select>
          </Form.Item>
          <Form.Item label="TITLE">
          <Input name = "title" placeholder="Enter Title" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="ORGANIZING INSTITUTION">
            <Input name = "institution" placeholder="Enter Institution Name" onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="COUNTRY">
            <Input name = "country" placeholder="Enter Country Name" onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="DURATION">
          <label>From</label>  <input type = "date" name = "durationfrom" required onChange = {this.onChange} ></input>
          {'\u00A0'}{'\u00A0'}<label>To</label> <input type = "date" name = "durationto" required onChange = {this.onChange} ></input>
          </Form.Item>
          <Form.Item label="PAPER TITLE">
          <Input name = "paper_title" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="NATURE OF PRESENTATION">
          <select name="nature_of_pres"  onChange = {this.onChange}>
            <option value="Oral">Oral</option>
            <option value="Poster">Poster</option>
          </select>
          </Form.Item>
          <Form.Item label="PRESENTED BY">
          <Input name = "pres_by" onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="ALL AUTHORS IN ORDER">
          <Input name = "all_auth" onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="IS PUBLISHED IN PROCEEDING OF CONFERENCE">
          <select name="is_publi" onChange = {this.onChange}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          </Form.Item>
          <Form.Item label="FILE">
            <input type="file" name="pdf" accept="application/pdf" onChange = {this.onFileChange}></input>
          </Form.Item>
          <Form.Item>
          <Button type="primary" htmlType = "submit" disabled = {this.state.disabled}>{this.props.btnText}</Button>
          </Form.Item>
          </div>
        ) : (
          cswtype === 'attended' ? (
            <div>
            <Form.Item label="TYPE">
            <select name="type_name" defaultValue={'DEFAULT'} onChange = {this.onChange}>
              <option disabled value="DEFAULT"> -- select an option -- </option>
              <option value="WorkShop">WorkShop</option>
              <option value="Conference">Conference</option>
              <option value="Seminar">Seminar</option>
              <option value="Short Course">Short Course</option>
            </select>
            </Form.Item>
            <Form.Item label="LEVEL">
            <select name="level" onChange = {this.onChange}>
              <option value="International">International</option>
              <option value="National">National</option>
            </select>
            </Form.Item>
            <Form.Item label="TITLE">
            <Input name = "title" placeholder="Enter Title" required onChange = {this.onChange} />
            </Form.Item>
            <Form.Item label="ORGANIZING INSTITUTION">
            <Input name = "institution" placeholder="Enter Institution Name" onChange = {this.onChange} />
            </Form.Item>
            <Form.Item label="COUNTRY">
            <Input name = "country" placeholder="Enter Country Name" onChange = {this.onChange} />
            </Form.Item>
            <Form.Item label="DURATION">
              <label>From</label> <input type = "date" name = "durationfrom" required onChange = {this.onChange} ></input>
              {'\u00A0'}{'\u00A0'}<label>To</label> <input type = "date" name = "durationto" required onChange = {this.onChange} ></input>
              </Form.Item>
            <Form.Item label="FILE">
              <input type="file" name="pdf" accept="application/pdf"  onChange = {this.onFileChange}></input>
            </Form.Item>
            <Form.Item>
            <Button type="primary" htmlType = "submit" disabled = {this.state.disabled}>{this.props.btnText}</Button>
            </Form.Item>
            </div>
          ) : (
            cswtype === 'cha_co-cha' ? (
              <div>
              <Form.Item label="TYPE">
              <select name="type_name" defaultValue={'DEFAULT'} onChange = {this.onChange}>
                <option disabled value="DEFAULT"> -- select an option -- </option>
                <option value="WorkShop">WorkShop</option>
                <option value="Conference">Conference</option>
                <option value="Seminar">Seminar</option>
                <option value="Short Course">Short Course</option>
              </select>
              </Form.Item>
              <Form.Item label="LEVEL">
              <select name="level" onChange = {this.onChange}>
                <option value="International">International</option>
                <option value="National">National</option>
              </select>
              </Form.Item>
              <Form.Item label="TITLE">
              <Input name = "title" placeholder="Enter Title" required onChange = {this.onChange} />
              </Form.Item>
              <Form.Item label="ROLE">
              <Input name = "role" placeholder="Enter Role"  onChange = {this.onChange} />
              </Form.Item>
              <Form.Item label="ORGANIZING INSTITUTION">
              <Input name = "institution" placeholder="Enter Institution Name"  onChange = {this.onChange} />
              </Form.Item>
              <Form.Item label="DURATION">
              <label>From</label>  <input type = "date" name = "durationfrom" required onChange = {this.onChange} ></input>
              {'\u00A0'}{'\u00A0'}<label>To</label> <input type = "date" name = "durationto" required onChange = {this.onChange} ></input>
              </Form.Item>
              <Form.Item label="FILE">
                <input type="file" name="pdf" accept="application/pdf"  onChange = {this.onFileChange}></input>
              </Form.Item>
              <Form.Item>
              <Button type="primary" htmlType = "submit" disabled = {this.state.disabled}>{this.props.btnText}</Button>
              </Form.Item>
              </div>
            ) : (
              null
            ))
        )) 
        }

        </Form>
        </CustomLayout>
      </div>
    );
  }
}


export default connect(null,{ addCSW })(CustomForm);