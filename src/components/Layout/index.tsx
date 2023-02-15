import React from 'react';
import Container from '@mui/material/Container';
import Header from './Header/intex';
import Box from '@mui/material/Box';
import SideMenu from './Header/SideMenu';


const Layout = (props:any) => {
  const { children } = props;
  return (
    <Box>
        <Header />
        <SideMenu />
        <Container>
          {children}
        </Container>
      
    </Box>
    
  )
}
export default Layout;