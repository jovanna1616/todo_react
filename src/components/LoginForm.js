import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { authLogin } from '../store/auth/actions/actionCreators'


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [ name ]: value,
    });
  }
  
  login = (e) => {
    e.preventDefault();
    authLogin(this.state.username, this.state.password)
    // dispatch
  }
  render () {
    const { username, password } = this.state;
    return (
      <Form onSubmit={ (e) => this.login(e) } method={"POST"}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="username"
            id="username"
            placeholder="Enter email"
            value={username}
            onChange={ (e) => {
              this.handleChange(e)
            } }
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Eneter password"
            value={password}
            onChange={ (e) => this.handleChange(e) }
          />
        </FormGroup>
        <Button>Login</Button>
      </Form>
    )
  }
}

export default LoginForm