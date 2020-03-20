import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { logout } from '../actions/auth';
import history from './common/history'


import './styles/assets1/vendor/fonts/circular-std/style.css'
import './styles/assets1/vendor/bootstrap/css/bootstrap.min.css'
import './styles/assets1/libs/css/style.css'
import './styles/assets1/vendor/charts/chartist-bundle/chartist.css'
import './styles/assets1/vendor/charts/morris-bundle/morris.css'
import './styles/assets1/vendor/charts/c3charts/c3.css'
import './styles/assets1/vendor/fonts/flag-icon-css/flag-icon.min.css'
import Image from './styles/assets/images/logo-icon.png';



export class DashboardLayout extends React.Component{

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
                        <a className="navbar-brand" href="/">
                            <b className="user">
                                <i className="fas fa-user-alt user-icon"></i>{'\u00A0'}{'\u00A0'}
                                { user ? `${user.username}`:"" }
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
                        <li> <a className="waves-effect waves-dark" href='/qualification' aria-expanded="false"><i className="fas fa-user-graduate"></i><span className="hide-menu">Qualification</span></a></li>
                        <li> <a className="waves-effect waves-dark" href='/specialization' aria-expanded="false"><i className="fas fa-user-check"></i><span className="hide-menu"></span>Specialization</a></li>
                        <li> <a className="waves-effect waves-dark" href="/publication" aria-expanded="false"><i className="fas fa-file-signature"></i><span className="hide-menu"></span>Publications</a></li>
                        <li> <a className="waves-effect waves-dark" href="/csw" aria-expanded="false"><i className="fas fa-chart-pie"></i><span className="hide-menu"></span>Conf/Seminar/Workshop</a></li>
                        <li> <a className="waves-effect waves-dark" href="/project" aria-expanded="false"><i className="fas fa-project-diagram"></i><span className="hide-menu"></span>Projects</a></li>
                        <li> <a className="waves-effect waves-dark" href="/research" aria-expanded="false"><i className="fas fa-vial"></i><span className="hide-menu"></span>Research</a></li>
                        <li> <a className="waves-effect waves-dark" href="/invited_lectures" aria-expanded="false"><i className="fas fa-chalkboard-teacher"></i><span className="hide-menu"></span>Invited Lectures</a></li>
                        <li> <a className="waves-effect waves-dark" href="/experience_abroad" aria-expanded="false"><i className="fas fa-plane"></i><span className="hide-menu"></span>Experience Abroad</a></li>
                        <li> <a className="waves-effect waves-dark" href="/book_published" aria-expanded="false"><i className="fa fa-book"></i><span className="hide-menu"></span>Books Published</a></li>
                        <li> <a className="waves-effect waves-dark" href="/eao_programme" aria-expanded="false"><i className="fa fa-wpforms"></i><span className="hide-menu"></span>EAO Programme</a></li>
                        <li> <a className="waves-effect waves-dark" href="/achievements" aria-expanded="false"><i className="fa fa-archive"></i><span className="hide-menu"></span>Achievements</a></li>
                    
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

export default connect(mapStateToProps,{ logout })(DashboardLayout);