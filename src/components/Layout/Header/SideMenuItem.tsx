import React from 'react'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import {IMenuItem} from '../../../mainMenu';

type SideMenuItemProps = {
  item: IMenuItem;
}

export default function SideMenuItem({item}: SideMenuItemProps) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          {item.icon}
        </ListItemIcon>
        <ListItemText primary={item.label} />
        {
          item.items && item.items?.length > 0 ?
            (open ? <ExpandLess /> : <ExpandMore />): 
            <></>
        }
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {
            item.items && item.items.map((sItem, index) => (
              <ListItemButton  key={'menu-sub-item-'+index}  sx={{ pl: 4 }}>
                <ListItemIcon>
                  {sItem.icon}
                </ListItemIcon>
                <ListItemText primary={sItem.label} />
              </ListItemButton>
            ))
          }
          
        </List>
      </Collapse>
    </>
  )
}