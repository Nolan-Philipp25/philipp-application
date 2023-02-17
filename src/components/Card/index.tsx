import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { useGetUser } from 'src/hooks/useAuth'

import { main } from 'src/content'
export interface IUserCard {
  firstName?: string
  lastName?: string
  age?: string
  bloodGroup?: string
  username?: string
  password?: string
  image?: string
}

function UserCard() {
  const { data } = useGetUser()

  return (
    <Card sx={{ display: 'flex', mt: 6 }}>
      <CardMedia component="img" sx={{ width: '50%' }} image={main} />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          p: 5,
          justifyContent: 'center',
        }}
      >
        <Typography variant="h6" gutterBottom>
          {data && data.firstName}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {data && data.lastName}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {data && data.age}
        </Typography>
        <Typography variant="h6" sx={{ color: 'darkred' }} gutterBottom>
          {data && data.bloodGroup}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {data && data.username}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {data && data.password}
        </Typography>
      </Box>
    </Card>
  )
}

export default UserCard
