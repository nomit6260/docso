import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from "styled-components";
import { Root } from "./routes";
import { theme } from "./theme/theme";
import * as serviceWorker from './serviceWorker';
// import 'react-tabs/style/react-tabs.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Root theme={theme} />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();