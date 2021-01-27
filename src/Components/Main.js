import React, { useState, useEffect } from 'react';
import '../App.css';
import {
  // eslint-disable-next-line no-unused-vars
  Button, CssBaseline, TextField, Grid, Typography, Container,
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

  const [allValues, setAllValues] = useState({
    bedroom: '',
    bathroom: '',
    sqft_living: '',
    sqft_lot: '',
    waterfront: '',
    view: ''
    });

  const changeHandler = e => {
    setAllValues( prevValues => {
        return { ...prevValues,[e.target.name]: e.target.value}
      }
    )
  }

  const classes = useStyles();
  return (
      <Container>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          King County House Price Prediction
        </Typography>
        <Grid container spacing={3} direction="row" justify="center">
          <Grid>
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
                onChange={changeHandler}
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
                onChange={changeHandler}
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
                onChange={changeHandler}
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
                onChange={changeHandler}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="floor"
                label="number of floors"
                id="floor"
                autoComplete="2"
                onChange={changeHandler}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="waterfront"
                label="Is your house waterfront? (type 1 for yes or 0 for no)"
                id="waterfront"
                autoComplete="n"
                onChange={changeHandler}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="view"
                label="do you have a view of the city? (rate your view 0-4)"
                id="view"
                autoComplete="0"
                onChange={changeHandler}
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
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default Main;