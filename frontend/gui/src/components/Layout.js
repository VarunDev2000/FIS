import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { logout } from '../actions/auth';

const { Header, Content, Footer } = Layout;


export class CustomLayout extends React.Component{

    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
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
                        <Menu.Item key="2"><Link to="/">PERSONAL INFO</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/qualification">QUALIFICATION</Link></Menu.Item>
                        <Menu.Item key="4"><Link to="/specialization">SPECIALIZATION & MEMBERSHIPS</Link></Menu.Item>
                        <Menu.Item key="4"><Link to="/employment">EMPLOYMENT DETAILS</Link></Menu.Item>
                        <Menu.Item key="5"><Link to="/publication">PUBLICATIONS</Link></Menu.Item>
                        <Menu.Item key="6"><Link to="/csw">CONFERENCE/SEMINAR/WORKSHOP</Link></Menu.Item>
                        <Menu.Item key="7"><Link to="/project">PROJECTS</Link></Menu.Item>
                        <Menu.Item key="8"><Link to="/invited_lectures/add">INVITED LECTURES</Link></Menu.Item>
                        <Menu.Item key="9"><Link to="/experience_abroad/add">EXPERIENCE ABROAD</Link></Menu.Item>
                        <Menu.Item key="10"><Link to="/book_published/add">BOOK PUBLISHED</Link></Menu.Item>
                        <Menu.Item key="11"><Link to="/eao_programme/add">EXTENSION AND OUTREACH PROGRAMME</Link></Menu.Item>
                        <Menu.Item key="12" style={{float: 'right'}} onClick= {this.props.logout} >Logout</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item><Link to ='/'>Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to ='/qualification'>Qualifications</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to ='/specialization'>Specialization & Memberships</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to ='/employment'>Employment Details</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to ='/publication'>Publications</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to ='/csw'>CSW</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to ='/project'>Project</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to ='/invited_lectures/add'>Invited Lectures</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to ='/experience_abroad/add'>Experience Abroad</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to ='/book_published/add'>Book Published</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to ='/eao_programme/add'>Extension and Outreach Programme</Link></Breadcrumb.Item>
                </Breadcrumb>
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
                        <Menu.Item key="1"><Link to = '/register'>Register</Link></Menu.Item>
                        <Menu.Item key="2"><Link to = '/login'>Login</Link></Menu.Item>
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