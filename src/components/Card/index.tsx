import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

//@ts-ignorets-ignore
import imageDefault from '../../common/images/not_found.webp';

export interface IUserCard{
    firstName ?:string;
    lastName ?:string;
    age ?:string;
    bloodGroup ?:string;
    username ?:string;
    password ?:string;
    image ?:string;
}

 function UserCard(props:IUserCard) {
    const defaultStr = 'Please login'
    const { 
            firstName=defaultStr,
            lastName=defaultStr,
            age=defaultStr,
            bloodGroup=defaultStr,
            username=defaultStr,
            password=defaultStr,
            image=imageDefault
        } = props;


  return (
    //@ts-ignorets-ignore
    <Card sx={{ display: 'flex', mt:6 }}>
      <Box sx={{ width: '100%',display: 'flex', flexDirection: 'column', p:5,justifyContent:'center' }}>
      <Typography variant="h6" gutterBottom>{firstName}</Typography>
      <Typography variant="h6" gutterBottom>{lastName}</Typography>
      <Typography variant="h6" gutterBottom>{age}</Typography>
      <Typography variant="h6" gutterBottom>{bloodGroup}</Typography>
      <Typography variant="h6" gutterBottom>{username}</Typography>
      <Typography variant="h6" gutterBottom>{password}</Typography>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: '70%' }}
        image={image}
      />
    </Card>
  )
}

export default UserCard;