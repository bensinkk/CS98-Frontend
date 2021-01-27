import {Grid, Box, Typography} from '@material-ui/core';

function Success(props) {
return (
    <Grid container 
    justify="center"
    alignItems="center">
      <Box bgcolor='#C0C0C0' color='white' height="94%" width="50%" mt={3} style={{ fontSize: '20px' }}>
        <Typography component="h2" variant="h5">
          {props.price}
        </Typography>
      </Box>
    </Grid>
  );
}

export default Success;