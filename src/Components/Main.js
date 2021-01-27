import '../App.css';
import React from 'react';
import Success from './Success';
import {
  // eslint-disable-next-line no-unused-vars
  Button, CssBaseline, TextField, Grid, Typography, Container,
} from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

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

class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bedrooms: '',
      bathrooms: '',
      sqft_living: '',
      sqft_lot: '',
      floors: '',
      waterfront: '',
      yr_built: '',
      view: '',
      price: 'enter information and click submit',
    }
  }

  changeHandler = e => {
    this.setState(prevState => (
       { ...prevState,[e.target.name]: e.target.value}
      )
    )
  }

  handleSearch = async () => {
    const url = "https://cs98-backend.herokuapp.com/test";
    fetch(url, { 
      method: 'POST', 
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    body: JSON.stringify({  
      bedrooms: this.state.bedrooms,
      bathrooms: this.state.bathrooms,
      sqft_living: this.state.sqft_living,
      sqft_lot: this.state.sqft_lot,
      floors: this.state.floors,
      waterfront: this.state.waterfront,
      yr_built: this.state.yr_built,
      view: this.state.view,
    })})
    .then(async response => {
        const data = await response.json();

        // check for error response
        if (!response.ok) {
            // get error message from body or default to response statusText
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        const price = new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'USD' }).format(data[0])
        console.log(price)
        this.setState(prevState => ({
          ...prevState, price: price
        }))
      

    })
    .catch(error => {
        error.toString()
        console.error('There was an error!', error);
    });
  }
    

  render() {
    const {classes} = this.props;
    return (
      <Container>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          King County House Price Prediction
        </Typography>
        <Grid  spacing={3}           
          container
          direction="row"
          justify="center"
          alignItems="center">
          <Grid item xs={6}>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="bedrooms"
                label="Number of Bedrooms"
                name="bedrooms"
                autoComplete="3"
                autoFocus
                onChange={this.changeHandler}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="bathrooms"
                label="Number of Bathrooms"
                id="bathrooms"
                autoComplete="1"
                onChange={this.changeHandler}
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
                onChange={this.changeHandler}
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
                onChange={this.changeHandler}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="floors"
                label="number of floors"
                id="floors"
                autoComplete="1"
                onChange={this.changeHandler}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="yr_built"
                label="Year built"
                id="yr_built"
                autoComplete="2000"
                onChange={this.changeHandler}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="waterfront"
                label="Is your house waterfront? (type 0 for yes or 1 for no)"
                id="waterfront"
                autoComplete="n"
                onChange={this.changeHandler}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="view"
                label="do you have a view of the city? rate it from 0-4."
                id="view"
                autoComplete="n"
                onChange={this.changeHandler}
              />
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={this.handleSearch}
              >
                Search
              </Button>
            </form>
          </Grid>
          <Grid xs={6} 
          item
          >
                <Typography component="h2" variant="h5">
        The cost of your house is:
    </Typography>
              <Success price={this.state.price}></Success>
          </Grid>
        </Grid>
      </div>
    </Container>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(Main);