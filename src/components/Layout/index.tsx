import React, { ReactNode } from 'react'
import Container from '@mui/material/Container'
import Header from './Header/intex'
import Box from '@mui/material/Box'
import { ToastContainer } from 'react-toastify'
import SideMenu from './Header/SideMenu'
import 'react-toastify/dist/ReactToastify.css'

type Props = {
    children: ReactNode
}

const Layout = (props: Props) => {
    const { children } = props

    return (
        <Box
            sx={{
                backgroundColor: '#EEF0F8',
                height: '100vh',
                weight: '100vw',
            }}
        >
            <Header />
            <SideMenu />
            <Container>
                <ToastContainer />
                {children}
            </Container>
        </Box>
    )
}
export default Layout
