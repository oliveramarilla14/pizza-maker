import { Add, Check } from '@mui/icons-material'
import { Box, IconButton, Paper, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Ingredients ({ title, price, action, option }) {
  const [selected, setSelected] = useState(false)
  const dispatch = useDispatch()
  const ingredients = useSelector(state => state.ingredients)

  const onClick = () => {
    setSelected(!selected)
  }

  useEffect(() => {
    if (selected) {
      dispatch(action(title))
    } else {
      dispatch(action(''))
    }
  }, [selected])

  useEffect(() => {
    if (ingredients[option] !== title) {
      setSelected(false)
    }
  }, [ingredients[option]])

  return (
    <Paper sx={{ display: 'flex', gap: 2, alignItems: 'center', borderRadius: '10px', overflow: 'hidden' }}>
      {
      selected
        ? <IconButton sx={{ backgroundColor: '#6750A4', ml: 1, color: 'white' }} onClick={onClick}><Check /> </IconButton>
        : <IconButton sx={{ backgroundColor: '#EADDFF', ml: 1, color: '#6750A4' }} onClick={onClick}> <Add /></IconButton>
}

      <Box sx={{ flexGrow: '1' }}>
        <Typography sx={{ fontWeight: 'bold' }}>{title}</Typography>
        <Typography variant='body2'>{price}</Typography>
      </Box>
      <img src='http://placehold.co/75' />
    </Paper>
  )
}

// export default function Ingredients ({ title, price }) {
//   return (
//     <Card sx={{ display: 'flex' }}>
//       <CardHeader
//         title={title}
//         subheader={price}
//         sx={{ flexGrow: '1' }}
//         action={
//           <IconButton onClick={() => console.log('object')}>
//             <Add sx={{ fontSize: '50px' }} />
//           </IconButton>
// }
//       />
//       <CardMedia
//         component='img'
//         image='http://placehold.co/50'
//         height='100px'
//         sx={{ width: '100px' }}
//       />
//     </Card>
//   )
// }
