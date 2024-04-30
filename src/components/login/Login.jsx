import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { getUser } from '../../firebase/userLogin'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/slice/loginSlice'

export default function Login () {
  const { register, handleSubmit, formState: { errors }, setError } = useForm()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    let userData = {
      username: '',
      email: '',
      password: ''
    }

    const userArray = await getUser(data.username)
    if (userArray.length === 0) {
      setError('username', {
        type: 'manual',
        message: 'No existe el usuario'
      })
      return
    } else {
      userData = userArray[0]
    }

    if (userData.password !== data.password) {
      setError('password', {
        type: 'manual',
        message: 'contraseña incorrecta'
      })
    } else {
      dispatch(login(userData))
      navigate('/')
    }
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Paper
        elevation={2}
        component='form'
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          padding: '50px',
          background: '#F7F2FA'
        }}
      >
        <AccountCircleIcon sx={{ fontSize: '70px' }} />
        <Typography variant='h6' component='h2'>Sign In</Typography>

        <TextField
          label='Username'
          variant='filled'
          sx={{ width: '300px' }}
          autoComplete='off'
          {...register('username', {
            required: 'el campo es requerido',
            validate: value => !/\s/.test(value) || 'El nombre no puede contener espacios'
          })}
          error={!!errors.username}
          helperText={errors?.username?.message}
        />

        <TextField
          label='Password'
          type='password'
          variant='filled'
          sx={{ width: '300px' }}
          {...register('password', {
            required: 'el campo es requerido'
          })}
          error={!!errors.password}
          helperText={errors?.password?.message}
        />

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
          <Button variant='contained' type='submit'>Login</Button>
          <Button variant='contained' color='secondary' component={Link} to='/register'>Register</Button>
        </Box>
      </Paper>

    </Box>
  )
}
