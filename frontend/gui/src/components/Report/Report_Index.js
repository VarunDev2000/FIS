import React from 'react';
import jsPDF from 'jspdf';
import CustomLayout from '../Admin_Layout';
import Layout from '../Layout';
import history from '../common/history';


class Report_Index extends React.Component{

    state = {
        from_year : "",
        to_year : "",
        from_date : "",
        to_date : "",
        doc : null,
        pdfgenerated : false,
    }

    changePage = (url,e) => {
        history.push(url)
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

      var iframe = "<iframe width='100%' height='100%' src='" + doc.output('bloburl') + "'></iframe>"

        var x = window.open();
        x.document.open();
        x.document.write(iframe);
        x.document.close();

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
        e.preventDefault();

        if(this.state.from_year === "" || this.state.to_year === "" || 
        this.state.from_year > this.state.to_year)
        {
            alert("Invalid \"From - To\"")
        }
        else{
                this.generatePDF();
                //window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
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

    render(){
        localStorage.removeItem('s_key');
        const year = [];


        for (let i = 1950;i <= (new Date().getFullYear());i++) {
          year.push(<option key = {i} value = {i}>{i}</option>)
        }

        var user = localStorage.getItem('username');

        return (
            
        <div>
            <Layout>

            <div class="container-fluid">
                <div class="row page-titles">
                    <div class="col-md-5 align-self-center">
                        <h4 class="text-themecolor">Generate Report</h4>
                    </div>
                    <div class="col-md-7 align-self-center text-right">
                        <div class="d-flex justify-content-end align-items-center">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a onClick = {this.changePage.bind(this,'/')}>Dashboard</a></li>
                                <li class="breadcrumb-item active"></li>
                            </ol>
                    </div>
                    </div>
                </div>


                <div class="row">

                <form onSubmit ={this.onSubmit1}>
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
                                            <td>1</td>
                                            <td colSpan="3">Paper Published in Journals</td>
                                            <td style={{paddingLeft:"0px"}}>
                                                <button class="btn report-btn btn-success d-none d-lg-block m-l-15" htmlType = "submit">GENERATE</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td colSpan="3">Book Published</td>
                                            <td style={{paddingLeft:"0px"}}>
                                                <button class="btn report-btn btn-success d-none d-lg-block m-l-15" htmlType = "submit">GENERATE</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td colSpan="3">Awards Received</td>
                                            <td style={{paddingLeft:"0px"}}>
                                                <button class="btn report-btn btn-success d-none d-lg-block m-l-15" htmlType = "submit">GENERATE</button>
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
                                                <button class="btn report-btn btn-success d-none d-lg-block m-l-15" htmlType = "submit">GENERATE</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td colSpan="3">Paper presented in Workshop/Seminar/Conference</td>
                                            <td style={{paddingLeft:"0px"}}>
                                                <button class="btn report-btn btn-success d-none d-lg-block m-l-15" htmlType = "submit">GENERATE</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td colSpan="3">Sponsored Projects Handled</td>
                                            <td style={{paddingLeft:"0px"}}>
                                                <button class="btn report-btn btn-success d-none d-lg-block m-l-15" htmlType = "submit">GENERATE</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td colSpan="3">Patents filed and awarded</td>
                                            <td style={{paddingLeft:"0px"}}>
                                                <button class="btn report-btn btn-success d-none d-lg-block m-l-15" htmlType = "submit">GENERATE</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td colSpan="3">Spl Representation in Committees and Commissions</td>
                                            <td style={{paddingLeft:"0px"}}>
                                                <button class="btn report-btn btn-success d-none d-lg-block m-l-15" htmlType = "submit">GENERATE</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td colSpan="3">Invited Lectures</td>
                                            <td style={{paddingLeft:"0px"}}>
                                                <button class="btn report-btn btn-success d-none d-lg-block m-l-15" htmlType = "submit">GENERATE</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>10</td>
                                            <td colSpan="3">Experience abroad</td>
                                            <td style={{paddingLeft:"0px"}}>
                                                <button class="btn report-btn btn-success d-none d-lg-block m-l-15" htmlType = "submit">GENERATE</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>11</td>
                                            <td colSpan="3">Research Activities</td>
                                            <td style={{paddingLeft:"0px"}}>
                                                <button class="btn report-btn btn-success d-none d-lg-block m-l-15" htmlType = "submit">GENERATE</button>
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
            </Layout>
        </div>
        )
    }
}
    
export default Report_Index;