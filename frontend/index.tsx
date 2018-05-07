import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ListContainer from './Container/ListContainer';
import Store from './Store/Store';


ReactDOM.render(
  <AppContainer>
    <Provider store={Store}>
      <MuiThemeProvider>
        <ListContainer />
      </MuiThemeProvider>
    </Provider>
  </AppContainer>,
  document.getElementById('app')
);

module.hot.accept();
