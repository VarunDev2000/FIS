import React from 'react';
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { logout } from '../actions/auth';
import history from './common/history'

const { Header, Content, Footer } = Layout;


export class CustomLayout extends React.Component{

    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    }

    
    changePage = (url) => {
        //window.open(url,"_self");
        history.push(url)
    }

    render(){
        const { isAuthenticated,user } = this.props.auth;

        const authLinks = (
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        style={{ lineHeight: '60px' }}
                    >
                        <Menu.Item key="1" onClick=""><strong>{ user ? `Welcome ${user.username}`:"" }</strong></Menu.Item>
                        <Menu.Item key="2" onClick = {() => this.changePage('/')}>PERSONAL INFO</Menu.Item>
                        <Menu.Item key="3" onClick = {() => this.changePage('/qualification')}>QUALIFICATION</Menu.Item>
                        <Menu.Item key="4" onClick = {() => this.changePage('/specialization')}>SPECIALIZATION & MEMBERSHIPS</Menu.Item>
                        <Menu.Item key="5" onClick = {() => this.changePage('/employment')}>EMPLOYMENT DETAILS</Menu.Item>
                        <Menu.Item key="6" onClick = {() => this.changePage('/publication')}>PUBLICATIONS</Menu.Item>
                        <Menu.Item key="7" onClick = {() => this.changePage('/csw')}>CONFERENCE/SEMINAR/WORKSHOP</Menu.Item>
                        <Menu.Item key="8" onClick = {() => this.changePage('/project')}>PROJECT</Menu.Item>
                        <Menu.Item key="9" onClick = {() => this.changePage('/invited_lectures/add')}>INVITED LECTURES</Menu.Item>
                        <Menu.Item key="10" onClick = {() => this.changePage('/experience_abroad/add')}>EXPERIENCE ABROAD</Menu.Item>
                        <Menu.Item key="11" onClick = {() => this.changePage('/book_published/add')}>BOOK PUBLISHED</Menu.Item>
                        <Menu.Item key="12" onClick = {() => this.changePage('/eao_programme/add')}>EXTENSION AND OUTREACH PROGRAMME</Menu.Item>
                        <Menu.Item key="13" style={{float: 'right'}} onClick= {this.props.logout} >Logout</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <br/>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                        {this.props.children} 
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
    
                </Footer>
            </Layout>
        );

        const guestLinks = (
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="notauthenticatedlogin"><Link to = '/login'>Login</Link></Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <br /><br />
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                        {this.props.children} 
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
    
                </Footer>
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