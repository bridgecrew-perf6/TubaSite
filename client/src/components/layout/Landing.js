import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/authActions";
import "../../stylesheet.css";
import backgroundImage1 from "../Images/HomeBackgroundImages/brian-matangelo-KV8BNwpj6B8-unsplash.jpg";
import backgroundImage2 from "../Images/HomeBackgroundImages/jessica-pamp-uuKE4DnGcfY-unsplash.jpg";
import backgroundImage3 from "../Images/HomeBackgroundImages/samuel-ramos-Md8c-amE5ms-unsplash.jpg";
import BackgroundSlideshow from 'react-background-slideshow';


class Landing extends Component {
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  
  
  render() {
    return (
      
      <div>
       <div>
        <BackgroundSlideshow images={[ backgroundImage1, backgroundImage2, backgroundImage3 ]} />
        </div> 
        <br></br>
      <div style={{ height: "75vh" }}>
        
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Review</b> your tuba {" "}
              <span style={{ fontFamily: "monospace" }}>TubaSite</span> 
            </h4>
            <p className="flow-text grey-text text-darken-1">
              Rate and Review
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
Landing.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Landing);