import React,{useEffect} from 'react'
import Form from '../../components/Form/index';
//@ts-ignorets-ignore
import image from '../../common/images/login_main.webp';
import { useAuth} from '../../hooks/useAuth';
import {  toast, ToastOptions } from 'react-toastify';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';

function LoginPage() {


//@ts-ignorets-ignore
const { isLoading, mutateAsync, status, data} = useAuth();

//@ts-ignorets-ignore
  const handler = async(values)=> await mutateAsync( values );

useEffect(() => {
  const options: ToastOptions =  {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  }
  const message = status === "success"?'✅ Success login!':'⛔️ Error login!';
  toast(message, options);

}, [status])

  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={8}>
      <CardMedia
          component="img"
          sx={{ maxHeight:'100vh'}}
          image={image}
          />
      </Grid>
      <Grid
        container item xs={6} md={4}
        direction="column"
        alignItems="center"
        justifyContent="center"
        >
        <Form handler={handler} loading={isLoading}/>
      </Grid>
  </Grid>
    
  )
}
export default LoginPage;