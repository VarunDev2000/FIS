import React from 'react';
import { Form,Button } from 'antd';
import jsPDF from 'jspdf';
import CustomLayout from '../Admin_Layout';

class Admin_Report_Index extends React.Component{

    state = {
        from_year : "",
        to_year : "",
        from_date : "",
        to_date : "",
        nama:'',
        pesan:'',
        tinggi:11.69,
        lebar:'08.27',
        judul:'report.pdf',
        gambar:'https://4.bp.blogspot.com/-89TxYwvuJyA/WxOWE4WkHPI/AAAAAAAAAiM/MBWeo995SbkEC6XQVJmtS_ZeKKZsG6MYgCLcBGAs/s400/lin.png'
    }

    generatePDF(){
        //e.preventDefault();
        var name = "varun.pdf"
        var doc = new jsPDF('p','pt');
        doc.text(`PDF size:Vadfdfdfdf`, 20, 30)
        // format: (image_file, 'image_type', X_init, Y_init, X_fin, Y_fin)
        doc.save(`${name}`)
      };

    
    onChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    }

    onSubmit1 = (e) => {
        if(this.state.from_year === "" || this.state.to_year === "")
        {
            alert("Invalid \"From - To\"")
        }
        else{
                this.generatePDF()
        }
    }

    onSubmit2 = (e) => {
        alert("Submit 2 Clicked!!")
    }

    render(){
        localStorage.removeItem('s_key');
        const year = [];

        for (let i = 1950;i <= (new Date().getFullYear());i++) {
          year.push(<option key = {i} value = {i}>{i}</option>)
        }

        return (
            <CustomLayout> 
                <Form >
                <form onSubmit ={this.onSubmit1}>
                <h1>GENERATE YOUR REPORT</h1><hr/><br/><br/>

                <div className = "report_part">
                <br/><br/>

                <Form.Item >
                <center>
                <label>From</label>{'\u00A0'}{'\u00A0'}
                <select className = "selectClass" name="from_year" defaultValue={''} onChange = {this.onChange}>
                    <option disabled value="">-</option>
                    {year}
                </select> {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                <label>To</label>{'\u00A0'}{'\u00A0'}
                <select className = "selectClass" name="to_year" defaultValue={''} onChange = {this.onChange}>
                    <option disabled value="">-</option>
                    {year}
                </select>
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
        )
    }
}
    
export default Admin_Report_Index;