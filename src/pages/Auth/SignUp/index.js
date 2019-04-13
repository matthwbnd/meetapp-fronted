import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '~/store/ducks/auth';

import {
  Container, Logo, Form, Text, Input, Button, Link,
} from '../styles';

import LogoIcon from '~/assets/images/logo.svg';

class SignUp extends Component {
  static propTypes = {
    signUpRequest: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const {
      name, email, password, password_confirmation,
    } = this.state;
    const { signUpRequest } = this.props;

    signUpRequest(name, email, password, password_confirmation);
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const {
      name, email, password, password_confirmation,
    } = this.state;

    return (
      <Container>
        <Logo src={LogoIcon} alt="Meetapp Logo" />
        <Form onSubmit={this.handleSubmit}>
          <Text>Nome</Text>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
            placeholder="Digite seu nome"
          />
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
          <Text>Confirmar senha</Text>
          <Input
            type="password"
            name="password_confirmation"
            value={password_confirmation}
            onChange={this.handleInputChange}
            placeholder="Confirme sua senha"
          />
          <Button>
            <Text>Criar conta</Text>
          </Button>
        </Form>
        <Link href="/signin">Já tenho conta</Link>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(SignUp);
