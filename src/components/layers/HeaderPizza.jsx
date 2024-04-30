import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark'
import SaveIcon from '@mui/icons-material/Save'
import { Link } from 'react-router-dom'

export default function HeaderPizza () {
  return (

    <AppBar position='static'>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant='h4' component='h1'>
          🍕 Pizza Maker
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant='contained'
            color='secondary'
            startIcon={<SaveIcon />}
            component={Link}
            to='/saved-pizzas'
          > My Pizza
          </Button>
          <Button
            variant='contained'
            color='secondary'
            startIcon={<CollectionsBookmarkIcon />}
            component={Link}
            to='/adress'
          > Adress
          </Button>

        </Box>
      </Toolbar>
    </AppBar>

  )
}
