import { Container, Typography } from '@mui/material'
import HeaderPizza from '../layers/HeaderPizza'

export default function PizzaMaker () {
  return (
    <>

      <HeaderPizza />
      <Container>
        <Typography>
          Select your ingredients
        </Typography>
      </Container>

    </>
  )
}
