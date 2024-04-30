import Register from './components/login/Register'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './components/login/Login'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import PizzaMaker from './components/pizza/PizzaMaker'

export default function App () {
  const { loginStatus } = useSelector(state => state.login)

  const navigate = useNavigate()

  useEffect(() => {
    if (!loginStatus) navigate('/login')
  }, [loginStatus])

  return (
    < >

      <Routes>
        <Route path='/login' Component={Login} />
        <Route path='/register' Component={Register} />
        <Route path='/' Component={PizzaMaker} />
      </Routes>

    </>

  )
}
