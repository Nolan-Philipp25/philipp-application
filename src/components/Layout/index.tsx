import React from 'react';
import Container from '@mui/material/Container';
import Header from './Header/intex';
import Box from '@mui/material/Box';

const Layout = (props:any) => {
  const { children } = props;
  return (
    <Box>
      <Header/>
      <Container>
        {children}
      </Container>
    </Box>
    
  )
}
export default Layout;