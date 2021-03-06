import { AppContainer } from 'react-hot-loader'; // eslint-disable-line
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

const rootEl = document.getElementById('react-root');
ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl // eslint-disable-line comma-dangle
);

if (module.hot) {
  module.hot.accept('./components/App/App', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./components/App/App').default;  // eslint-disable-line global-require
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootEl // eslint-disable-line comma-dangle
    );
  });
}
