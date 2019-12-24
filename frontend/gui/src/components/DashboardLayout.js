import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { logout } from '../actions/auth';
import history from './common/history'
import '../css/Layout.css';

const { Header, Content, Sider } = Layout;


export class DashboardLayout extends React.Component{

    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    }
    

    changePage1 = (key,url) => {
        //window.open(url,"_self");
        if(key === "c_pass")
        {
            localStorage.removeItem("s_key");
        }
        history.push(url)
    }

  

    render(){
        const { isAuthenticated,user } = this.props.auth;

        const authLinks = (
            <Layout className="layout" >
    
                <Header style={{ padding: "0.00em",position:'fixed',zIndex:1,width:'100%'}}>
                    <Menu
                        mode="horizontal"
                        style={{lineHeight: '60px'}}
                    >
                        <Menu.Item key="1" onClick={() => this.changePage1("1",'/')}><strong>
                        <Icon type="user"/>
                        { user ? `Welcome ${user.username}`:"" }</strong>
                        </Menu.Item>
                        <Menu.Item key="2" style={{float: 'right'}} onClick= {this.props.logout} >Logout</Menu.Item>
                        <Menu.Item key="3" style={{float: 'right'}} onClick={() => this.changePage1("c_pass",'/change-password')} >Change Password</Menu.Item>
                        <Menu.Item key="4" style={{float: 'right'}} onClick={() => this.changePage1("4",'/')}  >
                        <Icon type="home" />
                        </Menu.Item>
                        </Menu>
                </Header>
                <Content className = "Dashboard-content">
                    <br/><br/>
                    <div className="innerForm">
                        {this.props.children} 
                    </div>
                    <br/><br/>
                </Content>
            </Layout>
        );

        const guestLinks = (
            <Layout className="layout">
                    <div style={{ position:'relative',padding: 95,bottom:'20px'}}>
                        {this.props.children} 
                    </div>
            </Layout>
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