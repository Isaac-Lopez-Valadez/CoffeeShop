import React from 'react'
import {Grid, Card, CardHeader, 
    CardMedia, CardContent, Typography} from '@mui/material';

const Platillo = ({platillo}: any) => {
  return (
    <Grid item xs={12} sm={5}>
      <Card sx={{ maxWidth: '100%', backgroundColor:'#bdbdbd' }}>
        <CardHeader
        title={`Precio: ${platillo.price}`}
        />
        <CardMedia
         component="img"
         height="100%"
         image={`${platillo.img}`}
         alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align='center'>
            {platillo.name}
          </Typography>
          <Typography variant="body1" color="text.secondary" align='center'>
            {platillo.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default Platillo