import Form from 'src/components/Form'
import { login } from 'src/content'
import { useAuth } from 'src/hooks/useAuth'
import Grid from '@mui/material/Grid'
import CardMedia from '@mui/material/CardMedia'

function LoginPage() {
  const { isLoading, mutateAsync } = useAuth()
  const handler = async (values: void) => await mutateAsync(values)

  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={8}>
        <CardMedia component="img" sx={{ maxHeight: '100vh' }} image={login} />
      </Grid>
      <Grid
        container
        item
        xs={6}
        md={4}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Form handler={handler} loading={isLoading} />
      </Grid>
    </Grid>
  )
}
export default LoginPage
