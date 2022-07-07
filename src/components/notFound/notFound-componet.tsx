import { Box, Typography } from '@mui/material';
const notFount = () => {
  return (
    <Box
    sx={{
      backgroundColor: '#cccccc',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '40rem',
      width: '100%',
    }}> 
    <Box
      color='primary.contrastText'
      mt={25}
      ml={12}
      >
      <Typography variant="h1" component="div" align='center'>
        404 <br/>
        Not Found
      </Typography>     
      </Box>
    </Box>
  )
}

export default notFount