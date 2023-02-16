import React from 'react'
import { Formik } from 'formik'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import { LOGIN_SCHEMA } from 'src/utils/validationSchemas'
import { Typography } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'

type Props = {
    handler: Function
    loading: boolean
}

const Form = ({ handler, loading }: Props) => {
    const navigate = useNavigate()
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
            }}
        >
            <Typography
                sx={{ my: 2, width: '100%', textAlign: 'center' }}
                variant="h3"
                component="div"
            >
                Login
            </Typography>
            <Formik
                initialValues={{ username: 'kminchelle', password: '0lelplR' }}
                validationSchema={LOGIN_SCHEMA}
                validate={(values) => {
                    const errors: any = {}
                    if (!values.username) {
                        errors.username = 'Required username'
                    }
                    if (!values.password) {
                        errors.password = 'Required password'
                    }
                    return errors
                }}
                onSubmit={(values, { setSubmitting }) => {
                    handler(values)
                    setSubmitting(false)
                }}
            >
                {({
                    values,
                    errors,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form style={{ width: '100%' }} onSubmit={handleSubmit}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                px: 4,
                            }}
                        >
                            <TextField
                                error={errors.username ? true : false}
                                helperText={errors.username}
                                label="User name"
                                type="text"
                                name="username"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.username}
                                sx={{ pb: 2, width: '100%' }}
                            />
                            <TextField
                                helperText={
                                    errors.password?.length !== 0 &&
                                    errors.password
                                }
                                error={errors.password ? true : false}
                                label="Password"
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                sx={{ pb: 2 }}
                            />
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                    px: 4,
                                }}
                            >
                                <LoadingButton
                                    variant="contained"
                                    type="submit"
                                    loading={loading}
                                    disabled={isSubmitting}
                                >
                                    Submit
                                </LoadingButton>
                                <Button
                                    onClick={() => navigate('/')}
                                    variant="contained"
                                    color="error"
                                >
                                    go to back
                                </Button>
                            </Box>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    )
}

export default Form
