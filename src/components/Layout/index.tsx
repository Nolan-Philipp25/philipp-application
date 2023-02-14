import React from 'react';
import Header from './Header/intex';

const Layout = (props:any) => {
  const { children } = props;
  return (
    <div>
      <Header/>
      {children}
    </div>
  )
}
export default Layout;