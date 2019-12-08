import React from 'react';
import { Descriptions,Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { getSpecialization } from '../../actions/specialization';
import history from '../common/history'

class Specialization_view extends React.Component{

  static propTypes = {
    specialization: PropTypes.array.isRequired
  }

  state = {
    specialization:{},
    numRows : 0,
    spec_count : 0
  }


    addRedirect = () => {
      history.push('/specialization/add');

      //window.open("/qualification/edit","_self");
    }


    editRedirect = (e) => {
        history.push('/specialization/edit');
        
        //console.log(e.target.id);
        //window.open("/qualification/edit","_self");
    }

    
      componentDidMount() {
        this.props.getSpecialization();
      }

      /*
      componentDidUpdate(prevProps) {
        if (prevProps.specialization !== this.props.specialization) {
          var n = 0,spec_count = 0,mem_count = 0;

          this.props.specialization.map(s_m =>
            (
              s_m.spec_mem_type === "spec" ? (spec_count++,n++) : (s_m.spec_mem_type === "mem" ?
              (mem_count++,n++) : (null))
            ));

            localStorage.setItem('n',n);
            localStorage.setItem('spec_count',spec_count);
            localStorage.setItem('mem_count',mem_count);
        }
      }
      */


      componentWillReceiveProps(props)
      {
        var n = 0,spec_count = 0,mem_count = 0;

        props.specialization.map(s_m =>
          (
            s_m.spec_mem_type === "spec" ? (spec_count++,n++) : (s_m.spec_mem_type === "mem" ?
            (mem_count++,n++) : (null))
          ));

          localStorage.setItem('n',n);
          localStorage.setItem('spec_count',spec_count);
          localStorage.setItem('mem_count',mem_count);
      }
      

    render(){
      var n = localStorage.getItem('n');
      var spec_count = localStorage.getItem('spec_count');
      var mem_count = localStorage.getItem('mem_count');

    return (
      <div>
      <CustomLayout>

      {
      n == 0 || n < 0 ? (
                  <div>
                  </div>
      ) : (
        <div>
        <div align = "right">
        <Button  type="primary" onClick={this.editRedirect}>Edit</Button>
        </div>
        <br/>
        {
        spec_count > 0 ? (
          <div>
            <Descriptions title="AREA OF SPECIALIZATION" bordered></Descriptions>
            <br/>
            {
              this.props.specialization.map(s_m => (
              s_m.spec_mem_type === "spec" ?(
              <div key = {s_m.id}>
              <Descriptions.Item span={3}>{ s_m.area_name }</Descriptions.Item>
              <br/><br/>
              </div>) : (null)
              ))
            }
          <br/><br/>   
          </div>
            
        ) : (null)
        }

        {
        mem_count > 0 ? (
          <div>
          <Descriptions title="MEMBERSHIP OF PROFESSIONAL BODIES" bordered></Descriptions>
          <br/>
          {
          this.props.specialization.map(s_m => (
            s_m.spec_mem_type === "mem" ?(
            <div key = {s_m.id}>
            <Descriptions.Item span={3}>{ s_m.mem }</Descriptions.Item>
            <br/><br/>
            </div>) : (null)
            ))
          }
          <br/><br/>   
          </div>
        ) : (null)
        }
      </div>
      )
      }

      <Button type="primary" onClick={this.addRedirect}>Add Specialization & Membership</Button>
      </CustomLayout>
      </div>
      
    );
      
    }
}

const mapStateToProps = state => ({
  specialization: state.specialization.specialization
});


export default connect(mapStateToProps,{ getSpecialization })(Specialization_view);