/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-string-refs */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  // eslint-disable-next-line no-unused-vars
  Button, CssBaseline, TextField, Typography, Container,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { signinUser } from '../actions/index';


const styles = (theme) => ({
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
});

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      p: '',
    };
    this.formSubmission = this.formSubmission.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePChange = this.handlePChange.bind(this);
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,

    });
  };

  handlePChange = (event) => {
    this.setState({
      p: event.target.value,

    });
  };

  formSubmission(event) {
    event.preventDefault();
    if (this.props.signedIn) {
      // eslint-disable-next-line no-alert
      alert('you\'re already signed in!');
      return;
    }
    const toSubmit = {
      email: this.state.email,
      password: this.state.p,
    };
    this.props.signinUser(toSubmit, this.props.history);
  }


  render() {
    const { classes } = this.props;
    return (
      <Container>
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign In!!!!!!1
          </Typography>
          <form className={classes.form} noValidate onSubmit={this.formSubmission}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="title"
              label="Email"
              name="email"
              // autoComplete="email"
              ref="email"
              onChange={this.handleEmailChange}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              id="password"
              ref="password"
              type="password"
              onChange={this.handlePChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    signedIn: reduxState.auth.authenticated,
  };
}

export default withRouter(connect(mapStateToProps, { signinUser })(withStyles(styles)(SignIn)));
