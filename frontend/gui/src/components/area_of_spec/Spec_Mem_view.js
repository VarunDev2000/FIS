import React from 'react';
import { Descriptions,Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { getSpecialization } from '../../actions/specialization';

class Specialization_view extends React.Component{

  static propTypes = {
    specialization: PropTypes.array.isRequired
  }

  state = {
    specialization:{},
    length : -1,
    redirect : false
  }


    setRedirect = () => {
      this.setState({
        redirect: true
      })
    }

    addRedirect = () => {
      //this.props.history.push('/specialization/add');
      window.open("/specialization/add","_self");
    }


    editRedirect = (type) => {
      if (this.state.redirect && type === 'edit') {
        //this.props.history.push('/specialization/edit');
        window.open("/specialization/edit","_self");
      }

      else if (this.state.redirect && type === 'add') {
        //this.props.history.push('/specialization/add');
        window.open("/specialization/add","_self");
      }
    }

    
      componentDidMount() {
        this.props.getSpecialization();
        this.setState({ length: Object.keys(this.props.specialization).length });
      }
      

    render(){
      var n = 0;

      var spec_count = 0;
      this.props.specialization.map(s_m =>
        (
          s_m.spec_mem_type === "spec" ? (spec_count++) : (null)
        )
        );

      if(spec_count > 0)
      {
        n++;
      }

      var mem_count = 0;
      this.props.specialization.map(s_m =>
        (
          s_m.spec_mem_type === "mem" ? (mem_count++) : (null)
        )
        );

      if(mem_count > 0)
      {
        n++;
      }
      //console.log(n);

    return (
      <div>
      <CustomLayout>

      {
      n === 0 ? (
                  <div>
                  </div>
      ) : (
        <div>
        <div align = "right">
        {this.editRedirect('edit',"area")}
        <Button  type="primary" onClick={this.setRedirect}>Edit</Button>
        </div>
        <br/>
        {
        n === 1 ? (
        spec_count > 0 ? (
          <div>
            <Descriptions title="AREA OF SPECIALIZATION" bordered></Descriptions>
            <br/>
            {
            this.props.specialization.map(s_m => (
              s_m.spec_mem_type === "spec" ?(
              <div>
              <Descriptions.Item span={3}>{ s_m.area_name }</Descriptions.Item>
              <br/><br/>
              </div>) : (null)
              ))
            }
            <br/><br/>   
          </div>
               
        ) : (
          <div>
          <Descriptions title="MEMBERSHIP OF PROFESSIONAL BODIES" bordered></Descriptions>
          <br/>
          {
          this.props.specialization.map(s_m => (
            s_m.spec_mem_type === "mem" ?(
            <div>
            <Descriptions.Item span={3}>{ s_m.mem }</Descriptions.Item>
            <br/><br/>
            </div>) : (null)
            ))
          }
          <br/><br/>   
        </div>
        )) :

        (
          <div>
          <Descriptions title="AREA OF SPECIALIZATION" bordered></Descriptions>
          <br/>
          {
          this.props.specialization.map(s_m => (
            s_m.spec_mem_type === "spec" ?(
            <div>
            <Descriptions.Item span={3}>{ s_m.area_name }</Descriptions.Item>
            <br/><br/>
            </div>) : (null)
            ))
          }
          <br/><br/>

          <Descriptions title="MEMBERSHIP OF PROFESSIONAL BODIES" bordered></Descriptions>
          <br/>
          {
          this.props.specialization.map(s_m => (
            s_m.spec_mem_type === "mem" ?(
            <div>
            <Descriptions.Item span={3}>{ s_m.mem }</Descriptions.Item>
            <br/><br/>
            </div>) : (null)
            ))
          }
          <br/>
          </div>
        )
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