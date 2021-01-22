import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../redux/actions/authActions";
import classnames from "classnames";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import "../../stylesheet.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }
  submit = e => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      
      buttons: [
        {
          label: 'Yes',
          onClick: () =>  alert('Welcome')
          //this.onSubmit
        },
        {
          label: 'No',
          onClick: () => alert('You would not be able to assess the page')
        }
      ]
    });
  };
componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
  e.preventDefault();
  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <div className='custom-ui' style={{backgroundColor:"rgb(36, 34, 34)"}}>

          <div style={{alignItems:"center",padding:"5vh", textAlign:"center",width:"75",backgroundColor:"rgb(36, 34, 34)"}}>
          <h1 style={{color:"white"}}>Our cookies policy</h1>
          <hr style={{marginBottom:"2vh", marginTop:"4vh",width:"100%"}}></hr>
          <div style={{padding:"3vh", textAlign:"left"}}>
          <h4 style={{textAlign:"left",marginBottom:"3.5vh",color:"white"}}>What do we use cookies for?</h4>
          
          <p style={{fontSize:"19px", color:"white"}}>We use cookies and similar technologies to recognize your repeat visits and to measure the effectiveness of campaigns and analyze traffic.</p>

          <p style={{fontSize:"19px", color:"white"}}>According to the  EU cookie law, we need your consent for us to manage your cookies.</p>
          <p style={{fontSize:"19px", color:"white"}}>By clicking the "Accept" button, you thereby give consent to us for the use of cookies. Otherwise, you would not be able to access the website.</p>
          </div>
          <button className="CookiesButton" onClick={onClose}>Decline</button>
          <button className="CookiesButton"
          
            onClick={() => {
              const newUser = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                password2: this.state.password2
              };
              this.props.registerUser(newUser, this.props.history); 
              onClose();
            }}
          >
            Accept
          </button>
          </div>

        </div>
      );
    }
  });
  
  
   
  };
render() {
    const { errors } = this.state;
return (
  <div  style={{backgroundColor:" rgb(36, 34, 34)",width:"100%",minHeight:"100%",maxHeight:"100%",padding:"5%",paddingBottom:"16%"}}>
      <div className="container" style={{backgroundColor:" rgb(90, 84, 84)",padding:"1%",borderRadius:"0.5%"}}>
        <div className="row" >
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect" style={{height:"50px"}}>
              <p > {" <- "}Home</p>
              
            </Link>
            <br/><br/>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4  style={{color:"white"}}>
                <b>Register</b> below
              </h4>
              <p className="white-text text-darken-1">
                Already have an account? <Link to="/login" style={{color:"white"}}>Log in</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  style={{color:"white"}}
                  className={classnames("", {
                    invalid: errors.name
                  })}
                />
                <label htmlFor="name">Name</label>
                <span className="red-text">{errors.name}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  style={{color:"white"}}
                  className={classnames("", {
                    invalid: errors.email
                  })}
                />
                <label htmlFor="email">Email</label>
                <span className="red-text">{errors.email}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  style={{color:"white"}}
                  className={classnames("", {
                    invalid: errors.password
                  })}
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">{errors.password}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  style={{color:"white"}}
                  className={classnames("", {
                    invalid: errors.password2
                  })}
                />
                <label htmlFor="password2">Confirm Password</label>
                <span className="red-text">{errors.password2}</span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"

                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));