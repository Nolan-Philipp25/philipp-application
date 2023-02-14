import React from 'react';
import { Formik } from 'formik';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
//@ts-ignorets-ignore
import style from './style.module.sass';
import { useNavigate } from 'react-router-dom';
import { LOGIN_SCHEMA } from '../../utils/validationSchemas';

export interface IForm {
    handler: Function
}

const Form = ({handler}:IForm) => {
  const navigate = useNavigate()

    return(
        <div className={style.form}>
                <h1 className={style.formTitle}>Login</h1>
          <Formik
            initialValues={{ username: '', password: '' }}
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
              // touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <TextField
                  error={errors.username ? true :false}
                  helperText={errors.username}
                  label='User name'
                  className={style.formField}
                  type="text"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                />
                <TextField
                  helperText={errors.password?.length !== 0 && errors.password}
                  error={errors.password ? true :false}
                  label='Password'
                  className={style.formField}
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                /> 
                  <div className={style.formButtons}>
                  <Button variant="contained" type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
                <Button onClick={()=>navigate('/')} variant="contained"  color="error">
                 go to back
                </Button>
                  </div>
              </form>
            )}
          </Formik>
        </div>
      );
}

export default Form;