import React from 'react';

import {
  Container, Logo, Form, Text, Input, Button, Link,
} from './styles';

import LogoIcon from '../../assets/images/logo.svg';

const Login = () => (
  <Container>
    <Logo src={LogoIcon} alt="Meetapp Logo" />
    <Form>
      <Text>Email</Text>
      <Input type="email" placeholder="Digite seu e-mail" />
      <Text>Senha</Text>
      <Input type="password" placeholder="Digite sua senha" />
      <Button>
        <Text>Entrar</Text>
      </Button>
    </Form>
    <Link href="/register">Criar conta grátis</Link>
  </Container>
);

export default Login;
