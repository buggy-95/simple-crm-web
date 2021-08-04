import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';

import 'style/index.less';
import App from 'pages/App';
import Layout from 'components/Layout';

const Root = () => {
  return (<Layout />);
};

render(
  <Root />,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
