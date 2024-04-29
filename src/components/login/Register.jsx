import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { flexColumn, gridColumn } from '../../styles/positions'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { getUser, registerUser } from '../../firebase/userLogin'
import { useState } from 'react'

export default function Register () {
  const { register, handleSubmit, formState: { errors }, watch, setError } = useForm()
  const [registered, setRegistered] = useState(false)

  const onSubmit = async (data) => {
    const { confirmPassword, ...user } = data
    const checkUser = await getUser(user.username)
    if (!checkUser[0]) {
      await registerUser(user)
      setRegistered(true)
    } else {
      setError('username', {
        type: 'manual',
        message: 'Nombre de usuario no disponible'
      })
    }
  }

  return (
    <Box
      maxWidth='md' sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Paper
        elevation={2} sx={{
          padding: '50px',
          background: '#F7F2FA'
        }}
      >
        <Grid container sx={{ width: '60vw' }}>

          <Grid item xs={4} sx={{ ...gridColumn }}>
            <Button
              component={Link} to='/login'
              variant='contained'
              sx={{ alignSelf: 'flex-start' }}
            >Back to Login
            </Button>

            <Box sx={{ ...flexColumn, alignSelf: 'start' }}>
              <AccountCircleIcon sx={{ fontSize: '70px' }} />
              <Typography variant='h6' component='h2'>Register</Typography>
            </Box>
          </Grid>

          {
            !registered
              ? (
                <Grid
                  item
                  xs={8}
                  sx={{ ...gridColumn, rowGap: 2 }}
                  component='form'
                  onSubmit={handleSubmit(onSubmit)}
                >

                  <TextField
                    label='Username' variant='filled' sx={{ width: '300px' }} autoComplete='off'
                    {...register('username', {
                      required: 'el nombre es requerido',
                      minLength: {
                        value: 3,
                        message: 'El minimo es de 3 caracteres'
                      },
                      maxLength: {
                        value: 24,
                        message: 'El maximo es de 24 caracteres'
                      },
                      pattern: {
                        value: /^[a-zA-Z0-9_-]+$/,
                        message: 'El nombre de usuario solo puede incluir letras mayúsculas, minúsculas, números, - y _'
                      }
                    })}
                    error={!!errors.username}
                    helperText={errors?.username?.message}
                  />
                  <TextField
                    label='Email' variant='filled' type='email' autoComplete='off'
                    {...register('email')}
                    {...register('email', {
                      required: 'el email es requerido',
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: 'Correo electrónico inválido'
                      }
                    })}
                    error={!!errors.email}
                    helperText={errors?.email?.message}
                  />

                  <TextField
                    label='Password' type='password' variant='filled'
                    {...register('password', {
                      required: 'la contraseña es requerida',
                      minLength: {
                        value: 3,
                        message: 'El minimo es de 3 caracteres'
                      },
                      maxLength: {
                        value: 24,
                        message: 'El maximo es de 24 caracteres'
                      }
                    })}
                    error={!!errors.password}
                    helperText={errors?.password?.message}
                  />
                  <TextField
                    label='Confirm Password' type='password' variant='filled'
                    {...register('confirmPassword', {
                      validate: (pass) => pass === watch('password') || 'Las contraseñas no coinciden',
                      required: 'Confirmar su contraseña es requerido'
                    })}
                    error={!!errors.confirmPassword}
                    helperText={errors?.confirmPassword?.message}
                  />

                  <Button
                    type='submit'
                    variant='contained'
                    color='secondary'
                    sx={{ mt: 1, width: '100px', mx: 'auto' }}
                  >Register
                  </Button>

                </Grid>
                )
              : <Typography sx={{ m: 'auto' }}>Succesfully registered!</Typography>
          }

        </Grid>
      </Paper>
    </Box>
  )
}
