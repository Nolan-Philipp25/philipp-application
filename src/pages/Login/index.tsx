import React from "react"
import Form from "../../components/Form/index"
//@ts-ignorets-ignore
import image from "../../common/images/login_main.webp"
import { useAuth } from "../../hooks/useAuth"
import Grid from "@mui/material/Grid"
import CardMedia from "@mui/material/CardMedia"

function LoginPage() {
  //@ts-ignorets-ignore
  const { isLoading, mutateAsync } = useAuth()

  //@ts-ignorets-ignore
  const handler = async (values) => await mutateAsync(values)

  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={8}>
        <CardMedia component="img" sx={{ maxHeight: "100vh" }} image={image} />
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
