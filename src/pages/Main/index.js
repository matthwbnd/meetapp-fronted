import React, { Component } from 'react';
import api from '~/services/api';

// import { Container } from './styles';

import Header from '~/components/Header';

export default class Main extends Component {
  componentDidMount() {
    api.get('/');
  }

  render() {
    return <Header />;
  }
}
