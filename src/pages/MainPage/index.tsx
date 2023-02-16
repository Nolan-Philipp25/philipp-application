import React from 'react'
import Typography from '@mui/material/Typography'
import { Paper } from '@mui/material'
import Layout from '../../components/Layout/index'
import UserCard from '../../components/Card/index'

const MainPage: React.FC = () => {
    return (
        <Layout>
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
        </Layout>
    )
}
export default MainPage
