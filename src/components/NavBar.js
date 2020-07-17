import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { logout } from '../services/auth-api-service'
import { authLogout } from '../store/auth/actions/actionCreators'
import authStore from '../store/auth/reducers/index'

function NavBar (props) {
  let name
  let authActionElement
  name = props.isLoggedIn ? 'LOGOUT' : 'LOGIN'
  authActionElement = props.isLoggedIn ? <button onClick={() => logoutUser()}>LOGOUT</button> : <Link className="btn btn-primary" to="/login">{name}</Link> 
  return <Router>
    <div className="d-flex justify-content-between align-items-center">
      <Link className="btn btn-primary" to="/">HOME</Link>
      {authActionElement}
    </div>
  </Router>
}

const logoutUser = () => {
  logout()
  authStore.dispatch(authLogout())
}

export default NavBar