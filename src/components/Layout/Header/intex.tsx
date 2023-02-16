import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import { useGetUser } from 'src/hooks/useAuth'
import UserMenu from './UserMenu'

const Header = () => {
    const { data } = useGetUser()

    return (
        <AppBar
            position="relative"
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
            <Toolbar>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    <Link
                        to="/"
                        style={{ textDecoration: 'none', color: 'white' }}
                    >
                        Go Home
                    </Link>
                </Typography>
                {data && <UserMenu user={data} />}
                {!data && (
                    <Link
                        style={{ textDecoration: 'none', color: 'white' }}
                        to="/login"
                    >
                        <Button color="inherit">Login</Button>
                    </Link>
                )}
            </Toolbar>
        </AppBar>
    )
}
export default Header
