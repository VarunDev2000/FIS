import React from 'react';
import { Descriptions,Button,Form, Table,Input } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { getResearch } from '../../actions/research';
import { getResearchTable } from '../../actions/research_table';
import history from '../common/history';

class Research_view extends React.Component{

  static propTypes = {
    research: PropTypes.array.isRequired,
    research_table: PropTypes.array.isRequired,
  }

  state = {
    research:{},
    table:{},
    length : -1
  }

    addRedirect = () => {
      history.push('/research/add');
    }

    editRedirect = (e) => {
        var id = e.target.id;
        history.push(`/research/edit/${id}`);
    }

    editTableRedirectwithoutID = (e) => {
      var id = "0";
      history.push(`/research/edit_table/${id}`);
  }

    editTableRedirect = (e) => {
      var id = e.target.id;
      history.push(`/research/edit_table/${id}`);
  }

    
      componentDidMount() {
        this.props.getResearch();
        this.props.getResearchTable();
      }

      componentWillReceiveProps(props) {
          var numRows = 0,table_count = 0;
          props.research.map(res => 
            (numRows++) );
          localStorage.setItem('numRows',numRows);

          this.setState({
            table : props.research_table,
          })

          props.research_table.map(table => (
            table_count++
          ))


          localStorage.setItem('table_count',table_count);
      }
      

