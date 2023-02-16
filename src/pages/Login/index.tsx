import Form from 'src/components/Form'
//@ts-ignorets-ignore
// import image from 'src/common/images/login_main.webp'
import { useAuth } from 'src/hooks/useAuth'
import Grid from '@mui/material/Grid'
import CardMedia from '@mui/material/CardMedia'

function LoginPage() {
    const { isLoading, mutateAsync } = useAuth()
    const handler = async (values: void) => await mutateAsync(values)

    return (
        <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
                <CardMedia
                    component="img"
                    sx={{ maxHeight: '100vh' }}
                    image='https://klike.net/uploads/posts/2018-10/1539499416_1.jpg'
                />
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
