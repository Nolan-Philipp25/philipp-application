import Box from '@mui/material/Box'
import { notFound } from 'src/content'
import Layout from 'src/components/Layout/index'
import CardMedia from '@mui/material/CardMedia'

const NotFound = () => {
  return (
    <Layout>
      <Box
        sx={{
          height: '90vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CardMedia component="img" sx={{ width: '50%' }} image={notFound} />
      </Box>
    </Layout>
  )
}
export default NotFound
