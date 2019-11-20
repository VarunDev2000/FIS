import React from 'react';
import { Link } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;


const CustomLayout = (props) => {
    const staffID = props.staffID;
    let link = String('/'+staffID);
    return (
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
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                    {props.children} 
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>

            </Footer>
        </Layout>

    );
}

export default CustomLayout;