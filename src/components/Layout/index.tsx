import React from "react"
import Container from "@mui/material/Container"
import Header from "./Header/intex"
import Box from "@mui/material/Box"
import SideMenu from "./Header/SideMenu"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useGetUser } from "../../hooks/useAuth"

const Layout = (props: any) => {
  const { children } = props
  const { data } = useGetUser()

  {
    data?.id !== undefined &&
      toast.success("Sucess login.", {
        position: "bottom-right",
        autoClose: 3000,
        closeOnClick: true,
        progress: undefined,
        theme: "light",
      })
  }

  return (
    <Box sx={{ backgroundColor: "#EEF0F8" }}>
      <Header data={data} />
      <SideMenu />
      <Container>
        <ToastContainer />
        {children}
      </Container>
    </Box>
  )
}
export default Layout
