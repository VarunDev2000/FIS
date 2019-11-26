import React from 'react';
import { Route,Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { setTokenTime } from './setLocalStorageTime'

const PrivateRoute = ({ component: Component,auth,...rest }) =>(
    <Route {...rest} 
    render={props =>{
        const isAuth = localStorage.getItem('Auth');
        setTokenTime();
        
        if(!isAuth)
        {
            return <Redirect to = "/login" />
        }

        else{
            return <Component {...props}{...rest}/>
        }
    }}
    />
);


const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);