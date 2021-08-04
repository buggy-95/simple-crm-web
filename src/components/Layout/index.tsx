import React from 'react';

import 'style/layout.less';
import Nav from './Nav';
import Menu from './Menu';
import Body from './Body';

const Layout = () => {
  return (
    <div className="l-layout">
      <Nav />
      <div className="l-content">
        <Menu />
        <Body />
      </div>
    </div>
  );
};

export default Layout;
