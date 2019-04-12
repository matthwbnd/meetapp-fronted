import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '~/store/ducks/auth';

import {
  Container, Logo, Form, Text, Input, Button, Link,
} from '../styles';

import LogoIcon from '~/assets/images/logo.svg';

class SignIn extends Component {
  static propTypes = {
    signInRequest: PropTypes.func.isRequired,
  };

  state = {
    email: '',
    password: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    const { signInRequest } = this.props;

    signInRequest(email, password);
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <Container>
        <Logo src={LogoIcon} alt="Meetapp Logo" />
        <Form onSubmit={this.handleSubmit}>
          <Text>Email</Text>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={this.handleInputChange}
            placeholder="Digite seu e-mail"
          />
          <Text>Senha</Text>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
            placeholder="Digite sua senha"
          />
          <Button>
            <Text>Entrar</Text>
          </Button>
        </Form>
        <Link href="/signup">Criar conta grátis</Link>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(SignIn);
