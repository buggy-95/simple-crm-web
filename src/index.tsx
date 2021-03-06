import React from 'react';
import { render } from 'react-dom';

import 'style/index.less';
import App from 'app';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
