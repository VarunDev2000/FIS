import React from 'react';
import history from '../common/history';
import DashboardLayout from '../DashboardLayout';


class Dashboard extends React.Component{

    changePage = (id,url) => {
        //window.open(url,"_self");
        localStorage.setItem("s_key",id);
        history.push(url)
    }

    render(){

    return (
    <div>
    <DashboardLayout>

    <div class="dashboard-div">
        <div>
            <div class="dashboard-ecommerce">
                <div class="container-fluid dashboard-content ">
                    <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div class="page-header">
                                <h2 class="pageheader-title">DASHBOARD</h2>
                               <div class="page-breadcrumb">
                                    <nav aria-label="breadcrumb">
                                        <ol class="breadcrumb">
                                            <li class="breadcrumb-item"><a href="" class="breadcrumb-link">Home /</a></li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ecommerce-widget">

                        <div class="row">
                            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="card card-hover1" onClick={() => this.changePage("1",'/generalinfo')}>
                                    <div class="card-body">
                                      <center>
                                        <div class="metric-value d-inline-block">
                                            <h1 class="mb-1"><i class="fa fa-user-circle-o"></i></h1>
                                        </div>
                                        <hr className="hr-color" />
                                        <p className="dash-p">MY PROFILE</p>
                                      </center>
                                      </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="card card-hover2" onClick={() => this.changePage("2",'/employment')}>
                                <div class="card-body">
                                      <center>
                                        <div class="metric-value d-inline-block">
                                            <h1 class="mb-1"><i class="fa fa-briefcase"></i></h1>
                                        </div>
                                        <hr className="hr-color" />
                                        <p className="dash-p">EMPLOYMENT</p>
                                      </center>
                                      </div>
                                    <div id="sparkline-revenue2"></div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="card card-hover3" onClick={() => this.changePage("2",'/report')}>
                                <div class="card-body">
                                      <center>
                                        <div class="metric-value d-inline-block">
                                            <h1 class="mb-1"><i class="fas fa-clipboard-check"></i></h1>
                                        </div>
                                        <hr className="hr-color" />
                                        <p className="dash-p">REPORT</p>
                                      </center>
                                      </div>
                                    <div id="sparkline-revenue2"></div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div class="card card-hover4" onClick={() => this.changePage("3",'/change-password')}>
                                <div class="card-body">
                                      <center>
                                        <div class="metric-value d-inline-block">
                                            <h1 class="mb-1"><i class="fas fa-key"></i></h1>
                                        </div>
                                        <hr className="hr-color" />
                                      <p className="dash-p">CHANGE PASSWORD</p>
                                      </center>
                                      </div>
                                    <div id="sparkline-revenue2"></div>
                                </div>
                            </div>
                        </div>
                        <br/><br/>
                        <div class="row">
                            <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="card">
                                    <h5 class="card-header">Recent Reports</h5>
                                    <div class="card-body p-0">
                                        <div class="table-responsive">
                                            <table class="table" id="dash-table">
                                                <thead class="bg-light">
                                                    <tr class="border-0">
                                                        <th class="border-0">#</th>
                                                        <th class="border-0">Report</th>
                                                        <th class="border-0">View</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>
                                                            <div class="m-r-10"><img src="assets/images/product-pic.jpg" alt="user" class="rounded" width="45"/></div>
                                                        </td>
                                                        <td>Product #1 </td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>
                                                            <div class="m-r-10"><img src="assets/images/product-pic-2.jpg" alt="user" class="rounded" width="45"/></div>
                                                        </td>
                                                        <td>Product #2 </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
							
                            <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="card">
                                    <h5 class="card-header"> PieChart</h5>
                                    <div class="card-body">
                                        <div class="ct-chart-category ct-golden-section" style={{height: "315px"}}></div>
                                        <div class="text-center m-t-40">
                                            <span class="legend-item mr-3">
                                                    <span class="fa-xs text-primary mr-1 legend-tile"><i class="fa fa-fw fa-square-full "></i></span><span class="legend-text">Man</span>
                                            </span>
                                            <span class="legend-item mr-3">
                                                <span class="fa-xs text-secondary mr-1 legend-tile"><i class="fa fa-fw fa-square-full"></i></span>
                                            <span class="legend-text">Woman</span>
                                            </span>
                                            <span class="legend-item mr-3">
                                                <span class="fa-xs text-info mr-1 legend-tile"><i class="fa fa-fw fa-square-full"></i></span>
                                            <span class="legend-text">Accessories</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
								
								<br/>
								<div class="card">
                                    <div class="card-header">
                                        <h5 class="mb-0"> Graph</h5>
                                    </div>
                                    <div class="card-body">
                                        <div class="ct-chart-product ct-golden-section"></div>
                                    </div>
                                </div>
								
                            </div>

							
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </DashboardLayout>
      </div>
    );
      
    }
}


export default Dashboard;