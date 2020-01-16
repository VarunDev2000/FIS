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
    role: '',
    durationfrom: '',
    durationto: '',
    institution: '',
    paper_title: '',
    nature_of_pres: '',
    pres_by: '',
    all_auth: '',
    is_publi: '',
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
    
  e.preventDefault();
  const id = this.props.match.params.id;

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

  if(this.state.csw_type === 'organized')
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

  this.props.editCSW(form_data,id);

  setTimeout( function(){
    window.open("/csw","_self")
  }, 1000 );
  }

  else if(this.state.csw_type === 'cha_co-cha')
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
  
   this.props.editCSW(form_data,id);

    setTimeout( function(){
      window.open("/csw","_self")
    }, 1000 );
  }

  else if(this.state.csw_type === 'attended')
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
  
   this.props.editCSW(form_data,id);

    setTimeout( function(){
      window.open("/csw","_self")
    }, 1000 );
  }

  else{
    console.log("Error")
  }
  }
    
};


setStates(props)
{
  this.setState({
      title: props.c_s_w.title,
      type_name: props.c_s_w.type_name,
      level: props.c_s_w.level,
      country: props.c_s_w.country,
      role: props.c_s_w.role,
      durationfrom: props.c_s_w.durationfrom,
      durationto: props.c_s_w.durationto,
      institution: props.c_s_w.level,
      paper_title: props.c_s_w.paper_title,
      nature_of_pres: props.c_s_w.nature_of_pres,
      pres_by: props.c_s_w.pres_by,
      all_auth: props.c_s_w.all_auth,
      is_publi: props.c_s_w.is_publi,
      csw_type: props.c_s_w.csw_type,
      pdf: props.c_s_w.pdf,
  })
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
    var csw_len = Object.keys(csw).length;
    var cswtype = csw.csw_type;

    return (
      <div>
        <CustomLayout>
        <Form key = {csw.id} onSubmit ={this.onSubmit}>
        <div align="right">
          <Button type="danger" htmlType = "submit" onClick = {this.delete}>Delete</Button>
        </div>
        {
        csw_len > 0 ? (
          cswtype === 'organized' ? (
            <div>
            <Form.Item label="TYPE">
            <select name="type_name" defaultValue={csw.type_name} onChange = {this.onChange}>
              <option value=""> -- select an option -- </option>
              <option value="WorkShop">WorkShop</option>
              <option value="Conference">Conference</option>
              <option value="Seminar">Seminar</option>
              <option value="Short Course">Short Course</option>
            </select>
            </Form.Item>
            <Form.Item label="LEVEL">
            <select name="level" defaultValue={csw.level} onChange = {this.onChange}>
              <option value="International">International</option>
              <option value="National">National</option>
            </select>
            </Form.Item>
            <Form.Item label="TITLE">
            <Input name = "title" placeholder="Enter Title" defaultValue={csw.title} required onChange = {this.onChange} />
            </Form.Item>
            <Form.Item label="ROLE">
            <Input name = "role" placeholder="Enter Role" defaultValue={csw.role} onChange = {this.onChange} />
            </Form.Item>
            <Form.Item label="DURATION">
            <label>From</label>  <input type = "date" name = "durationfrom" defaultValue={csw.durationfrom} required onChange = {this.onChange} ></input>
            {'\u00A0'}{'\u00A0'}<label>To</label> <input type = "date" name = "durationto" defaultValue={csw.durationto} required onChange = {this.onChange} ></input>
            </Form.Item>
            <Form.Item label="EXISTING PDF">
              <Button span={3} target="ref" onClick={() => this.popPDF(csw.pdf)}>View</Button>
            </Form.Item>
            <Form.Item label="FILE">
              <input type="file" name="pdf" accept="application/pdf" onChange = {this.onFileChange}></input>
            </Form.Item>
            <Form.Item>
            <Button type="primary" htmlType = "submit" disabled = {this.state.disabled}>Submit</Button>
            </Form.Item>
            </div>
          ) : (
          cswtype === 'paper' ? (
            <div>
            <Form.Item label="TYPE">
            <select name="type_name" defaultValue={csw.type_name} onChange = {this.onChange}>
              <option value=""> -- select an option -- </option>
              <option value="WorkShop">WorkShop</option>
              <option value="Conference">Conference</option>
              <option value="Seminar">Seminar</option>
              <option value="Short Course">Short Course</option>
            </select>
            </Form.Item>
            <Form.Item label="LEVEL">
            <select name="level" defaultValue={csw.level} onChange = {this.onChange}>
              <option value="International">International</option>
              <option value="National">National</option>
            </select>
            </Form.Item>
            <Form.Item label="TITLE">
            <Input name = "title" placeholder="Enter Title" defaultValue={csw.title} required onChange = {this.onChange} />
            </Form.Item>
            <Form.Item label="ORGANIZING INSTITUTION">
              <Input name = "institution" placeholder="Enter Institution Name" defaultValue={csw.institution} onChange = {this.onChange} />
            </Form.Item>
            <Form.Item label="COUNTRY">
              <Input name = "country" placeholder="Enter Country Name" defaultValue={csw.country} onChange = {this.onChange} />
            </Form.Item>
            <Form.Item label="DURATION">
            <label>From</label>  <input type = "date" name = "durationfrom" required defaultValue={csw.durationfrom} onChange = {this.onChange} ></input>
            {'\u00A0'}{'\u00A0'}<label>To</label> <input type = "date" name = "durationto" required defaultValue={csw.durationto} onChange = {this.onChange} ></input>
            </Form.Item>
            <Form.Item label="PAPER TITLE">
            <Input name = "paper_title" required defaultValue={csw.paper_title} onChange = {this.onChange} />
            </Form.Item>
            <Form.Item label="NATURE OF PRESENTATION">
            <select name="nature_of_pres" defaultValue={csw.nature_of_pres} onChange = {this.onChange}>
              <option value="Oral">Oral</option>
              <option value="Poster">Poster</option>
            </select>
            </Form.Item>
            <Form.Item label="PRESENTED BY">
            <Input name = "pres_by" defaultValue={csw.pres_by} onChange = {this.onChange} />
            </Form.Item>
            <Form.Item label="ALL AUTHORS IN ORDER">
            <Input name = "all_auth" defaultValue={csw.all_auth} onChange = {this.onChange} />
            </Form.Item>
            <Form.Item label="IS PUBLISHED IN PROCEEDING OF CONFERENCE">
            <select name="is_publi" defaultValue={csw.is_publi} onChange = {this.onChange}>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            </Form.Item>
            <Form.Item label="EXISTING PDF">
              <Button span={3} target="ref" onClick={() => this.popPDF(csw.pdf)}>View</Button>
            </Form.Item>
            <Form.Item label="FILE">
              <input type="file" name="pdf" accept="application/pdf" onChange = {this.onFileChange}></input>
            </Form.Item>
            <Form.Item>
            <Button type="primary" htmlType = "submit" disabled = {this.state.disabled}>Submit</Button>
            </Form.Item>
            </div>
          ) : (
            cswtype === 'attended' ? (
              <div>
              <Form.Item label="TYPE">
              <select name="type_name" defaultValue={csw.type_name} onChange = {this.onChange}>
                <option value=""> -- select an option -- </option>
                <option value="WorkShop">WorkShop</option>
                <option value="Conference">Conference</option>
                <option value="Seminar">Seminar</option>
                <option value="Short Course">Short Course</option>
              </select>
              </Form.Item>
              <Form.Item label="LEVEL">
              <select name="level" defaultValue={csw.level} onChange = {this.onChange}>
                <option value="International">International</option>
                <option value="National">National</option>
              </select>
              </Form.Item>
              <Form.Item label="TITLE">
              <Input name = "title" defaultValue={csw.title} placeholder="Enter Title" required onChange = {this.onChange} />
              </Form.Item>
              <Form.Item label="ORGANIZING INSTITUTION">
              <Input name = "institution" defaultValue={csw.institution} placeholder="Enter Institution Name" onChange = {this.onChange} />
              </Form.Item>
              <Form.Item label="COUNTRY">
              <Input name = "country" defaultValue={csw.country} placeholder="Enter Country Name" onChange = {this.onChange} />
              </Form.Item>
              <Form.Item label="DURATION">
                <label>From</label>  <input type = "date" defaultValue={csw.durationfrom} name = "durationfrom" required onChange = {this.onChange} ></input>
                {'\u00A0'}{'\u00A0'}<label>To</label> <input type = "date" defaultValue={csw.durationto} name = "durationto" required onChange = {this.onChange} ></input>
              </Form.Item>
              <Form.Item label="EXISTING PDF">
                <Button span={3} target="ref" onClick={() => this.popPDF(csw.pdf)}>View</Button>
              </Form.Item>
              <Form.Item label="FILE">
                <input type="file" name="pdf" accept="application/pdf"  onChange = {this.onFileChange}></input>
              </Form.Item>
              <Form.Item>
              <Button type="primary" htmlType = "submit" disabled = {this.state.disabled}>Submit</Button>
              </Form.Item>
              </div>
            ) : (
              cswtype === 'cha_co-cha' ? (
                <div>
                <Form.Item label="TYPE">
                <select name="type_name" defaultValue={csw.type_name} onChange = {this.onChange}>
                  <option value=""> -- select an option -- </option>
                  <option value="WorkShop">WorkShop</option>
                  <option value="Conference">Conference</option>
                  <option value="Seminar">Seminar</option>
                  <option value="Short Course">Short Course</option>
                </select>
                </Form.Item>
                <Form.Item label="LEVEL">
                <select name="level" defaultValue={csw.level} onChange = {this.onChange}>
                  <option value="International">International</option>
                  <option value="National">National</option>
                </select>
                </Form.Item>
                <Form.Item label="TITLE">
                <Input name = "title" defaultValue={csw.title} placeholder="Enter Title" required onChange = {this.onChange} />
                </Form.Item>
                <Form.Item label="ROLE">
                <Input name = "role" defaultValue={csw.role} placeholder="Enter Role"  onChange = {this.onChange} />
                </Form.Item>
                <Form.Item label="ORGANIZING INSTITUTION">
                <Input name = "institution" defaultValue={csw.institution} placeholder="Enter Institution Name"  onChange = {this.onChange} />
                </Form.Item>
                <Form.Item label="DURATION">
                <label>From</label>  <input type = "date" name = "durationfrom" defaultValue={csw.durationfrom} required onChange = {this.onChange} ></input>
                {'\u00A0'}{'\u00A0'}<label>To</label> <input type = "date" name = "durationto" defaultValue={csw.durationto} required onChange = {this.onChange} ></input>
                </Form.Item>
                <Form.Item label="EXISTING PDF">
                  <Button span={3} target="ref" onClick={() => this.popPDF(csw.pdf)}>View</Button>
                </Form.Item>
                <Form.Item label="FILE">
                  <input type="file" name="pdf" accept="application/pdf"  onChange = {this.onFileChange}></input>
                </Form.Item>
                <Form.Item>
                <Button type="primary" htmlType = "submit" disabled = {this.state.disabled}>Submit</Button>
                </Form.Item>
                </div>
              ) : (
                null
              ))
          )) 
        ) : (<h1></h1>)
        }
        </Form>
        </CustomLayout>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    c_s_w: state.csw.csw_by_id
});


export default connect(mapStateToProps,{ editCSW,getCSWbyID,deleteCSW })(CSWEdit);