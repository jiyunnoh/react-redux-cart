import React from 'react';
import { Fragment } from 'react';
import MainHeader from './MainHeader';

type LayoutProp = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProp> = props => {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
