import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { ConnectedRouter, push } from 'react-router-redux'
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ListContainer from './Container/ListContainer';
import CreatePostContainer from './Container/CreatePostContainer';
import Store, { history } from './Store/Store';

injectTapEventPlugin();

ReactDOM.render(
  <AppContainer>
    <Provider store={Store}>
      <ConnectedRouter history={history}>
        <MuiThemeProvider>
          <div>
            <Route exact path="/" component={ListContainer} />
            <Route exact path="/CreatePost" component={CreatePostContainer} />
          </div>
        </MuiThemeProvider>
      </ConnectedRouter>
    </Provider>
  </AppContainer>,
  document.getElementById('app')
);

module.hot.accept();
