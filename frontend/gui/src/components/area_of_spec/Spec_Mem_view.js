import React from 'react';
import { Descriptions,Button } from 'antd';
import { Redirect } from 'react-router-dom';
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

    renderRedirect = (type) => {
      if (this.state.redirect && type === 'edit') {
        return <Redirect to = '/specialization/edit' />
      }

      else if (this.state.redirect && type === 'add') {
        return <Redirect to = '/specialization/add' />
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
          s_m.spec_mem_type == "spec" ? (spec_count++) : (spec_count = spec_count)
        )
        );

      spec_count > 0 ? (n++):(n = n);

      var mem_count = 0;
      this.props.specialization.map(s_m =>
        (
          s_m.spec_mem_type == "mem" ? (mem_count++) : (mem_count = mem_count)
        )
        );

      mem_count > 0 ? (n++):(n = n);
      console.log(n);

    return (
      <div>
      <CustomLayout>

      {
      n == 0 ? (
                  <div>
                  </div>
      ) : (
        n == 1 ? (
        spec_count > 0 ? (
          <div>
            <Descriptions title="AREA OF SPECIALIZATION" bordered></Descriptions>
            <br/>
            {
            this.props.specialization.map(s_m => (
              s_m.spec_mem_type == "spec" ?(
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
            s_m.spec_mem_type == "mem" ?(
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
            s_m.spec_mem_type == "spec" ?(
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
            s_m.spec_mem_type == "mem" ?(
            <div>
            <Descriptions.Item span={3}>{ s_m.mem }</Descriptions.Item>
            <br/><br/>
            </div>) : (null)
            ))
          }
          <br/><br/>   
        </div>
        
        )
      )
      }

      {this.renderRedirect('add')}
      <Button type="primary" onClick={this.setRedirect}>Add Specialization & Membership</Button>
      </CustomLayout>
      </div>
      
    );
      
    }
}

const mapStateToProps = state => ({
  specialization: state.specialization.specialization
});


export default connect(mapStateToProps,{ getSpecialization })(Specialization_view);