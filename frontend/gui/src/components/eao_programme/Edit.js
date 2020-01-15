import React from 'react';
import { Form, Input, Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { editEAO,getEAObyID,deleteEAO } from '../../actions/eao_programme';


class EAOEdit extends React.Component {

  state = {
    eao_prog:{},
    eao:{},
    redirect : false,
    disabled : false,

    type_of_prog: '',
    title_of_prog: '',
    your_role: '',
    cross_sec_of_participants: '',
    no_of_participants : '',
    funded_by: '',
    venue: '',
    from_date: '',
    to_date: '',
}

static propTypes = {
  editEAO: PropTypes.func.isRequired,
  eao_prog: PropTypes.object.isRequired,
  deleteEAO: PropTypes.func.isRequired,
}

delete = (e) => {
  e.preventDefault();
  const id = this.props.match.params.id;
  var conf = window.confirm("Do you want to delete ?");
  if (conf === true) {
    this.props.deleteEAO(id);
    window.open('/eao_programme',"_self");
  } 
}

onChange = e => {
    if(e.target.value != "")
    {
        this.setState({
        [e.target.name]: e.target.value
        });
    }
    else{
        this.setState({
            [e.target.name]: null
        });
    }
}


onSubmit = (e) => {

  e.preventDefault();

  if(this.state.from_date > this.state.to_date)
  {
    alert("Invalid Duration");
  }
  else{
  const id = this.props.match.params.id;
  const {type_of_prog,title_of_prog,your_role,cross_sec_of_participants,
    no_of_participants,funded_by,venue,from_date,to_date} = this.state;

  const eao = {type_of_prog,title_of_prog,your_role,cross_sec_of_participants,
    no_of_participants,funded_by,venue,from_date,to_date};

  this.props.editEAO(eao,id);
  window.open('/eao_programme',"_self");
  }
};


setStates(props)
{
    this.setState({
        type_of_prog: props.eao_prog.type_of_prog,
        title_of_prog: props.eao_prog.title_of_prog,
        your_role: props.eao_prog.your_role,
        cross_sec_of_participants: props.eao_prog.cross_sec_of_participants,
        no_of_participants: props.eao_prog.no_of_participants,
        funded_by: props.eao_prog.funded_by,
        venue: props.eao_prog.venue,
        from_date: props.eao_prog.from_date,
        to_date: props.eao_prog.to_date,
    })
}


componentDidMount()
{    
  const id = this.props.match.params.id;
  this.props.getEAObyID(id);
}


componentWillReceiveProps(props) {
    this.setStates(props);
    this.setState({
      eao : props.eao_prog
    })
}

  render() {
    var eao = this.state.eao;
    var eao_len = Object.keys(eao).length

    return (
      <div>
        <CustomLayout>
        {
        eao_len > 0 ? (
        <Form key = {eao.id} onSubmit ={this.onSubmit}>
        <div align="right">
          <Button type="danger" htmlType = "submit" onClick = {this.delete}>Delete</Button>
        </div>
        <Form.Item label="TYPE OF THE PROGRAMME">
          <select name="type_of_prog" defaultValue={this.state.type_of_prog} onChange = {this.onChange}>
            <option value="extension">EXTENSION</option>
            <option value="outreach">OUTREACH</option>
          </select></Form.Item>
          <Form.Item label="TITLE OF THE PROGRAMME">
            <Input name = "title_of_prog" defaultValue={this.state.title_of_prog} placeholder="Enter Title of book" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="YOUR ROLE">
          <Input name = "your_role" defaultValue={this.state.your_role} placeholder="Enter Author Name" onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="CROSS SECTION OF PARTICIPANTS">
          <Input name = "cross_sec_of_participants" defaultValue={this.state.cross_sec_of_participants} placeholder="Cross Section of Participants" onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="NO OF PARTICIPANTS">
          <Input type="number" name = "no_of_participants" defaultValue={this.state.no_of_participants} placeholder="Enter No of Participants"  onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="FUNDED BY">
            <Input name = "funded_by" placeholder="" defaultValue={this.state.funded_by} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="VENUE">
            <Input name = "venue" placeholder="Enter Venue" defaultValue={this.state.venue} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="DURATION">
            <label>From</label>{'\u00A0'}{'\u00A0'}
            <input type = "date" required name="from_date" defaultValue={this.state.from_date} onChange={this.onChange}></input>
            {'\u00A0'}{'\u00A0'}
            <label>To</label>{'\u00A0'}{'\u00A0'}           
            <input type = "date" required name="to_date" defaultValue={this.state.to_date} onChange={this.onChange}></input>
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
    eao_prog: state.eao_programme.eao_by_id
});


export default connect(mapStateToProps,{ editEAO,getEAObyID,deleteEAO })(EAOEdit);