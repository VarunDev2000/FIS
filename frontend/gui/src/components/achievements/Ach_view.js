import React from 'react';
import { Descriptions,Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { getAchievements } from '../../actions/achievements';
import history from '../common/history';

class Ach_view extends React.Component{

  static propTypes = {
    achievements: PropTypes.array.isRequired
  }

  state = {
    achievements:{},
    length : -1,
    redirect : false
  }


    setRedirect = () => {
      this.setState({
        redirect: true
      })
    }

    addRedirect = () => {
      history.push('/achievements/add');

      //window.open("/csw/add","_self");
    }


    editRedirect = (e) => {
        var id = e.target.id;
        history.push(`/achievements/edit/${id}`);
        
        //console.log(e.target.id);
        //window.open("/csw/edit","_self");
    }

    componentDidMount() {
      this.props.getAchievements();
    }
      
    componentWillReceiveProps(props) {
        var n = 0,awards = 0,rep = 0,patents_awarded = 0,patents_filed = 0;
  
        props.achievements.map(achievements =>
          (
            achievements.ach_type === "awards" ? (awards++,n++) : 
            (achievements.ach_type === "rep" ? (rep++,n++) :
            (achievements.ach_type === "patents_awarded" ? (patents_awarded++,n++) : (achievements.ach_type === "patents_filed" ? (patents_filed++,n++) : (null))))
          )
          );
        localStorage.setItem('n',n);
        localStorage.setItem('awards',awards);
        localStorage.setItem('rep',rep);
        localStorage.setItem('patents_awarded',patents_awarded);
        localStorage.setItem('patents_filed',patents_filed);
    }


    render(){
        var n = localStorage.getItem('n');
        var awards = localStorage.getItem('awards');
        var rep = localStorage.getItem('rep');
        var patents_awarded = localStorage.getItem('patents_awarded');
        var patents_filed = localStorage.getItem('patents_filed');


    return (
      <div>
      <CustomLayout>
      <Button type="primary" onClick={this.addRedirect}>Add</Button>
      <br/><br/><br/>
      {
      n === 0 ? (
                  <div>
                  </div>
      ) : (
        <div>
        {
        awards > 0 ? (
        <div>
        <h2>AWARDS</h2>
        <br/>
        {
        this.props.achievements.map(ach => (
          ach.ach_type === "awards" ? ( 
          <div  key = {ach.id}>
            <Descriptions bordered>
            <Descriptions.Item label="TITLE OF THE AWARD" span={3}>{ ach.title }</Descriptions.Item>   
            <Descriptions.Item label="AWARDING INSTITUTION" span={3}>{ ach.institution }</Descriptions.Item>
            <Descriptions.Item label="COUNTRY" span={3}>{ ach.country }</Descriptions.Item>
            <Descriptions.Item label="AWARDED YEAR" span={3}>{ ach.year }</Descriptions.Item>
            <Descriptions.Item label="AWARD DETAILS" span={3}>{ ach.details }</Descriptions.Item>
            </Descriptions>
            <Button id = {ach.id} type = "primary" className="editButton" onClick={this.editRedirect}>Edit</Button>
          <br /><br/>
          </div>
          )  :  (null))
      )
      }
      </div>
      ) : (null)
      }

      {
        rep > 0 ? (
        <div>
        <h2>REPRESENTATION IN INTERNATIONAL/NATIONAL/STATE BODIES</h2>
        <br/>
        {
        this.props.achievements.map(ach => (
          ach.ach_type === "rep" ? ( 
          <div key = {ach.id}>
            <Descriptions bordered>
            <Descriptions.Item label="LEVEL" span={3}>{ ach.level }</Descriptions.Item>
            <Descriptions.Item label="BODY" span={3}>{ ach.body }</Descriptions.Item>   
            <Descriptions.Item label="CAPACITY OF REPRESENTATION" span={3}>{ ach.capacity }</Descriptions.Item>
            <Descriptions.Item label="FROM" span={3}>{ ach.from_date }</Descriptions.Item>
            <Descriptions.Item label="TO" span={3}>{ ach.to_date }</Descriptions.Item>
            </Descriptions>
            <Button id = {ach.id} type = "primary" className="editButton" onClick={this.editRedirect}>Edit</Button>
          <br /><br/>
          </div>
          )  :  (null))
      )
      }
      </div>
      ) : (null)
      }

      {
        patents_awarded > 0 ? (
        <div>
        <h2>PATENTS AWARDED</h2>
        <br/>
        {
        this.props.achievements.map(ach => (
          ach.ach_type === "patents_awarded" ? ( 
          <div key = {ach.id}>
            <Descriptions bordered>
            <Descriptions.Item label="PATENT TITLE" span={3}>{ ach.title }</Descriptions.Item>   
            <Descriptions.Item label="PATENT NO" span={3}>{ ach.patent_no }</Descriptions.Item>
            <Descriptions.Item label="DATE" span={3}>{ ach.date }</Descriptions.Item>
            <Descriptions.Item label="COUNTRY" span={3}>{ ach.country }</Descriptions.Item>
            </Descriptions>
            <Button id = {ach.id} type = "primary" className="editButton" onClick={this.editRedirect}>Edit</Button>
          <br /><br/>
          </div>
          )  :  (null))
      )
      }
      </div>
      ) : (null)
      }

      {
        patents_filed > 0 ? (
        <div>
        <h2>PATENTS FILED</h2>
        <br/>
        {
        this.props.achievements.map(ach => (
          ach.ach_type === "patents_filed" ? ( 
          <div key = {ach.id}>
            <Descriptions bordered>
            <Descriptions.Item label="PATENT TITLE" span={3}>{ ach.title }</Descriptions.Item>   
            <Descriptions.Item label="FILE NO" span={3}>{ ach.file_no }</Descriptions.Item>
            <Descriptions.Item label="DATE" span={3}>{ ach.date }</Descriptions.Item>
            <Descriptions.Item label="COUNTRY" span={3}>{ ach.country }</Descriptions.Item>
            </Descriptions>
            <Button id = {ach.id} type = "primary" className="editButton" onClick={this.editRedirect}>Edit</Button>
          <br /><br/>
          </div>
          )  :  (null))
      )
      }
      </div>
      ) : (null)
      }

      </div>
      )

      }

      </CustomLayout>
      </div>
    );
      
    }
}

const mapStateToProps = state => ({
  achievements: state.achievements.achievements
});


export default connect(mapStateToProps,{ getAchievements })(Ach_view);