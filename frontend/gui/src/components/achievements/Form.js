import React from 'react';
import { Form, Input, Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { addAchievements } from '../../actions/achievements';

class CustomForm extends React.Component {

  state = {
    ach_form : 'awards',
    redirect : false,

    title: '',
    institution: '',
    country: '',
    year: '',
    details: '',
    level: '',
    body: '',
    capacity: '',
    from_date: '',
    to_date: '',
    patent_no: '',
    date: '',
    file_no: '',
    ach_type: 'awards',
}

static propTypes = {
  addAchievements: PropTypes.func.isRequired
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
  this.setState({ach_form: e.target.value});
}


onSubmit = (e) => {

  e.preventDefault();

  var d_f = this.state.from_date;
  var d_t = this.state.to_date;

  if(this.props.type === 'add' && this.state.ach_form === 'awards')
  {
    const {title,institution,country,year,details,ach_type} = this.state;

    const ach = {title,institution,country,year,details,ach_type};

    if(this.state.year === "")
    {
      alert("Invalid Year");
    }
    else{
    this.props.addAchievements(ach);
    
    window.open("/achievements","_self")
    }
  }

  else if(this.props.type === 'add' && this.state.ach_form === 'rep')
  {
    const {level,body,capacity,from_date,to_date,ach_type} = this.state;

    const ach = {level,body,capacity,from_date,to_date,ach_type};

    var d_f = this.state.from_date;
    var d_t = this.state.to_date;

    if(d_f > d_t)
    {
      alert("Invalid Duration");
    }

    else{
    this.props.addAchievements(ach);
    
    window.open("/achievements","_self")
    }
  }

  else if(this.props.type === 'add' && this.state.ach_form === 'patents_awarded')
  {
    const {title,patent_no,date,country,ach_type} = this.state;

    const ach = {title,patent_no,date,country,ach_type};


    this.props.addAchievements(ach);
    
    window.open("/achievements","_self")
  }

  else if(this.props.type === 'add' && this.state.ach_form === 'patents_filed')
  {
    const {title,file_no,date,country,ach_type} = this.state;

    const ach = {title,file_no,date,country,ach_type};


    this.props.addAchievements(ach);
    
    window.open("/achievements","_self")
  }

  else{
    console.log("Error");
  }
};


  render() {
    const achtype = this.state.ach_form;
    const year = [];

    for (let i = 1950;i <= (new Date().getFullYear());i++) {
      year.push(<option key = {i} value = {i}>{i}</option>)
    }

    return (
      <div>
        <CustomLayout>
        <Form onSubmit ={this.onSubmit}>

        <select name="ach_type" onChange = {this.dropdown}>
            <option value="awards">AWARDS</option>
            <option value="rep">REPRESENTATION IN INTERNATIONAL/NATIONAL/STATE BODIES</option>
            <option value="patents_awarded">PATENTS AWARDED</option>
            <option value="patents_filed">PATENTS FILED</option>
        </select><br/><br/>

        {
        achtype === 'awards' ? (
          <div>
          <Form.Item label="TITLE">
          <Input name = "title" placeholder="Enter Title" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="AWARDING INSTITUTION">
          <Input name = "institution" placeholder="Enter Institution Name" onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="COUNTRY">
          <Input name = "country" placeholder="Enter Country" onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="AWARDED YEAR">
          <select className = "selectClass" name="year" defaultValue={'DEFAULT'} onChange = {this.onChange}>
            <option disabled value="DEFAULT"> </option>
            {year}
          </select>
          </Form.Item>
          <Form.Item label="AWARD DETAILS">
          <textarea name = "details" maxlength="800" onChange = {this.onChange} />
          </Form.Item>
          <Form.Item>
          <Button type="primary" htmlType = "submit">{this.props.btnText}</Button>
          </Form.Item>
          </div>
        ) : (
          achtype === 'rep' ? (
          <div>
          <Form.Item label="LEVEL">
          <select name="level" defaultValue={'DEFAULT'} onChange = {this.onChange}>
            <option disabled value="DEFAULT"> -- select an option -- </option>
            <option value="International">International</option>
            <option value="National">National</option>
            <option value="State">State</option>
          </select>
          </Form.Item>
          <Form.Item label="BODY">
          <Input name = "body" onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="CAPACITY OF PRESENTATION">
            <Input name = "capacity"  onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="DURATION">
          <label>From</label>  <input type = "date" name = "from_date" required onChange = {this.onChange} ></input>
          {'\u00A0'}{'\u00A0'}<label>To</label> <input type = "date" name = "to_date" required onChange = {this.onChange} ></input>
          </Form.Item>
          <Form.Item>
          <Button type="primary" htmlType = "submit">{this.props.btnText}</Button>
          </Form.Item>
          </div>
        ) : (
          achtype === 'patents_awarded' ? (
            <div>
            <Form.Item label="PATENT TITLE">
            <Input name = "title" placeholder="Enter Title" required onChange = {this.onChange} />
            </Form.Item>
            <Form.Item label="PATENT NO">
            <Input name = "patent_no" placeholder="Enter Patent No" onChange = {this.onChange} />
            </Form.Item>
            <Form.Item label="DATE">
              <input type = "date" name = "date" required onChange = {this.onChange} ></input>
             </Form.Item>
            <Form.Item label="COUNTRY">
              <Input name = "country" placeholder="Enter Country Name" onChange = {this.onChange} />
            </Form.Item>
            <Form.Item>
            <Button type="primary" htmlType = "submit">{this.props.btnText}</Button>
            </Form.Item>
            </div>
          ) : (
            achtype === 'patents_filed' ? (
              <div>
              <Form.Item label="PATENT TITLE">
              <Input name = "title" placeholder="Enter Title" required onChange = {this.onChange} />
              </Form.Item>
              <Form.Item label="FILE NO">
              <Input name = "file_no" placeholder="Enter File No"  onChange = {this.onChange} />
              </Form.Item>
              <Form.Item label="DATE OF FILLING">
                <input type = "date" name = "date" required onChange = {this.onChange} ></input>
              </Form.Item>
              <Form.Item label="COUNTRY">
                <Input name = "country" placeholder="Enter Country Name" onChange = {this.onChange} />
              </Form.Item>
              <Form.Item>
              <Button type="primary" htmlType = "submit">{this.props.btnText}</Button>
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


export default connect(null,{ addAchievements })(CustomForm);