import React from 'react';
import { Route } from "react-router-dom";
import { connect } from 'react-redux';
import { setTokenTime } from './setLocalStorageTime'
import history from './history'

const PrivateAdminRoute = ({ component: Component,auth,...rest }) =>(
    <Route {...rest} 
    render={props =>{
        const isAuth = localStorage.getItem('Auth');
        const username = localStorage.getItem('username');
        setTokenTime();
        
        if(!isAuth)
        {
            history.push('/admin_login',"_self");
            //return <Redirect to = "/login" />
        }
  
        else{
            if(username !== "AppAdmin")
            {
                history.push('/error',"_self");
            }
            return <Component {...props}{...rest}/>
        }
    }}
    />
);


const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(PrivateAdminRoute);