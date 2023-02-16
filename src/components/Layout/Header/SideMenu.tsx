import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Toolbar from '@mui/material/Toolbar'
import menuItems from '../../../mainMenu'
import SideMenuItem from './SideMenuItem'
const drawerWidth = 240

export default function SideMenu() {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List
                    sx={{
                        width: '100%',
                        maxWidth: 360,
                        bgcolor: 'background.paper',
                    }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    {menuItems.map((item, index) => (
                        <SideMenuItem key={'menu-item-' + index} item={item} />
                    ))}
                </List>
            </Box>
        </Drawer>
    )
}
