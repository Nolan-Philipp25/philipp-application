import React from 'react';
import Box from '@mui/material/Box';
//@ts-ignorets-ignore
import image from '../../common/images/not_found.webp';
import Layout from '../../components/Layout/index';
import CardMedia from '@mui/material/CardMedia';

const NotFound: React.FC = () => {
  return (
    <Layout>
      <Box sx={{ height:'90vh',display:'flex', justifyContent:'center', alignItems:'center'}}>
        <CardMedia
        component="img"
        sx={{ width: '50%' }}
        image={image}
          />
      </Box>
    </Layout>
  )
}
export default NotFound;