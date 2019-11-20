import React from 'react';
import { Route,Redirect } from "react-router-dom";
import { connect } from 'react-redux';


const PrivateRoute = ({ component: Component,auth,...rest }) =>(
    <Route {...rest} 
    render={props =>{
        const isAuth = localStorage.getItem('Auth');
        
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