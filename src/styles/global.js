import { createGlobalStyle } from 'styled-components';

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import 'font-awesome/css/font-awesome.css';
import 'input-moment/dist/input-moment.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: #271F2C;
    font-family: 'Helvetica', sans-serif;
    color: #fff;
  }

  button {
    cursor: pointer;
  }

  a {
    cursor: pointer;
  }
`;
