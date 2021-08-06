import React from 'react';
import store from 'app/store';
import { Provider } from 'react-redux';

import Layout from 'components/Layout';

const App = () => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
};

export default App;
