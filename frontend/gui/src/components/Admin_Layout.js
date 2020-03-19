import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { logout } from '../actions/auth';
import history from './common/history'

const { Header, Content, Sider } = Layout;


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

    render(){
        const { isAuthenticated,user } = this.props.auth;
        var s_key = localStorage.getItem('s_key');
        var s_key_list = [s_key]

        isAuthenticated ? (
            localStorage.setItem('username',this.props.auth.user.username)
            //console.log("Success")
        ) : (console.log(""))

        const authLinks = (
            <Layout className="layout" >

                <Header style={{ padding: "0.00em",position:'fixed',zIndex:1,width:'100%'}}>
                    <Menu
                        mode="horizontal"
                        style={{lineHeight: '70px'}}
                    >

                        <Menu.Item key="admin_1" style={{paddingLeft: '45px'}} onClick={() => this.changePage1("1",'/admin/report_generation')}><strong>
                        <Icon type="user"/>
                        { user ? "Welcome Admin" : "" }</strong>
                        </Menu.Item>
                        <Menu.Item key="admin_2" style={{float: 'right'}} onClick= {this.props.logout} >Logout</Menu.Item>
                        <Menu.Item key="admin_3" style={{float: 'right'}} onClick={() => this.changePage1("c_pass",'/admin/change-password')} >Change Password</Menu.Item>
                    </Menu>
                </Header>
                <br/><br/>
                <Content style={{ padding: '0 100px' }}>
                    <br/><br/><br/><br/>
                    <div id = {s_key} className="innerForm">
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

export default connect(mapStateToProps,{ logout })(CustomLayout);