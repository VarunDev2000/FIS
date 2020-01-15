import React from 'react';
import { Form, Input, Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { editLecture,getLecturebyID,deleteLecture } from '../../actions/invited_lectures';


class LecEdit extends React.Component {

  state = {
    lecture:{},
    lec:{},
    redirect : false,
    disabled : false,

    level: '',
    topic: '',
    programme: '',
    institution: '',
    place: '',
    date: '',
}

static propTypes = {
  editLecture: PropTypes.func.isRequired,
  lecture: PropTypes.object.isRequired,
  deleteLecture: PropTypes.func.isRequired,
}

delete = (e) => {
  e.preventDefault();
  const id = this.props.match.params.id;
  var conf = window.confirm("Do you want to delete ?");
  if (conf === true) {
    this.props.deleteLecture(id);
    window.open('/invited_lectures',"_self");
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
  const {level,topic,programme,institution,place,date} = this.state;

  const lec = {level,topic,programme,institution,place,date};

  this.props.editLecture(lec,id);
  window.open('/invited_lectures',"_self");
};


setStates(props)
{
    this.setState({
        level : props.lecture.level,
        topic : props.lecture.topic,
        programme : props.lecture.programme,
        institution : props.lecture.institution,
        place : props.lecture.place,
        date : props.lecture.date,
    })
}


componentDidMount()
{    
  const id = this.props.match.params.id;
  this.props.getLecturebyID(id);
}


componentWillReceiveProps(props) {
    this.setStates(props);
    this.setState({
      lec : props.lecture
    })
}

  render() {
    var lec = this.state.lec;
    var lec_len = Object.keys(lec).length

    return (
      <div>
        <CustomLayout>
        {
        lec_len > 0 ? (
        <Form key = {lec.id} onSubmit ={this.onSubmit}>
        <div align="right">
          <Button type="danger" htmlType = "submit" onClick = {this.delete}>Delete</Button>
        </div>
        <Form.Item label="LEVEL">
          <select name="level" onChange = {this.onChange} defaultValue = {this.state.level}>
            <option value="International">INTERNATIONAL</option>
            <option value="National">NATIONAL</option>
          </select>
          </Form.Item>
          <Form.Item label="TOPIC">
            <Input name = "topic" placeholder="Enter Topic" required defaultValue = {this.state.topic} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="PROGRAMME">
            <Input name = "programme" placeholder="Programme name" defaultValue = {this.state.programme} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="INSTITUTION/ORGANIZATION">
            <Input name = "institution" placeholder="Enter Institution Name" defaultValue = {this.state.institution} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="PLACE ">
            <Input name = "place" placeholder="Enter Place" defaultValue = {this.state.place} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="DATE">
            <input type = "date" name = "date" required defaultValue = {this.state.date} onChange = {this.onChange} ></input>
          </Form.Item><br/>
          <Form.Item>
            <Button type="primary" htmlType = "submit">Submit</Button>
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
    lecture: state.invited_lectures.lecture_by_id
});


export default connect(mapStateToProps,{ editLecture,getLecturebyID,deleteLecture })(LecEdit);