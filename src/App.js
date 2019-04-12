import React from 'react';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Routes from './routes';
import store from './store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  </Provider>
);

export default App;
