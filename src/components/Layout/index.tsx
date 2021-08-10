import React from 'react';

import 'style/layout.less';
import Menu from './Menu';
import Body from './Body';
import Bread from './Bread';
import Header from './Header';

const Layout = () => {
  return (
    <>
      <div className="l-layout">
        <div className="l-content">
          <Bread />
          <Body />
        </div>
      </div>
      <Header />
      <Menu />
    </>
  );
};

export default Layout;
