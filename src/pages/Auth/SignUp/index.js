import React from 'react';

import {
  Container, Logo, Form, Text, Input, Button, Link,
} from '../styles';

import LogoIcon from '~/assets/images/logo.svg';

const SignUp = () => (
  <Container>
    <Logo src={LogoIcon} alt="Meetapp Logo" />
    <Form>
      <Text>Nome</Text>
      <Input type="text" placeholder="Digite seu nome" />
      <Text>Email</Text>
      <Input type="email" placeholder="Digite seu email" />
      <Text>Senha</Text>
      <Input type="password" placeholder="Digite sua senha" />
      <Text>Confirmar senha</Text>
      <Input type="password" placeholder="Confirme a senha" />
      <Button>
        <Text>Criar conta</Text>
      </Button>
    </Form>
    <Link href="/">Já tenho conta</Link>
  </Container>
);

export default SignUp;
