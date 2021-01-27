import {Box, Grid, Typography} from '@material-ui/core';

function Success() {
return (
    <Grid 
    container
    spacing={3}
    direction="row"
    justify="center"
    alignItems="center"
    >
      <Typography component="h2" variant="h5">
          The total value of your house in King County is predicted to be:
      </Typography>
      <Box bgcolor='#C0C0C0' color='white' height="90%" width="50%" mt={3} style={{ fontSize: '20px' }}>
      <Typography component="h2" variant="h5">
          $300,000
        </Typography>
      </Box>
    </Grid>
  );
}

export default Success;