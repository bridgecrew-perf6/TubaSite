import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./redux/actions/authActions";
import { Provider } from "react-redux";
import store from "./redux/store";

import AppIndex from "./AppIndex";


// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = JSON.parse(localStorage.jwtToken);
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {height: props.height};
  }
  

  componentWillMount(){
    this.setState({height: window.innerHeight + 'px'});
  }


  render() {
    return (
      <Provider store={store} >
        <AppIndex/>
        
      </Provider>
    );
  }
}
export default App;