import React from 'react';
import { Form, Input, Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { addResearchTable,editResearchTable,getResearchTable } from '../../actions/research_table';


class ResearchTableEdit extends React.Component {

  state = {
    research_table:{},
    res_table:{},
    redirect : false,

    phd_reg_no : "",
    phd_s_g : "",
    phd_s_o : "",
    phd_js_g : "",
    phd_js_o : "",
    ms_s_g : "",
    ms_s_o : "",
    ms_js_g : "",
    ms_js_o : "",
    me_s_g : "",
    me_s_o : "",
    msc_s_g : "",
    msc_s_o : "",
}

static propTypes = {
  addResearchTable: PropTypes.func.isRequired,
  editResearchTable: PropTypes.func.isRequired,
  research_table: PropTypes.object.isRequired,
}


onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
}


onSubmit = (e) => {

  e.preventDefault();
  const id = this.props.match.params.id;

  const {phd_reg_no,phd_s_g,phd_s_o,phd_js_g,phd_js_o,ms_s_g,ms_s_o,ms_js_g,ms_js_o,
  me_s_g,me_s_o,msc_s_g,msc_s_o} = this.state;

  const res = {phd_reg_no,phd_s_g,phd_s_o,phd_js_g,phd_js_o,ms_s_g,ms_s_o,ms_js_g,ms_js_o,
    me_s_g,me_s_o,msc_s_g,msc_s_o}

  if(id === "0")
  {
    this.props.addResearchTable(res);
  }

  else{
    this.props.editResearchTable(res,id);
  }

  window.open('/research',"_self");
};


setStates(props)
{
    this.setState({
      phd_reg_no : props.research_table.phd_reg_no,
      phd_s_g : props.research_table.phd_s_g,
      phd_s_o : props.research_table.phd_s_o,
      phd_js_g : props.research_table.phd_js_g,
      phd_js_o : props.research_table.phd_js_o,
      ms_s_g : props.research_table.ms_s_g,
      ms_s_o : props.research_table.ms_s_o,
      ms_js_g : props.research_table.ms_js_g,
      ms_js_o : props.research_table.ms_js_o,
      me_s_g : props.research_table.me_s_g,
      me_s_o : props.research_table.me_s_o,
      msc_s_g : props.research_table.msc_s_g,
      msc_s_o : props.research_table.msc_s_o,
    })
}


componentDidMount()
{    
  this.props.getResearchTable();
}


componentWillReceiveProps(props) {
    const id = this.props.match.params.id;
    if(id != "0")
    {
        this.setStates(props);
        this.setState({
        res_table : props.research_table
        })
    }
}

  render() {
    const id = this.props.match.params.id;
    
    return (
      <div>
        <CustomLayout>
        <Form>
        {
        id === "0" ? (
            <div>

            <label>Ph.D. Supervisor Regi. No :
            </label>{'\u00A0'}{'\u00A0'}{'\u00A0'}
            <Input name = "phd_reg_no" className = "edit_input"  onChange = {this.onChange} />
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
                <td><Input name = "phd_s_g" type = "number" className = "edit_input" defaultValue = "0" onChange = {this.onChange} /></td>
                <td><Input name = "phd_s_o" type = "number" className = "edit_input" defaultValue = "0" onChange = {this.onChange} /></td>
                <td><Input name = "phd_js_g" type = "number" className = "edit_input" defaultValue = "0" onChange = {this.onChange} /></td>
                <td><Input name = "phd_js_o" type = "number" className = "edit_input" defaultValue = "0" onChange = {this.onChange} /></td>
              </tr>
              <tr>
                <td className="bolder">M.S(By Research) Students</td>
                <td><Input name = "ms_s_g" type = "number" className = "edit_input" defaultValue = "0" onChange = {this.onChange} /></td>
                <td><Input name = "ms_s_o" type = "number" className = "edit_input" defaultValue = "0" onChange = {this.onChange} /></td>
                <td><Input name = "ms_js_g" type = "number" className = "edit_input" defaultValue = "0" onChange = {this.onChange} /></td>
                <td><Input name = "ms_js_o" type = "number" className = "edit_input" defaultValue = "0" onChange = {this.onChange} /></td>
            </tr>
              <tr>
                <td className="bolder">M.E./ M.Tech. Projects</td>
                <td><Input name = "me_s_g" type = "number" className = "edit_input" defaultValue = "0" onChange = {this.onChange} /></td>
                <td><Input name = "me_s_o" type = "number" className = "edit_input" defaultValue = "0" onChange = {this.onChange} /></td>
                <td>--</td>
                <td>--</td>
              </tr>
              <tr>
                <td className="bolder">M.Sc./ M.Phil. Projects</td>
                <td><Input name = "msc_s_g" type = "number" className = "edit_input" defaultValue = "0" onChange = {this.onChange} /></td>
                <td><Input name = "msc_s_o" type = "number" className = "edit_input" defaultValue = "0" onChange = {this.onChange} /></td>
                <td>--</td>
                <td>--</td>
              </tr>
            </table>
            <br/>
            <div align="right">
            <Button  type = "primary" style = {{width:"150px"}} onClick={this.onSubmit}>Submit</Button>
            </div>
            </div>
        ) : (
          this.props.research_table.map(table => (
            <div key="y">
            <label>Ph.D. Supervisor Regi. No :
            </label>{'\u00A0'}{'\u00A0'}{'\u00A0'}
            <Input name = "phd_reg_no" type = "number" defaultValue={table.phd_reg_no} className = "edit_input"  onChange = {this.onChange} />
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
                <td><Input name = "phd_s_g" type = "number" defaultValue={table.phd_s_g == "" ? 0 : table.phd_s_g} className = "edit_input"  onChange = {this.onChange} /></td>
                <td><Input name = "phd_s_o" type = "number" defaultValue={table.phd_s_o == "" ? 0 : table.phd_s_o} className = "edit_input"  onChange = {this.onChange} /></td>
                <td><Input name = "phd_js_g" type = "number" defaultValue={table.phd_js_g == "" ? 0 : table.phd_js_g} className = "edit_input"  onChange = {this.onChange} /></td>
                <td><Input name = "phd_js_o" type = "number" defaultValue={table.phd_js_o == "" ? 0 : table.phd_js_o} className = "edit_input"  onChange = {this.onChange} /></td>
              </tr>
              <tr>
                <td className="bolder">M.S(By Research) Students</td>
                <td><Input name = "ms_s_g" type = "number" className = "edit_input" defaultValue = {table.ms_s_g == "" ? 0 : table.ms_s_g} onChange = {this.onChange} /></td>
                <td><Input name = "ms_s_o" type = "number" className = "edit_input" defaultValue = {table.ms_s_o == "" ? 0 : table.ms_s_o} onChange = {this.onChange} /></td>
                <td><Input name = "ms_js_g" type = "number" className = "edit_input" defaultValue = {table.ms_js_g == "" ? 0 : table.ms_js_g} onChange = {this.onChange} /></td>
                <td><Input name = "ms_js_o" type = "number" className = "edit_input" defaultValue = {table.ms_js_o == "" ? 0 : table.ms_js_o} onChange = {this.onChange} /></td>
              </tr>
              <tr>
                <td className="bolder">M.E./ M.Tech. Projects</td>
                <td><Input name = "me_s_g" type = "number" className = "edit_input" defaultValue = {table.me_s_g == "" ? 0 : table.me_s_g} onChange = {this.onChange} /></td>
                <td><Input name = "me_s_o" type = "number" className = "edit_input" defaultValue = {table.me_s_o == "" ? 0 : table.me_s_o} onChange = {this.onChange} /></td>
                <td>--</td>
                <td>--</td>
              </tr>
              <tr>
                <td className="bolder">M.Sc./ M.Phil. Projects</td>
                <td><Input name = "msc_s_g" type = "number" className = "edit_input" defaultValue = {table.msc_s_g == "" ? 0 : table.msc_s_g} onChange = {this.onChange} /></td>
                <td><Input name = "msc_s_o" type = "number" className = "edit_input" defaultValue = {table.msc_s_o == "" ? 0 : table.msc_s_o} onChange = {this.onChange} /></td>
                <td>--</td>
                <td>--</td>
              </tr>
            </table>
            <br/>
            <Button id={table.id} type = "primary" style = {{width:"150px"}} onClick={this.onSubmit}>Submit</Button>

            </div>
            ))
        )
        }
        </Form>
        </CustomLayout>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    research_table: state.research_table.research_table
});


export default connect(mapStateToProps,{ addResearchTable,editResearchTable,getResearchTable})(ResearchTableEdit);