import React from 'react';
import { Form,Button } from 'antd';
import jsPDF from 'jspdf';
import PropTypes from 'prop-types'; 
import CustomLayout from '../Admin_Layout';
import { connect } from 'react-redux';
import { getAllPublication } from '../../actions/publication';
import { getAllBookpubli } from '../../actions/book_published';

class Admin_Report_Index extends React.Component{

    state = {
        from_year : "",
        to_year : "",
        from_date : "",
        to_date : "",
        doc : null,
        pdfgenerated : false,
    }

    static propTypes = {
        publication: PropTypes.array.isRequired,
        bookPubli: PropTypes.array.isRequired,
    }

    //------------------------------------------------------------------
    GeneratePaperJournalsPDF = () => {
        var x = 20,y =30,num=1,s="",splitTitle="",len;

        var doc = new jsPDF('p','pt','a4');
        doc.setFontType('normal');
        doc.setFontSize(11)

        this.props.publication.map(publi => (
            //console.log(publi),
            doc.setTextColor(0,0,0),
            s = num + ".    "+publi.all_auth_inorder+',"'+publi.title+'",'+publi.journal_name+
            ",Vol "+(publi.volume == null ? "-" : publi.volume) +",Issue "+(publi.issue == null ? "-" : publi.issue)+",pp "+
            publi.page_no+"("+publi.year+")",

            splitTitle = doc.splitTextToSize(s, 570),

            doc.text(x,y,splitTitle),
            len = Math.round((s.length)/570)+1,
            len == 1 ? (len = len+1) : null,
            console.log(len),
            y=y+(len)*15,
            doc.setTextColor(0,0,229),
            publi.pdf == null ? "" : (
            doc.textWithLink('Download pdf', x, y, { url: publi.pdf })),
            y = y+1,
            s = "",
            num = num+1
        ))
    
        //console.log(this.props.publication)
        //console.log(this.props.bookPubli)
        //const state = store.getState();
        //const data = state.publication.publication
        return doc.output('bloburl');
    }
    //------------------------------------------------------------------

    generatePDF = (id) =>
    {
        if(id == "paperjournal")
        {
            this.setState({
                doc : this.GeneratePaperJournalsPDF()
            })   
        }
        this.setState({
            pdfgenerated : true
        })
        window.scrollTo(0, 200) 
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
        if(this.state.from_year > this.state.to_year)
        {
            alert("Invalid \"From - To\"")
        }
        else{
                this.generatePDF(e.target.id)
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

    componentDidMount()
    {
        this.props.getAllPublication();
        this.props.getAllBookpubli();
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
                <h1>GENERATE REPORT</h1><hr/><br/><br/>

                {
                this.state.pdfgenerated == true ? (
                <div>
                <div align="right">
                    <Button type="danger" onClick={this.closePDF}>X</Button>
                </div>
                <iframe ref="iframeref" src={this.state.doc}></iframe><br/><br/><br/><br/>
                </div>
                ) : (null)
                }

                <div className = "report_part">
                <br/><br/>

                <Form.Item >
                <center>
                <label>From</label>{'\u00A0'}{'\u00A0'}
                <select className = "selectClass" name="from_year" defaultValue={''} onChange = {this.onChange}>
                    <option value="All">All</option>
                    {year}
                </select> {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                <label>To</label>{'\u00A0'}{'\u00A0'}
                <select className = "selectClass" name="to_year" defaultValue={''} onChange = {this.onChange}>
                    <option value="All">All</option>
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
                            <Button type="primary" id="paperjournal" onClick = {this.onSubmit1}>GENERATE</Button>
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
    

const mapStateToProps = state => ({
    publication: state.publication.publication,
    bookPubli: state.book_published.book,
});
  
  
export default connect(mapStateToProps,{ getAllPublication,getAllBookpubli })(Admin_Report_Index);