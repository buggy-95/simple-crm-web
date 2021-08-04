import React from 'react';
import { render } from 'react-dom';

import 'style/index.less';
import Layout from 'components/Layout';
import App from 'app';

const Root = () => {
  return (<Layout />);
};

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
