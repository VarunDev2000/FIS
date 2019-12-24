import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { logout } from '../actions/auth';
import history from './common/history'
import '../css/Layout.css';

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

        const authLinks = (
            <Layout className="layout" >
    
                <Sider 
                      style={{
                        paddingTop:'62px',
                        overflow: 'auto',
                        height: '100vh',
                        position: 'sticky',
                        top: 0,
                        left: 0,
                      }}
                      trigger={null} collapsible collapsed={this.state.collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys ={[]} selectedKeys = {s_key_list} >
                    <Menu.Item key="1" onClick = {this.changePage.bind(this,'/generalinfo')}>
                    <Icon type="info" />
                    <span>PERSONAL INFO</span>
                    </Menu.Item>

                    <Menu.Item key="2" onClick = {this.changePage.bind(this,'/qualification')}>
                    <Icon type="book" />
                    <span>QUALIFICATION</span>
                    </Menu.Item>

                    <Menu.Item key="3" onClick = {this.changePage.bind(this,'/specialization')}>
                    <Icon type="tool" />
                    <span>SPECIALIZATION & MEMBERSHIPS</span>
                    </Menu.Item> 

                    <Menu.Item key="4" onClick = {this.changePage.bind(this,'/employment')}>
                    <Icon type="file-done" />
                    <span>EMPLOYMENT DETAILS</span>
                    </Menu.Item>

                    <Menu.Item key="5" onClick = {this.changePage.bind(this,'/publication')}>
                    <Icon type="schedule" />
                    <span>PUBLICATIONS</span>
                    </Menu.Item>  

                    <Menu.Item key="6" onClick = {this.changePage.bind(this,'/csw')}>
                    <Icon type="team" />
                    <span>CONFERENCE/SEMINAR/WORKSHOP</span>
                    </Menu.Item> 

                    <Menu.Item key="7" onClick = {this.changePage.bind(this,'/project')}>
                    <Icon type="reconciliation" />
                    <span>PROJECT</span>
                    </Menu.Item>  

                    <Menu.Item key="8" onClick = {this.changePage.bind(this,'#')}>
                    <Icon type="experiment" />
                    <span>ACADEMIC RESEARCH</span>
                    </Menu.Item>  

                    <Menu.Item key="9" onClick = {this.changePage.bind(this,'/invited_lectures/add')}>
                    <Icon type="solution" />
                    <span>INVITED LECTURES</span>
                    </Menu.Item>  

                    <Menu.Item key="10" onClick = {this.changePage.bind(this,'/experience_abroad/add')}>
                    <Icon type="rise" />
                    <span>EXPERIENCE ABROAD</span>
                    </Menu.Item> 

                    <Menu.Item key="11" onClick = {this.changePage.bind(this,'/book_published/add')}>
                    <Icon type="book" />
                    <span>BOOKS PUBLISHED</span>
                    </Menu.Item> 

                    <Menu.Item key="12" onClick = {this.changePage.bind(this,'/eao_programme/add')}>
                    <Icon type="exception" />
                    <span>EXTENSION AND OUTREACH PROGRAMME</span>
                    </Menu.Item>  

                    <Menu.Item key="13" onClick = {this.changePage.bind(this,'#')}>
                    <Icon type="alert" />
                    <span>ACHIEVEMENTS</span>
                    </Menu.Item>   

                </Menu>
                </Sider>
                <Header style={{ padding: "0.00em",position:'fixed',zIndex:1,width:'100%'}}>
                    <Menu
                        mode="horizontal"
                        style={{lineHeight: '60px'}}
                    >
                        <Menu.Item key="collapse_button" className="menu_fold_button">
                        <Icon
                        className="trigger"
                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.toggle}
                        />
                        </Menu.Item>
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
                <br/><br/>
                <Content style={{ padding: '0 200px' }}>
                    <br/><br/><br/><br/>
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

export default connect(mapStateToProps,{ logout })(CustomLayout);