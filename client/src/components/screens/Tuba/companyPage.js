import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../redux/actions/authActions";
 
import "../../../stylesheet.css"
class CompanyPage extends Component {
render() {
    const { user } = this.props.auth;
return (
  
            <div class="upperContent">km
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