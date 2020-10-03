import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue, indigo } from '@material-ui/core/colors';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from './core/store';

const GlobalStyle = createGlobalStyle`
  body {font-family: 'Roboto';  background: #ccc; min-height: 100vh;}
`;
const theme = createMuiTheme({
  // overrides: {
  //   // MuiPickersModal: {
  //   //   dialogAction: {
  //   //     display: "none"
  //   //   }
  //   // }
  // },
  typography: {
    // useNextVariants: true
  },
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
    },
    secondary: {
      light: indigo[50],
      main: indigo[900],
      dark: indigo[900],
    },
    // type: 'dark'
  },
});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <GlobalStyle />
        <App />
      </Provider>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
