import React from 'react';
import { Formik } from 'formik';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { LOGIN_SCHEMA } from '../../utils/validationSchemas';
import { Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
export interface IForm {
    handler: Function;
    loading: boolean;
}

const Form = ({handler, loading}:IForm) => {
  const navigate = useNavigate()
    return(
      <Box>
        <Typography variant="h6" component="div">Login</Typography>
          <Formik
            initialValues={{ username: 'kminchelle', password: '0lelplR' }}
            validationSchema={LOGIN_SCHEMA}
            validate={values => {
              const errors:any = {};
              if (!values.username) {
                errors.username = 'Required username';
              }
              if (!values.password) {
                errors.password = 'Required password';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              handler(values)
              setSubmitting(false);
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
              <form onSubmit={handleSubmit}>
                <Box sx={{
                  display:'flex',
                  flexDirection:'column',
                  px:4
                  }}>
                  <TextField
                    error={errors.username ? true :false}
                    helperText={errors.username}
                    label='User name'
                    type="text"
                    name="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                    sx={{pb:2}}
                  />
                  <TextField
                    helperText={errors.password?.length !== 0 && errors.password}
                    error={errors.password ? true :false}
                    label='Password'
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    sx={{pb:2}}
                  /> 
                    <Box sx={{
                      display:'flex',
                      justifyContent:'space-around',
                      px:4
                      }}>
                    <LoadingButton variant="contained" type="submit"   loading={loading} disabled={isSubmitting}>
                    Submit
                  </LoadingButton>
                  <Button onClick={()=>navigate('/')} variant="contained"  color="error">
                  go to back
                  </Button>
                    </Box>
                  </Box>
               
              </form>
            )}
          </Formik>
        </Box>
      );
}

export default Form;