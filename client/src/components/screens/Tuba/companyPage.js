import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../redux/actions/authActions";

 
import "../../../stylesheet.css"




class CompanyPage extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  
render() {
    const { user } = this.props.auth;
return (
  
            <div class="upperContent">{this.props.location.state.companyName}
          </div>
    );
  }
}
CompanyPage.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(CompanyPage);