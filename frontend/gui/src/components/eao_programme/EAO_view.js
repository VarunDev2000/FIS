import React from 'react';
import { Descriptions,Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { getEAO } from '../../actions/eao_programme';
import history from '../common/history'

class EAO_view extends React.Component{

  static propTypes = {
    eao_prog: PropTypes.array.isRequired
  }

  state = {
    eao_prog:{},
    redirect : false,
    numRows : 0
}


    setRedirect = () => {
      this.setState({
        redirect: true
      })
    }

    addRedirect = () => {
      history.push('/eao_programme/add');

      //window.open("/add","_self");
    }

    editRedirect = (e) => {
      var id = e.target.id;
      history.push(`/eao_programme/edit/${id}`);

        //window.open('/edit',"_self");

    }

    
      componentDidMount() {
        this.props.getEAO();
      }

      componentWillReceiveProps(props) {
        var count = 0;
        props.eao_prog.map(eao => 
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
         <h2>EXTENSION AND OUTREACH PROGRAMME'S</h2><br/>
        {
      this.props.eao_prog.map(eao => (
              <div key = {'eao'+eao.id}>
              <Descriptions bordered>
              <Descriptions.Item label="TITLE OF THE PROGRAMME" span={3}>{ eao.title_of_prog }</Descriptions.Item>
              <Descriptions.Item label="TYPE OF THE PROGRAMME" span={3}>{ eao.type_of_prog }</Descriptions.Item>
              <Descriptions.Item label="YOUR ROLE" span={3}>{eao.your_role}</Descriptions.Item>
              <Descriptions.Item label="CROSS SECTION OF PARTICIPANTS" span={3}>{eao.cross_sec_of_participants}</Descriptions.Item>
              <Descriptions.Item label="NO OF PARTICIPANTS" span={3}>{eao.no_of_participants}</Descriptions.Item>
              <Descriptions.Item label="FUNDED BY" span={3}>{eao.funded_by}</Descriptions.Item>
              <Descriptions.Item label="VENUE" span={3}>{eao.venue}</Descriptions.Item>
              <Descriptions.Item label="DURATION" span={3}>{eao.from_date + " To " + eao.to_date}</Descriptions.Item>
              </Descriptions>
              <Button id={eao.id} type="primary" className="editButton" onClick={this.editRedirect}>EDIT</Button>
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
  eao_prog: state.eao_programme.eao,
});


export default connect(mapStateToProps,{ getEAO })(EAO_view);