import React from 'react';
import { Form,Button } from 'antd';
import jsPDF from 'jspdf';
import CustomLayout from '../Admin_Layout';
import Layout from '../Layout';

class Report_Index extends React.Component{

    state = {
        from_year : "",
        to_year : "",
        from_date : "",
        to_date : "",
        doc : null,
        pdfgenerated : false,
    }

    generatePDF = () =>
    {
      var doc = new jsPDF('p','pt','a4');
      doc.text(20,20,'Hello World');
  
      //console.log(doc.output('bloburl'))
      this.setState({
          doc : doc.output('bloburl'),
          pdfgenerated : true
      })
      //doc.save("g.pdf");
    }

    closePDF = () =>
    {
        this.setState({
            pdfgenerated : false
        })
    }
    
    onChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    }

    onSubmit1 = (e) => {
        if(this.state.from_year === "" || this.state.to_year === "" || 
        this.state.from_year > this.state.to_year)
        {
            alert("Invalid \"From - To\"")
        }
        else{
                this.generatePDF()
        }
    }

    onSubmit2 = (e) => {
        if(this.state.from_date > this.state.to_date)
        {
            alert("Invalid \"From Date - To Date\"")
        }
        else{
            alert("Submit 2 Clicked!!")
        }
    }

    render(){
        localStorage.removeItem('s_key');
        const year = [];

        for (let i = 1950;i <= (new Date().getFullYear());i++) {
          year.push(<option key = {i} value = {i}>{i}</option>)
        }

        var user = localStorage.getItem('username');

        return (
        <div>
        {
            user === "ad" ? (
            <CustomLayout> 
                <Form >
                <form onSubmit ={this.onSubmit1}>
                <h1>GENERATE YOUR REPORT</h1><hr/><br/><br/>

                {
                this.state.pdfgenerated == true ? (
                <div>
                <div align="right">
                    <Button type="danger" onClick={this.closePDF}>X</Button>
                </div>
                <iframe src={this.state.doc}></iframe><br/><br/><br/><br/>
                </div>
                ) : (null)
                }

                <div className = "report_part">
                <br/><br/>

                <Form.Item >

                <center>
                <label>From</label>{'\u00A0'}{'\u00A0'}
                <input type="month" name = "from_year" required onChange = {this.onChange}></input>
                 {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}

                <label>To</label>{'\u00A0'}{'\u00A0'}
                <input type="month" name = "to_year" required onChange = {this.onChange}></input>
                </center>

                </Form.Item>
                <br/>
                <Form.Item>
                <table className = "rep_table">
                    <tr className = "rep_tr">
                        <td className = "rep_tr">1) Paper Published in Journals</td>
                        <td className = "rep_tr">
                            <Button type="primary" htmlType = "submit">GENERATE</Button>
                        </td>
                    </tr>
                    <tr className = "rep_tr">
                        <td className = "rep_tr">2) Book Published</td>
                        <td className = "rep_tr">
                            <Button type="primary" htmlType = "submit">GENERATE</Button>
                        </td>
                    </tr>
                    <tr className = "rep_tr">
                        <td className = "rep_tr">3) Awards Received</td>
                        <td className = "rep_tr">
                            <Button type="primary" htmlType = "submit">GENERATE</Button>
                        </td>
                    </tr>
                </table>
                </Form.Item>
                </div>
                </form>
                <br/><br/><br/>

                <form onSubmit ={this.onSubmit2}>
                <div className = "report_part">
                <br/><br/>

                <Form.Item >
                <center>
                <label>From</label>{'\u00A0'}{'\u00A0'}
                    <input type = "date" required name="from_date" onChange={this.onChange}></input>
                {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                <label>To</label>{'\u00A0'}{'\u00A0'}           
                    <input type = "date" required name="to_date" onChange={this.onChange}></input>
                </center>
                </Form.Item>
                <br/>
                <Form.Item>
                <table className = "rep_tr">
                    <tr className = "rep_tr">
                        <td className = "rep_tr">4) Workshop/Seminar/Conference</td>
                        <td className = "rep_tr">
                            <Button type="primary" htmlType = "submit">GENERATE</Button>
                        </td>
                    </tr>
                    <tr className = "rep_tr">
                        <td className = "rep_tr">5) Paper presented in Workshop/Seminar/Conference</td>
                        <td className = "rep_tr">
                            <Button type="primary" htmlType = "submit">GENERATE</Button>
                        </td>
                    </tr>
                    <tr className = "rep_tr">
                        <td className = "rep_tr">6) Sponsored Projects Handled</td>
                        <td className = "rep_tr">
                            <Button type="primary" htmlType = "submit">GENERATE</Button>
                        </td>
                    </tr>
                    <tr className = "rep_tr">
                        <td className = "rep_tr">7) Patents filed and awarded</td>
                        <td className = "rep_tr">
                            <Button type="primary" htmlType = "submit">GENERATE</Button>
                        </td>
                    </tr>
                    <tr className = "rep_tr">
                        <td className = "rep_tr">8) Spl Representation in Committees and Commissions</td>
                        <td className = "rep_tr">
                            <Button type="primary" htmlType = "submit">GENERATE</Button>
                        </td>
                    </tr>
                    <tr className = "rep_tr">
                        <td className = "rep_tr">9) Invited Lectures</td>
                        <td className = "rep_tr">
                            <Button type="primary" htmlType = "submit">GENERATE</Button>
                        </td>
                    </tr>
                    <tr className = "rep_tr">
                        <td className = "rep_tr">10) Experience abroad</td>
                        <td className = "rep_tr">
                            <Button type="primary" htmlType = "submit">GENERATE</Button>
                        </td>
                    </tr>
                    <tr className = "rep_tr">
                        <td className = "rep_tr">11) Research Activities</td>
                        <td className = "rep_tr">
                            <Button type="primary" htmlType = "submit">GENERATE</Button>
                        </td>
                    </tr>
                </table>
                </Form.Item>
                </div>
                </form>
                </Form>
            </CustomLayout>

            ) : (

            <Layout> 
                <Form >
                <form onSubmit ={this.onSubmit1}>
                <h1>GENERATE YOUR REPORT</h1><hr/><br/><br/>

                {
                this.state.pdfgenerated == true ? (
                <div>
                <div align="right">
                    <Button type="danger" onClick={this.closePDF}>X</Button>
                </div>
                <iframe src={this.state.doc}></iframe><br/><br/><br/><br/>
                </div>
                ) : (null)
                }

                <div className = "report_part">
                <br/><br/>

                <Form.Item >
                    
                <center>
                <label>From</label>{'\u00A0'}{'\u00A0'}
                <input type="month" name = "from_year" required onChange = {this.onChange}></input>
                 {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}

                <label>To</label>{'\u00A0'}{'\u00A0'}
                <input type="month" name = "to_year" required onChange = {this.onChange}></input>
                </center>

                </Form.Item>
                <br/>
                <Form.Item>
                <table className = "rep_table">
                    <tr className = "rep_tr">
                        <td className = "rep_tr">1) Paper Published in Journals</td>
                        <td className = "rep_tr">
                            <Button type="primary" htmlType = "submit">GENERATE</Button>
                        </td>
                    </tr>
                    <tr className = "rep_tr">
                        <td className = "rep_tr">2) Book Published</td>
                        <td className = "rep_tr">
                            <Button type="primary" htmlType = "submit">GENERATE</Button>
                        </td>
                    </tr>
                    <tr className = "rep_tr">
                        <td className = "rep_tr">3) Awards Received</td>
                        <td className = "rep_tr">
                            <Button type="primary" htmlType = "submit">GENERATE</Button>
                        </td>
                    </tr>
                </table>
                </Form.Item>
                </div>
                </form>
                <br/><br/><br/>

                <form onSubmit ={this.onSubmit2}>
                <div className = "report_part">
                <br/><br/>

                <Form.Item >
                <center>
                <label>From</label>{'\u00A0'}{'\u00A0'}
                    <input type = "date" required name="from_date" onChange={this.onChange}></input>
                {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                <label>To</label>{'\u00A0'}{'\u00A0'}           
                    <input type = "date" required name="to_date" onChange={this.onChange}></input>
                </center>
                </Form.Item>
                <br/>
                <Form.Item>
                <table className = "rep_tr">
                    <tr className = "rep_tr">
                        <td className = "rep_tr">4) Workshop/Seminar/Conference</td>
                        <td className = "rep_tr">
                            <Button type="primary" htmlType = "submit">GENERATE</Button>
                        </td>
                    </tr>
                    <tr className = "rep_tr">
                        <td className = "rep_tr">5) Paper presented in Workshop/Seminar/Conference</td>
                        <td className = "rep_tr">
                            <Button type="primary" htmlType = "submit">GENERATE</Button>
                        </td>
                    </tr>
                    <tr className = "rep_tr">
                        <td className = "rep_tr">6) Sponsored Projects Handled</td>
                        <td className = "rep_tr">
                            <Button type="primary" htmlType = "submit">GENERATE</Button>
                        </td>
                    </tr>
                    <tr className = "rep_tr">
                        <td className = "rep_tr">7) Patents filed and awarded</td>
                        <td className = "rep_tr">
                            <Button type="primary" htmlType = "submit">GENERATE</Button>
                        </td>
                    </tr>
                    <tr className = "rep_tr">
                        <td className = "rep_tr">8) Spl Representation in Committees and Commissions</td>
                        <td className = "rep_tr">
                            <Button type="primary" htmlType = "submit">GENERATE</Button>
                        </td>
                    </tr>
                    <tr className = "rep_tr">
                        <td className = "rep_tr">9) Invited Lectures</td>
                        <td className = "rep_tr">
                            <Button type="primary" htmlType = "submit">GENERATE</Button>
                        </td>
                    </tr>
                    <tr className = "rep_tr">
                        <td className = "rep_tr">10) Experience abroad</td>
                        <td className = "rep_tr">
                            <Button type="primary" htmlType = "submit">GENERATE</Button>
                        </td>
                    </tr>
                    <tr className = "rep_tr">
                        <td className = "rep_tr">11) Research Activities</td>
                        <td className = "rep_tr">
                            <Button type="primary" htmlType = "submit">GENERATE</Button>
                        </td>
                    </tr>
                </table>
                </Form.Item>
                </div>
                </form>
                </Form>
            </Layout>
            )
        }
        </div>
        )
    }
}
    
export default Report_Index;