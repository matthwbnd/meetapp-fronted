import React, { Component, Fragment } from 'react';

import Header from '~/components/Header';

import {
  Container, Form, Text, Input, Label, Icon, Button,
} from './styles';

export default class New extends Component {
  state = {
    file: null,
  };

  handleImageChange = (e) => {
    const { file } = this.state;
    if (!e.target.files) return;
    if (!file) {
      this.setState({ file: URL.createObjectURL(e.target.files[0]) });
    }
  };

  render() {
    const { file, m } = this.state;
    return (
      <Fragment>
        <Header />
        <Container>
          <Form>
            <Text>Título</Text>
            <Input type="text" name="title" placeholder="Digite o título do meetup" />
            <Text>Descrição</Text>
            <Input type="text" name="description" placeholder="Digite a descrição do meetup" />
            <Text>Imagem</Text>
            <Label>
              {file ? (
                <img src={file} alt="Meetup" width="100%" height="100%" />
              ) : (
                <Icon className="fa fa-camera" />
              )}
              <Input
                type="file"
                name="image"
                onChange={this.handleImageChange}
                style={{ display: 'none' }}
              />
            </Label>
            <Text>Localização</Text>
            <Input type="text" placeholder="Onde seu meetup irá acontecer?" />
            <Button>
              <Text>Salvar</Text>
            </Button>
          </Form>
        </Container>
      </Fragment>
    );
  }
}