    render(){
      var numRows = localStorage.getItem('numRows');
      var table_count = localStorage.getItem('table_count');
      //console.log(table_count)
      //var table = this.state.table;
      
      
      //console.log(re)

    return (
      <div>
      <CustomLayout>
      <Button type="primary" onClick={this.addRedirect}>Add</Button>
      <br/><br/><br/>
      {
      numRows == 0 ? (
                  <div>
                  </div>
      ) : (
      <div>
        {
          <Form>
            { 
            table_count > 0 ? (         
            this.props.research_table.map(table => (
              <div key="y">
              <label>Ph.D. Supervisor Regi. No :
              </label>{'\u00A0'}{'\u00A0'}{'\u00A0'}
              {table.phd_reg_no === "" || table_count <= 0 ? '-' : table.phd_reg_no}
              <br/><br/>
              <table border="1">
                <tr>
                  <th rowSpan = "2">Number of</th>
                  <th rowSpan = "1" colSpan = "2">As Supervisor:</th>
                  <th rowSpan = "1" colSpan = "2">As joint Supervisor:</th>
                </tr>
                <tr>
                  <th rowSpan = "1" colSpan = "1">Guided</th>
                  <th rowSpan = "1" colSpan = "1">OnGoing</th>
                  <th rowSpan = "1" colSpan = "1">Guided</th>
                  <th rowSpan = "1" colSpan = "1">OnGoing</th>
                </tr>
                <tr>
                  <td className="bolder">Ph.D. Scholars</td>
                  <td>{table.phd_s_g === "" || table_count <= 0 ? '0' : table.phd_s_g}</td>
                  <td>{table.phd_s_o === "" || table_count <= 0 ? '0' : table.phd_s_o}</td>
                  <td>{table.phd_js_g === "" || table_count <= 0 ? '0' : table.phd_js_g}</td>
                  <td>{table.phd_js_o === "" || table_count <= 0 ? '0' : table.phd_js_o}</td>
                </tr>
                <tr>
                  <td className="bolder">M.S(By Research) Students</td>
                  <td>{table.ms_s_g === "" || table_count <= 0 ? '0' : table.ms_s_g}</td>
                  <td>{table.ms_s_o === "" || table_count <= 0 ? '0' : table.ms_s_o}</td>
                  <td>{table.ms_js_g === "" || table_count <= 0 ? '0' : table.ms_js_g}</td>
                  <td>{table.ms_js_o === "" || table_count <= 0 ? '0' : table.ms_js_o}</td>
                </tr>
                <tr>
                  <td className="bolder">M.E./ M.Tech. Projects</td>
                  <td>{table.me_s_g === "" || table_count <= 0 ? '0' : table.me_s_g}</td>
                  <td>{table.me_s_o === "" || table_count <= 0 ? '0' : table.me_s_o}</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td className="bolder">M.Sc./ M.Phil. Projects</td>
                  <td>{table.msc_s_g === "" || table_count <= 0 ? '0' : table.msc_s_g}</td>
                  <td>{table.msc_s_o === "" || table_count <= 0 ? '0' : table.msc_s_o}</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
              </table>
              <br/>
              <Button id={table.id} type = "primary" style = {{width:"150px"}} onClick={this.editTableRedirect}>Edit</Button>

              </div>
              ))
              ) : (
              <div key="n">
              <label>Ph.D. Supervisor Regi. No :
              </label>{'\u00A0'}{'\u00A0'}{'\u00A0'} -
              <br/><br/>
              <table border="1">
                <tr>
                  <th rowSpan = "2">Number of</th>
                  <th rowSpan = "1" colSpan = "2">As Supervisor:</th>
                  <th rowSpan = "1" colSpan = "2">As joint Supervisor:</th>
                </tr>
                <tr>
                  <th rowSpan = "1" colSpan = "1">Guided</th>
                  <th rowSpan = "1" colSpan = "1">OnGoing</th>
                  <th rowSpan = "1" colSpan = "1">Guided</th>
                  <th rowSpan = "1" colSpan = "1">OnGoing</th>
                </tr>
                <tr>
                  <td className="bolder">Ph.D. Scholars</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td className="bolder">M.S(By Research) Students</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td className="bolder">M.E./ M.Tech. Projects</td>
                  <td>0</td>
                  <td>0</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td className="bolder">M.Sc./ M.Phil. Projects</td>
                  <td>0</td>
                  <td>0</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
              </table> 
              <br/>
              <Button  type = "primary" style = {{width:"150px"}} onClick={this.editTableRedirectwithoutID}>Edit</Button>
              </div>
              )
              }
          </Form>
        }
        <br/><br/><hr/><br/>
        <h2>DETAILS OF SCHOLARS - ONGOING</h2><br/>
        {
        this.props.research.map(res => (
          res.status === "on_going" ? (
          <div key = {res.id}>
                <br/>
                <Descriptions bordered>
                <Descriptions.Item label="REG NO" span={3}>{ res.reg_no }</Descriptions.Item>   
                <Descriptions.Item label="NAME OF SCHOLAR" span={3}>{ res.name_of_scholar }</Descriptions.Item>
                <Descriptions.Item label="TITLE" span={3}>{ res.title }</Descriptions.Item>
                <Descriptions.Item label="CAPACITY" span={3}>{ res.capacity }</Descriptions.Item>
                </Descriptions>
                <Button id = {res.id} type = "primary" className="editButton" onClick={this.editRedirect}>Edit</Button>
          
                <br /><br/>
          </div>
          ) : (null)
        )
      )
      }

      <hr/><br/>

      <h2>DETAILS OF SCHOLARS - COMPLETED</h2><br/>
      {
        this.props.research.map(res => (
          res.status === "completed" ? (
            <div key = {res.id}>
                  <br/>
                  <Descriptions bordered>
                  <Descriptions.Item label="REG NO" span={3}>{ res.reg_no }</Descriptions.Item>   
                  <Descriptions.Item label="NAME OF SCHOLAR" span={3}>{ res.name_of_scholar }</Descriptions.Item>
                  <Descriptions.Item label="TITLE" span={3}>{ res.title }</Descriptions.Item>
                  <Descriptions.Item label="CAPACITY" span={3}>{ res.capacity }</Descriptions.Item>
                  </Descriptions>
                  <Button id = {res.id} type = "primary" className="editButton" onClick={this.editRedirect}>Edit</Button>
            
                  <br /><br/>
            </div>
            ) : (null)
            )
          )
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
  research: state.research.research,
  research_table: state.research_table.research_table
});


export default connect(mapStateToProps,{ getResearch,getResearchTable })(Research_view);