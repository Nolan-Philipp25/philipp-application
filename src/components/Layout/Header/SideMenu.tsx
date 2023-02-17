import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Toolbar from '@mui/material/Toolbar'
import SideMenuItem from './SideMenuItem'
import { DRAWER_WIDTH } from 'src/constants'
import { IMenuItem } from 'src/mainMenu'

type Props = {
  menu: IMenuItem[]
}

export default function SideMenu(props: Props) {
  const { menu } = props
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: DRAWER_WIDTH,
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
          {menu.map((item, index) => (
            <SideMenuItem key={'menu-item-' + index} item={item} />
          ))}
        </List>
      </Box>
    </Drawer>
  )
}
