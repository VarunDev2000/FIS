import React from 'react';
import { Form, Input, Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { editAchievements,getAchievementsbyID,deleteAchievements } from '../../actions/achievements';


class AchEdit extends React.Component {

  state = {
    achievements:{},
    ach:{},
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
    ach_type: '',
}

static propTypes = {
  editAchievements: PropTypes.func.isRequired,
  achievements: PropTypes.object.isRequired,
  deleteAchievements: PropTypes.func.isRequired,
}

delete = (e) => {
  e.preventDefault();
  const id = this.props.match.params.id;
  var conf = window.confirm("Do you want to delete ?");
  if (conf === true) {
    this.props.deleteAchievements(id);
    window.open('/achievements',"_self");
  } 
}

onChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
}


onSubmit = (e) => {
    
  e.preventDefault();
  const id = this.props.match.params.id;

    if(this.state.ach_type === 'awards')
    {
      const {title,institution,country,year,details,ach_type} = this.state;
  
      const ach = {title,institution,country,year,details,ach_type};
  
      if(this.state.year === "")
      {
        alert("Invalid Year");
      }
      else{
      this.props.editAchievements(ach,id);
      
      window.open("/achievements","_self")
      }
    }
  
    else if(this.state.ach_type === 'rep')
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
      this.props.editAchievements(ach,id);
      
      window.open("/achievements","_self")
      }
    }
  
    else if(this.state.ach_type === 'patents_awarded')
    {
      const {title,patent_no,date,country,ach_type} = this.state;
  
      const ach = {title,patent_no,date,country,ach_type};
  
      this.props.editAchievements(ach,id);
      
      window.open("/achievements","_self")
    }
  
    else if(this.state.ach_type === 'patents_filed')
    {
      const {title,file_no,date,country,ach_type} = this.state;
  
      const ach = {title,file_no,date,country,ach_type};
  
  
      this.props.editAchievements(ach,id);
      
      window.open("/achievements","_self")
    }
  
    else{
        console.log("Error");
    }
};


setStates(props)
{
  this.setState({
      title: props.achievements.title,
      institution: props.achievements.institution,
      country: props.achievements.country,
      year: props.achievements.year,
      details: props.achievements.details,
      level: props.achievements.level,
      body: props.achievements.body,
      capacity: props.achievements.capacity,
      from_date: props.achievements.from_date,
      to_date: props.achievements.to_date,
      patent_no: props.achievements.patent_no,
      date: props.achievements.date,
      file_no: props.achievements.file_no,
      ach_type: props.achievements.ach_type,
  })
}


componentDidMount()
{    
  const id = this.props.match.params.id;
  this.props.getAchievementsbyID(id);
}


componentWillReceiveProps(props) {
    this.setStates(props);
    this.setState({
      ach : props.achievements
    })
}

  render() {
    var ach = this.state.ach;
    var ach_len = Object.keys(ach).length;
    var achtype = ach.ach_type;    
    const year = [];

    for (let i = 1950;i <= (new Date().getFullYear());i++) {
      year.push(<option key = {i} value = {i}>{i}</option>)
    }

    return (
      <div>
        <CustomLayout>
        <Form key = {ach.id} onSubmit ={this.onSubmit}>
        <div align="right">
          <Button type="danger" htmlType = "submit" onClick = {this.delete}>Delete</Button>
        </div>
        {
        ach_len > 0 ? (
            achtype === 'awards' ? (
                <div>
                <Form.Item label="TITLE">
                <Input name = "title" placeholder="Enter Title" defaultValue={ach.title} required onChange = {this.onChange} />
                </Form.Item>
                <Form.Item label="AWARDING INSTITUTION">
                <Input name = "institution" placeholder="Enter Institution Name" defaultValue={ach.institution} onChange = {this.onChange} />
                </Form.Item>
                <Form.Item label="COUNTRY">
                <Input name = "country" placeholder="Enter Country" defaultValue={ach.country} onChange = {this.onChange} />
                </Form.Item>
                <Form.Item label="AWARDED YEAR">
                <select className = "selectClass" name="year" defaultValue={ach.year} onChange = {this.onChange}>
                <option disabled value=""> </option>
                {year}
                </select>
                </Form.Item>
                <Form.Item label="AWARD DETAILS">
                <textarea name = "details" maxlength="800" defaultValue={ach.details} onChange = {this.onChange} />
                </Form.Item>
                <Form.Item>
                <Button type="primary" htmlType = "submit">Submit</Button>
                </Form.Item>
                </div>
                ) : (
                achtype === 'rep' ? (
                <div>
                <Form.Item label="LEVEL">
                <select name="level" defaultValue={ach.level} onChange = {this.onChange}>
                <option disabled value=""> -- select an option -- </option>
                <option value="International">International</option>
                <option value="National">National</option>
                <option value="State">State</option>
                </select>
                </Form.Item>
                <Form.Item label="BODY">
                <Input name = "body" defaultValue={ach.body} onChange = {this.onChange} />
                </Form.Item>
                <Form.Item label="CAPACITY OF PRESENTATION">
                <Input name = "capacity"  defaultValue={ach.capacity} onChange = {this.onChange} />
                </Form.Item>
                <Form.Item label="DURATION">
                <label>From</label>  <input type = "date" name = "from_date" required defaultValue={ach.from_date} onChange = {this.onChange} ></input>
                {'\u00A0'}{'\u00A0'}<label>To</label> <input type = "date" name = "to_date" required defaultValue={ach.to_date} onChange = {this.onChange} ></input>
                </Form.Item>
                <Form.Item>
                <Button type="primary" htmlType = "submit">Submit</Button>
                </Form.Item>
                </div>
                ) : (
                achtype === 'patents_awarded' ? (
                <div>
                <Form.Item label="PATENT TITLE">
                <Input name = "title" placeholder="Enter Title" required defaultValue={ach.title} onChange = {this.onChange} />
                </Form.Item>
                <Form.Item label="PATENT NO">
                <Input name = "patent_no" placeholder="Enter Patent No" defaultValue={ach.patent_no} onChange = {this.onChange} />
                </Form.Item>
                <Form.Item label="DATE">
                    <input type = "date" name = "date" required defaultValue={ach.date} onChange = {this.onChange} ></input>
                    </Form.Item>
                <Form.Item label="COUNTRY">
                    <Input name = "country" placeholder="Enter Country Name" defaultValue={ach.country} onChange = {this.onChange} />
                </Form.Item>
                <Form.Item>
                <Button type="primary" htmlType = "submit">Submit</Button>
                </Form.Item>
                </div>
                ) : (
                achtype === 'patents_filed' ? (
                    <div>
                    <Form.Item label="PATENT TITLE">
                    <Input name = "title" placeholder="Enter Title" defaultValue={ach.title} required onChange = {this.onChange} />
                    </Form.Item>
                    <Form.Item label="FILE NO">
                    <Input name = "file_no" placeholder="Enter File No" defaultValue={ach.file_no} onChange = {this.onChange} />
                    </Form.Item>
                    <Form.Item label="DATE OF FILLING">
                    <input type = "date" name = "date" required defaultValue={ach.date} onChange = {this.onChange} ></input>
                    </Form.Item>
                    <Form.Item label="COUNTRY">
                    <Input name = "country" placeholder="Enter Country Name" defaultValue={ach.country} onChange = {this.onChange} />
                    </Form.Item>
                    <Form.Item>
                    <Button type="primary" htmlType = "submit">Submit</Button>
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
    achievements: state.achievements.achievements_by_id
});


export default connect(mapStateToProps,{ editAchievements,getAchievementsbyID,deleteAchievements })(AchEdit);