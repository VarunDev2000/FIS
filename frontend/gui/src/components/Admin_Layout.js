import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { logout } from '../actions/auth';
import history from './common/history'

import './styles/dist/css/style.css'
import Image from './styles/assets/images/logo-icon.png';
import './styles/assets/icons/font-awesome/css/font-awesome.min.css'

export class CustomLayout extends React.Component{

    constructor(props)
    {
        super(props);
    }

    state = {
        collapsed: true
    };

    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    }
    
    toggle = () => {
       this.setState({
          collapsed: !this.state.collapsed,
        });
      };

    
    changePage = (url,e) => {
        //window.open(url,"_self");
        localStorage.setItem("s_key",e.key);
        history.push(url)
    }

    changePage1 = (key,url) => {
        //window.open(url,"_self");
        if(key === "c_pass")
        {
            localStorage.removeItem("s_key");
        }
        history.push(url)
    }

    componentDidMount() {
        document.body.classList.add("skin-default-dark");
        document.body.classList.add("fixed-layout");
        document.body.classList.add("mini-sidebar");
      }

    render(){
        const { isAuthenticated,user } = this.props.auth;
        var s_key = localStorage.getItem('s_key');
        var s_key_list = [s_key]

        isAuthenticated ? (
            localStorage.setItem('username',this.props.auth.user.username)
            //console.log("Success")
        ) : (console.log(""))

        const authLinks = (
            <div id="main-wrapper">
            <header className="topbar">
                <nav className="navbar top-navbar navbar-expand-md navbar-dark">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/admin/report_generation">
                            <b className="user">
                                <i className="far fa-user"></i>{'\u00A0'}{'\u00A0'}
                                { user ? "Admin":"" }
                            </b>
                        </a>
                    </div>

                    <div className="navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item dropdown">
                            </li>
                        </ul>

                        <ul className="navbar-nav my-lg-0" style={{ paddingRight:"40px",paddingLeft:"40px" }}>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-muted waves-effect waves-dark " onClick= {this.props.logout}><p className="log_out">Logout</p></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

            <aside className="left-sidebar">
            <div className="d-flex no-block nav-text-box align-items-center">
                <span><img src={Image} alt="elegant admin template"/></span>
                <a className="waves-effect waves-dark ml-auto hidden-sm-down" href="javascript:void(0)"><i className="ti-menu"></i></a>
                <a className="nav-toggler waves-effect waves-dark ml-auto hidden-sm-up" href="javascript:void(0)"><i className="ti-menu ti-close"></i></a>
            </div>
            
            <div className="scroll-sidebar">
                
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        <li> <a className="waves-effect waves-dark" href='/admin/report_generation' aria-expanded="false"><i className="fas fa-clipboard-check"></i><span className="hide-menu">Report</span></a></li>
                        <li> <a className="waves-effect waves-dark" href="/admin/change-password" aria-expanded="false"><i className="fas fa-key"></i><span className="hide-menu">Change Password</span></a></li>
                    </ul>
                </nav>
                
            </div>
           
        </aside>


        <div class="page-wrapper">
            {this.props.children} 
        </div>
        </div>
        );

        const guestLinks = (
            <div id="main-wrapper">
                <div class="page-wrapper">
                    {this.props.children} 
                </div>
            </div>
        );


    return (
        <div>
        { isAuthenticated ? authLinks : guestLinks }
        </div>
    );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps,{ logout })(CustomLayout);