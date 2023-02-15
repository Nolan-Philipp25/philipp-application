import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { useGetUser} from '../../../hooks/useAuth';
import UserMenu from './UserMenu';

const Header: React.FC = () => {
const {data} = useGetUser();
  console.log('logged user = ', data)
  return (
    <AppBar component="nav" style={{position:'relative'}}>
    <Toolbar>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
      >
        <Link to="/" style={{textDecoration:'none', color:'white'}}>
          <Button color="inherit">
            <HomeIcon/>
            </Button>
        </Link>
          
      </Typography>
      {
        data && <UserMenu user={data}/>
      }
      {
        !data && <Link style={{textDecoration:'none', color:'white'}} to="/login">
          <Button color="inherit">Login</Button>
        </Link>
      }
      
    </Toolbar>
  </AppBar>
  )
}
export default Header;