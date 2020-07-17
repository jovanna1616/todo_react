import React, { Component } from "react";
import LoginForm from './components/LoginForm'
import { connect } from 'react-redux'; 
import { withRouter } from "react-router";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }
  render () {
    return (
      <div>
        {this.props.children}
        <LoginForm />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  
}); 

export default withRouter(connect(mapStateToProps)(LoginPage)); 
  