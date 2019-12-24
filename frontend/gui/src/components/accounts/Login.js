import React,{ Component } from 'react';
import { Field,reduxForm } from 'redux-form'
import { Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { login } from '../../actions/auth';

const required = value => value ? undefined : 'Required'

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} className="form-control" placeholder={"Enter " + label} type={type}/>
      {touched && ((error && <span className = "ew">*{error}</span>) || (warning && <span className = "ew">*{warning}</span>))}
    </div>
  </div>
)

export class Login extends Component{
    state = {
        username : '',
        password : ''
    }
    

    static propTypes = {
      login: PropTypes.func.isRequired,
      isAuthenticated: PropTypes.bool 
    }

    onSubmit()
    {
        //e.preventDefault();
        this.props.login(this.state.username,this.state.password);
    }

    onChange = e =>{
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    componentDidUpdate(prevProps)
    {
      if (this.props.count !== prevProps.count)
      {
        if(this.props.login_err == true)
        {
          alert("Emp ID or Password is Wrong");
        }
      }

    }


    render(){
      
      if(this.props.isAuthenticated){
        return <Redirect to="/" />;
      }
      
      const { username,password } = this.state;

        return(
          <div><CustomLayout>
        <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">LOG IN</h2><br/>
          <form onSubmit = {this.props.handleSubmit(() => this.onSubmit(this))}>
            <div className="form-group">
              <Field
                type="text"
                name="username"
                onChange={this.onChange}
                value={username}
                label="Emp ID"
                component={renderField}
                validate={[ required ]}
              />
            </div>
            <div className="form-group">
              <Field
                type="password"
                className="form-control"
                name="password"
                label="Password"
                onChange={this.onChange}
                value={password}
                component={renderField}
                validate={[ required ]}
              />
            </div>
            <div className="form-group">
              <br/>
              <button type="submit" className="btn btn-primary">
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
      </CustomLayout>
      </div>
        )
    }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  login_err: state.auth.login_err,
  count: state.auth.count,
});

Login = connect(mapStateToProps,{ login })(Login);

export default reduxForm({
  form: 'Login'
})(Login);