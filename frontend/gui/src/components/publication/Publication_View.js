import React from 'react';
import CustomLayout from '../Layout';
import {Button} from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { getPublication,deletePublication } from '../../actions/publication';
import history from '../common/history';
import 'antd/dist/antd.css'

class Publication_view extends React.Component{

  static propTypes = {
    publication: PropTypes.array.isRequired
  }

  state = {
    publication:{},
    length : -1
  }

  changePage = (url,e) => {
    history.push(url)
  }

    viewPDF = (fileURL) => {
      setTimeout(() => {
        const response = {
          file: fileURL
        };
        window.open(response.file, 'Download');  
      }, 100);
    }

    verifiedClick = e =>{
      document.getElementById("button-left").classList.add("button-left-bg");
      document.getElementById("button-right").classList.remove("button-right-bg")
    }

    unverifiedClick = e =>{
      document.getElementById("button-left").classList.remove("button-left-bg");
      document.getElementById("button-right").classList.add("button-right-bg");
    }

     popPDF(url) {
      var ref = window.open(url,"thePop","menubar=1,resizable=1,scrollbars=1,status=1,height=1920,width=1020,top=0")
      ref.focus();
    }
    

    addRedirect = () => {
      history.push('/publication/add');

      //window.open("/qualification/edit","_self");
    }

    delete = (id,e) => {
      e.preventDefault();
      console.log(id);
      var conf = window.confirm("Do you want to delete ?");
      if (conf === true) {
        this.props.deletePublication(id);
        //window.open('/publication',"_self");
      } 
    }


    editRedirect = (id,e) => {
        history.push(`/publication/edit/${id}`);
        
        //console.log(e.target.id);
        //window.open("/qualification/edit","_self");
    }

    adDetailsRedirect = (id) => {
      history.push(`/publication/ad_details/${id}`);
      
      //console.log(e.target.id);
      //window.open("/qualification/edit","_self");
  }

    search() {
      var input, filter, table, tr, td, i, txtValue;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      table = document.getElementById("myTable");
      tr = table.getElementsByTagName("tr");

      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }      
      }
    }

    
      componentDidMount() {
        this.props.getPublication();
      }

      componentWillReceiveProps(props) {
        this.props.getPublication();
          var numRows = 0;
          props.publication.map(publi => 
            (numRows++) );
          localStorage.setItem('numRows',numRows);
      }
      

    render(){
      var numRows = localStorage.getItem('numRows');
      var i = 0;

    return (
      <div>
      <CustomLayout>

      {
      numRows == 0 ? (
        <div class="container-fluid">
                 <div class="row page-titles">
                    <div class="col-md-5 align-self-center">
                        <h4 class="text-themecolor">Publications</h4>
                    </div>
                    <div class="col-md-7 align-self-center text-right">
                        <div class="d-flex justify-content-end align-items-center">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a onClick = {this.changePage.bind(this,'/')}>Dashboard</a></li>
                                <li class="breadcrumb-item active"></li>
                            </ol>
                            <button type="button" class="blu-green-btn" onClick={this.addRedirect}>ADD</button>
                        </div>
                    </div>
                </div>
        </div>
      ) : (
        <div class="container-fluid">
                 <div class="row page-titles">
                    <div class="col-md-5 align-self-center">
                        <h4 class="text-themecolor">Publications</h4>
                    </div>
                    <div class="col-md-7 align-self-center text-right">
                        <div class="d-flex justify-content-end align-items-center">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a onClick = {this.changePage.bind(this,'/')}>Dashboard</a></li>
                                <li class="breadcrumb-item active"></li>
                            </ol>
                            <button type="button" class="blu-green-btn" onClick={this.addRedirect}>ADD</button>
                        </div>
                    </div>
                </div>
                <div class="row">
                  
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                            <h6 class="card-subtitle">All Publications of<code> User</code></h6><br/>
                            
                              <input type="text" id="myInput" onKeyUp={this.search} placeholder="Search for Title.."/>
                              
                                <div class="table-responsive">
                                    <table class="table" id="myTable">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th colSpan="3">Title</th>
                                                <th>Level</th>
                                                <th>Year</th>
                                                <th colSpan="1">More</th>
                                                <th>Edit</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {
                                          this.props.publication
                                          .sort(
                                            function(a, b) {
                                              var a_year = new Date(a.year)
                                              var b_year = new Date(b.year)

                                              return a_year - b_year;
                                            }
                                          )
                                          .map(publi => (
                                                  <tr>
                                                    <td>{i=i+1}</td>
                                                    <td colSpan="3" className = "title_td" onClick={() => this.adDetailsRedirect(publi.id)}>{ publi.title }</td>
                                                    <td onClick={() => this.adDetailsRedirect(publi.id)}>{ publi.level }</td>
                                                    <td onClick={() => this.adDetailsRedirect(publi.id)}>{ publi.year }</td>
                                                    <td>
                                                    <button type="button" class="ad-btn1" onClick={() => this.adDetailsRedirect(publi.id)}>View</button>  
                                                    </td>
                                                    <td style={{paddingLeft:"24px"}}>
                                                      <span onClick={this.editRedirect.bind(this,publi.id)}>
                                                        <i className="far fa-edit user-icon1" id = {publi.id}></i>
                                                      </span>
                                                    </td>
                                                    <td style={{paddingLeft:"34px"}}>
                                                      <span onClick={this.delete.bind(this,publi.id)}>
                                                        <i className="fas fa-trash-alt user-icon2" id = {publi.id}></i>
                                                      </span>
                                                    </td>
                                                  </tr>
                                          )
                                        )
                                        }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               </div>
      )
      }
      </CustomLayout>
      </div>
    );
    }
}

const mapStateToProps = state => ({
  publication: state.publication.publication
});


export default connect(mapStateToProps,{ getPublication,deletePublication })(Publication_view);