import React from 'react';
import { Descriptions,Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { getLecture } from '../../actions/invited_lectures';
import history from '../common/history'

class Lecture_view extends React.Component{

  static propTypes = {
    lecture: PropTypes.array.isRequired
  }

  state = {
    lecture:{},
    redirect : false,
    numRows : 0
}


    setRedirect = () => {
      this.setState({
        redirect: true
      })
    }

    addRedirect = () => {
      history.push('/invited_lectures/add');

      //window.open("/add","_self");
    }

    editRedirect = (e) => {
      var id = e.target.id;
      history.push(`/invited_lectures/edit/${id}`);

        //window.open('/edit',"_self");

    }

    
      componentDidMount() {
        this.props.getLecture();
      }

      componentWillReceiveProps(props) {
        var count = 0;
        props.lecture.map(lec => 
          (count++) );

        localStorage.setItem('length',count);
      }
      

    render(){
      var numRows = localStorage.getItem('length');
      
    return (
      <CustomLayout>
      <Button type="primary" onClick={this.addRedirect}>Add</Button><br/><br/><br/>
      {
       numRows == 0 || numRows == null ? (
            <div></div>
      ) : (
          <div>
         <h2>INVITED LECTURES</h2><br/>
        {
      this.props.lecture.map(lec => (
              <div key = {'lecture'+lec.id}>
              <Descriptions bordered>
              <Descriptions.Item label="LEVEL" span={3}>{ lec.level }</Descriptions.Item>
              <Descriptions.Item label="TOPIC" span={3}>{ lec.topic }</Descriptions.Item>
              <Descriptions.Item label="PROGRAMME" span={3}>{lec.programme}</Descriptions.Item>
              <Descriptions.Item label="INSTITUTION" span={3}>{lec.institution}</Descriptions.Item>
              <Descriptions.Item label="PLACE" span={3}>{lec.place}</Descriptions.Item>
              <Descriptions.Item label="DATE" span={3}>{lec.date}</Descriptions.Item>
              </Descriptions>
              <Button id={lec.id} type="primary" className="editButton" onClick={this.editRedirect}>EDIT</Button>
            </div>
      ))
        }
      </div>
      )
      }
      </CustomLayout>
    );
    }
  }

const mapStateToProps = state => ({
  lecture: state.invited_lectures.lecture,
});


export default connect(mapStateToProps,{ getLecture })(Lecture_view);