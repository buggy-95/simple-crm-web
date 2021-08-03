import React from 'react';
import { render } from 'react-dom';

import 'style/index.less';
import App from 'pages/App';

const Root = () => {
  return (
    <div className="app">
      <p>app</p>
      {/* <img src="/images/joge.jpeg" alt="joge" /> */}
      <App />
    </div>
  );
};

render(
  <Root />,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
