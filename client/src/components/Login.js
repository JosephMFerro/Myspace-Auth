import React from "react";
import { AuthConsumer, } from "../providers/AuthProvider";
import { Link } from 'react-router-dom';
import { Button, Form, Segment, Header, } from "semantic-ui-react";

class Login extends React.Component {
  state = { email: '', password: '', };

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, } = this.state;
    const { auth: { handleLogin, }, history, } = this.props;
    handleLogin({ email, password, }, history);
  }

  render() {
    const {email, password} = this.state;
    return (
      <Segment basic>
        <Header as = 'h2'>Login</Header>
        <Form onSubmit = {this.handleSubmit}>
          <Form.Input 
            autoFocus
            required
            label = 'Email'
            name="email"
            value={email}
            placeholder="name@example.com"
            onChange={this.handleChange}
          />
          <Form.Input 
            label="Password"
            required
            name="password"
            value={password}
            placeholder="Password"
            onChange={this.handleChange}
            type="password"
          />
          <Link to = '/reset'>I Forgot My Password</Link>
          <br />
          <br />
          <Button type = 'submit'>Login</Button>
        </Form>
      </Segment>
    )
  }
}

export default class ConnectedLogin extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => 
          <Login { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}