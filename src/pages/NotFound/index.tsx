import React from 'react'
import Box from '@mui/material/Box'
//@ts-ignore
import image from 'src/common/images/not_found.webp'
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
                <CardMedia
                    component="img"
                    sx={{ width: '50%' }}
                    image={image}
                />
            </Box>
        </Layout>
    )
}
export default NotFound
