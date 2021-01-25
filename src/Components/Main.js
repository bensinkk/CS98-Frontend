import '../App.css';
import {
  // eslint-disable-next-line no-unused-vars
  Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Typography, Container,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Main() {
  const classes = useStyles();
  return (
    <Container>
    <CssBaseline />
    <div className={classes.paper}>
      <Typography component="h1" variant="h5">
        King County House Price Prediction
      </Typography>
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="bedroom"
          label="Number of Bedrooms"
          name="bedroom"
          autoComplete="3"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="Bathroom"
          label="Number of Bathrooms"
          id="Bathroom"
          autoComplete="1"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="sqft_living"
          label="House SQFT (house size)"
          id="sqft_living"
          autoComplete="1100"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="sqft_lot"
          label="Lot SQFT (land size)"
          id="sqft_lot"
          autoComplete="5650"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="floor"
          label="number of floors"
          id="floor"
          autoComplete="5650"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="waterfront"
          label="Is your house waterfront? (type y or n)"
          id="waterfront"
          autoComplete="n"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="view"
          label="do you have a view of the city?"
          id="view"
          autoComplete="n"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Search
        </Button>
      </form>
    </div>
  </Container>
  );
}

export default Main;