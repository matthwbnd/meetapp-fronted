import React, { Component, Fragment } from 'react';
import api from '~/services/api';

import { Container, Wrapper, Section } from './styles';

import Header from '~/components/Header';
import Meetup from '~/components/Meetup';

export default class Main extends Component {
  componentDidMount() {
    api.get('/');
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Container>
          <Wrapper>
            <Section>
              <Meetup />
            </Section>
          </Wrapper>
        </Container>
      </Fragment>
    );
  }
}
