import { Box, Button, Container, Typography } from '@mui/material'
import HeaderPizza from '../layers/HeaderPizza'
import Ingredients from './Ingredients'
import { changeDough } from '../../redux/slice/ingredientsSlice'

export default function PizzaMaker () {
  return (
    <>

      <HeaderPizza />
      <Container>
        <Typography variant='h4' component='h2' align='center' sx={{ mt: 2 }}>
          Select your ingredients
        </Typography>

        <Box id='select-ingredients'>
          <Button variant='contained' color='error'>Reset</Button>

          <Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', columnGap: 2 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                <Typography variant='h5'>Masa</Typography>
                <Ingredients title='Refinada' price='$3.00' action={changeDough} option='dough' />
                <Ingredients title='Integral' price='$3.00' action={changeDough} option='dough' />
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                <Typography variant='h5'>Queso</Typography>
                <Ingredients title='Refinada' price='$3.00' action={changeDough} />
                <Ingredients title='Integral' price='$3.00' action={changeDough} />
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                <Typography variant='h5'>Salsa</Typography>
                <Ingredients title='Refinada' price='$3.00' action={changeDough} />
                <Ingredients title='Integral' price='$3.00' action={changeDough} />
              </Box>
            </Box>
          </Box>

        </Box>
      </Container>

    </>
  )
}
