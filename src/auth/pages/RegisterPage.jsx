
import { Google } from '@mui/icons-material'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link as RouterLink} from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { startCreatingUserWithEmailPassword } from '../../store/auth'
import { AuthLayout } from '../layout/AuthLayout'

const formData= {
  displayName: '',
  email: '',
  password: '',
};

const formValidations = {
  email : [(value) => value.includes('@'), 'El correo debe tener un @'],
  password : [(value) => value.length >= 6, 'El password debe tener mas de 6 letras'],
  displayName : [(value) => value.length >= 3, 'El nombre debe tener mas de 3 letras'],
}

export const RegisterPage = () => {
  
  const dispatch = useDispatch();
  const [formSubmited, setformSubmited] = useState(false);
  
  const { status, errorMessage } = useSelector( state => state.auth);
  const isAuthenticating = useMemo( () => status === 'checking', [status]);

  const { 
    formState, displayName, email, password, onInputChange, 
    isFormValid, displayNameValid, emailValid, passwordValid
  } = useForm(formData,formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setformSubmited(true);
    if(!isFormValid) return;

    dispatch(startCreatingUserWithEmailPassword(formState));
    // console.log(formState);
  }

  return (
      <AuthLayout title='Registro'>
        <h1>Form Valid: {isFormValid ? 'true': 'false'}</h1>
        <form onSubmit={onSubmit} >
          <Grid container>

            <Grid item xs={12} sx={{mt:2}}>
              <TextField
                label="Nombre Completo"
                type="text"
                placeholder="Nombre Completo"
                fullWidth
                name="displayName"
                value={displayName}
                onChange={onInputChange}
                error={!!displayNameValid && formSubmited}
                helperText={displayNameValid}
              />
            </Grid>
            
            <Grid item xs={12} sx={{mt:2}}>
              <TextField
                label="Correo"
                type="email"
                placeholder="correo@yopmail.com"
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange}
                error={!!emailValid && formSubmited}
                helperText={emailValid}
              />
            </Grid>

            <Grid item xs={12} sx={{mt:2}}>
              <TextField
                label="Contraseña"
                type="password"
                placeholder="**********"
                fullWidth
                name="password"
                value={password}
                onChange={onInputChange}
                error={!!passwordValid && formSubmited}
                helperText={passwordValid}
              />
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid 
                    display={!!errorMessage ? '' : 'none'}
                    item 
                    xs={12}>
                <Alert severity='error' >{errorMessage}</Alert>
              </Grid>
              <Grid item xs={12}>
                <Button
                  disabled={!isFormValid || isAuthenticating}
                  type="submit"
                  variant='contained'
                  fullWidth>
                  Crear Cuenta
                </Button>
              </Grid>
            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Typography
                sx={{ mr: 1}}>
                ¿Ya tienes cuenta?
              </Typography>
              <Link component={RouterLink} color='inherit'  to='/auth/login'>
                Ingresar
              </Link>
            </Grid>

          </Grid>
        </form>
      </AuthLayout>
      
  )
}

