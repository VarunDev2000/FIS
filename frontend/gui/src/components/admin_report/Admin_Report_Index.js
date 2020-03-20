import React from 'react';
import history from '../common/history';
import jsPDF from 'jspdf';
import PropTypes from 'prop-types'; 
import CustomLayout from '../Admin_Layout';
import { connect } from 'react-redux';
import { getAllPublication } from '../../actions/publication';
import { getAllBookpubli } from '../../actions/book_published';
import { getAllAchievements } from '../../actions/achievements';

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
        achievements: PropTypes.array.isRequired,
    }

    //------------------------------------------------------------------
    GeneratePaperJournalsPDF = () => {
        var x = 20,y =30,num=1,s="",splitTitle="",len;

        var doc = new jsPDF('p','pt','a4');
        doc.setFontType('normal');
        doc.setFontSize(11)

        this.props.publication.map(publi => (
            
            publi.year >= this.state.from_year && publi.year <= this.state.to_year ?(
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

            ) : (this.state.from_year === "" || this.state.to_year === "" ? 
            (
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

            ):(null))
        ))
    
        //console.log(this.props.publication)
        //console.log(this.props.bookPubli)
        //const state = store.getState();
        //const data = state.publication.publication
        return doc.output('bloburl');
    }


    GenerateBookPubliPDF = () => {
        var x = 20,y =30,num=1,s="",splitTitle="",len;

        var doc = new jsPDF('p','pt','a4');
        doc.setFontType('normal');
        doc.setFontSize(11)

        this.props.bookPubli.map(publi => (
            
            publi.year_of_publication >= this.state.from_year && publi.year_of_publication <= this.state.to_year ?(
            doc.setTextColor(0,0,0),
            s = num + ".    "+'"'+publi.title+'"'+',authored by '+publi.author+','+publi.co_author1+
            ","+publi.co_author2+' and published by '+publi.publisher+','+
            publi.place_of_publication+"("+publi.year_of_publication+")",

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

            ) : (this.state.from_year === "" || this.state.to_year === "" ? 
            (
            doc.setTextColor(0,0,0),
            s = num + ".    "+'"'+publi.title+'"'+',authored by '+publi.author+','+publi.co_author1+
            ","+publi.co_author2+' and published by '+publi.publisher+','+
            publi.place_of_publication+"("+publi.year_of_publication+")",

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

            ):(null))
        ))
    
        //console.log(this.props.publication)
        //console.log(this.props.bookPubli)
        //const state = store.getState();
        //const data = state.publication.publication
        return doc.output('bloburl');
    }


    GenerateAwardsReceivedPDF = () =>{
        var x = 20,y =30,num=1,s="",splitTitle="",len;

        var doc = new jsPDF('p','pt','a4');
        doc.setFontType('normal');
        doc.setFontSize(11)

        this.props.achievements.map(ach => (
            
            ach.year >= this.state.from_year && ach.year <= this.state.to_year 
            && ach.ach_type === "awards" ? (

            doc.setTextColor(0,0,0),
            s = num + ".    "+'"'+ach.title+'"'+' given by '+ach.institution+' from '+
            ach.country+"("+ach.year+")",

            splitTitle = doc.splitTextToSize(s, 570),

            doc.text(x,y,splitTitle),
            len = Math.round((s.length)/570)+1,
            len == 1 ? (len = len+1) : null,
            console.log(len),
            y=y+(len)*15,
            doc.setTextColor(0,0,229),
            ach.pdf == null ? "" : (
            doc.textWithLink('Download pdf', x, y, { url: ach.pdf })),
            y = y+1,
            s = "",
            num = num+1

            ) : (this.state.from_year === "" || this.state.to_year === ""
             && ach.ach_type === "awards" ?  
            (
            doc.setTextColor(0,0,0),
            s = num + ".    "+'"'+ach.title+'"'+' given by '+ach.institution+' from '+
            ach.country+"("+ach.year+")",

            splitTitle = doc.splitTextToSize(s, 570),

            doc.text(x,y,splitTitle),
            len = Math.round((s.length)/570)+1,
            len == 1 ? (len = len+1) : null,
            console.log(len),
            y=y+(len)*15,
            doc.setTextColor(0,0,229),
            ach.pdf == null ? "" : (
            doc.textWithLink('Download pdf', x, y, { url: ach.pdf })),
            y = y+1,
            s = "",
            num = num+1

            ):(null))
        ))
    
        return doc.output('bloburl');
    }
    //------------------------------------------------------------------

    generatePDF = (id) =>
    {
        if(id === "paperjournal")
            var iframe = "<iframe width='100%' height='100% ' src='" + this.GeneratePaperJournalsPDF() + "'></iframe>"
        else if(id === "bookpublished")
            var iframe = "<iframe width='100%' height='100% ' src='" + this.GenerateBookPubliPDF() + "'></iframe>"
        else if(id === "awardsreceived")
            var iframe = "<iframe width='100%' height='100% ' src='" + this.GenerateAwardsReceivedPDF() + "'></iframe>"
        
            
        var x = window.open();
        x.document.open();
        x.document.write(iframe);
        x.document.close();
    }

    closePDF = () =>
    {
        this.setState({
            pdfgenerated : false
        })
    }

    changePage = (url,e) => {
        history.push(url)
    }
    
    onChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    }

    onSubmit1 = (e) => {
        //e.preventDefault();
        
        if(this.state.from_year > this.state.to_year)
        {
            alert("Invalid \"From - To\"")
        }
        else{
                this.generatePDF(e.target.id)
        }
    }

    onSubmit2 = (e) => {
        e.preventDefault();

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
        this.props.getAllAchievements();
    }

    render(){
        localStorage.removeItem('s_key');
        const year = [];

        for (let i = 1950;i <= (new Date().getFullYear());i++) {
          year.push(<option key = {i} value = {i}>{i}</option>)
        }

        return (
            <CustomLayout> 
                <div class="container-fluid">
                <div class="row page-titles">
                    <div class="col-md-5 align-self-center">
                        <h4 class="text-themecolor">Generate Report</h4>
                    </div>
                    <div class="col-md-7 align-self-center text-right">
                        <div class="d-flex justify-content-end align-items-center">
                            <ol class="breadcrumb">
                            </ol>
                    </div>
                    </div>
                </div>


                <div class="row">

                <form>
                  <div class="col-12">
                      <div class="card">
                          <div class="card-body">

                              <br/>
                            <div class="row">
                                <div class="col-sm-5">
                                    <input class="report-month" type="month" name = "from_year" onChange = {this.onChange}></input>
                                </div>
                                <div class="col-sm-1 to" align="center">TO</div>
                                <div class="col-sm-5">
                                    <input  class="report-month" type="month" name = "to_year" onChange = {this.onChange}></input>
                                </div>
                            </div>
                            
                            <br/><br/>

                             <div class="report-table table-responsive">
                                  <table class="table" id="reportTable1">
                                      <thead>
                                          <tr>
                                              <th>#</th>
                                              <th colSpan="3">Type</th>
                                              <th>Report</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td colSpan="3">Paper Published in Journals</td>
                                            <td style={{paddingLeft:"0px"}}>
                                                <button id="paperjournal" class="blu-green-btn" onClick ={this.onSubmit1}>GENERATE</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td colSpan="3">Book Published</td>
                                            <td style={{paddingLeft:"0px"}}>
                                                <button id="bookpublished" class="blu-green-btn" onClick ={this.onSubmit1}>GENERATE</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td colSpan="3">Awards Received</td>
                                            <td style={{paddingLeft:"0px"}}>
                                                <button id="awardsreceived" class="blu-green-btn" onClick ={this.onSubmit1}>GENERATE</button>
                                            </td>
                                        </tr>
                                      </tbody>
                                  </table>
                              </div>
                          </div>
                      </div>
                  </div>
                  </form>
              </div>
    
            <br/>

            <div class="row">
                <form onSubmit ={this.onSubmit2}>
                  <div class="col-12">
                      <div class="card">
                          <div class="card-body">

                              <br/>
                            <div class="row">
                                <div class="col-sm-5">
                                    <input class="report-month" type="month" name = "from_year" required onChange = {this.onChange}></input>
                                </div>
                                <div class="col-sm-1 to" align="center">TO</div>
                                <div class="col-sm-5">
                                    <input  class="report-month" type="month" name = "to_year" required onChange = {this.onChange}></input>
                                </div>
                            </div>
                            
                            <br/><br/>

                             <div class="report-table table-responsive">
                                  <table class="table" id="reportTable1">
                                      <thead>
                                          <tr>
                                              <th>#</th>
                                              <th colSpan="3">Type</th>
                                              <th>Report</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                            <td>4</td>
                                            <td colSpan="3">Workshop/Seminar/Conference</td>
                                            <td style={{paddingLeft:"0px"}}>
                                                <button class="blu-green-btn" htmlType = "submit">GENERATE</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td colSpan="3">Paper presented in Workshop/Seminar/Conference</td>
                                            <td style={{paddingLeft:"0px"}}>
                                                <button class="blu-green-btn" htmlType = "submit">GENERATE</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td colSpan="3">Sponsored Projects Handled</td>
                                            <td style={{paddingLeft:"0px"}}>
                                                <button class="blu-green-btn" htmlType = "submit">GENERATE</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td colSpan="3">Patents filed and awarded</td>
                                            <td style={{paddingLeft:"0px"}}>
                                                <button class="blu-green-btn" htmlType = "submit">GENERATE</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td colSpan="3">Spl Representation in Committees and Commissions</td>
                                            <td style={{paddingLeft:"0px"}}>
                                                <button class="blu-green-btn" htmlType = "submit">GENERATE</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td colSpan="3">Invited Lectures</td>
                                            <td style={{paddingLeft:"0px"}}>
                                                <button class="blu-green-btn" htmlType = "submit">GENERATE</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>10</td>
                                            <td colSpan="3">Experience abroad</td>
                                            <td style={{paddingLeft:"0px"}}>
                                                <button class="blu-green-btn" htmlType = "submit">GENERATE</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>11</td>
                                            <td colSpan="3">Research Activities</td>
                                            <td style={{paddingLeft:"0px"}}>
                                                <button class="blu-green-btn" htmlType = "submit">GENERATE</button>
                                            </td>
                                        </tr>
                                      </tbody>
                                  </table>
                              </div>
                          </div>
                      </div>
                  </div>
                  </form>
              </div>
               
               
            </div>
            </CustomLayout>
        )
    }
}
    

const mapStateToProps = state => ({
    publication: state.publication.publication,
    bookPubli: state.book_published.book,
    achievements: state.achievements.achievements,
});
  
  
export default connect(mapStateToProps,{ getAllPublication,getAllBookpubli,getAllAchievements })(Admin_Report_Index);