import React from 'react'
import Typography from '@mui/material/Typography'
import { Paper } from '@mui/material'
import Layout from 'src/components/Layout/index'
import UserCard from 'src/components/Card/index'
import Box from '@mui/material/Box'
import { DRAWER_WIDTH } from 'src/constants'

const MainPage = () => {
    return (
        <Layout>
            <Box
                sx={{
                    width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
                    ml: { sm: `${DRAWER_WIDTH}px` },
                }}
            >
                <Paper sx={{ p: 2, mt: 4 }}>
                    <Typography variant="h3" gutterBottom>
                        You are welcome!
                    </Typography>
                    <b>Success data to login</b>
                    <p>
                        <b>username:</b> kminchelle
                    </p>
                    <p>
                        <b>password:</b> 0lelplR
                    </p>
                </Paper>
                <UserCard />
            </Box>
        </Layout>
    )
}
export default MainPage
