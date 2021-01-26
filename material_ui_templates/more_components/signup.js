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
import { signupUser } from '../actions/index';


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

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      p: '',
      u: '',
    };
    this.formSubmission = this.formSubmission.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePChange = this.handlePChange.bind(this);
    this.handleUChange = this.handleUChange.bind(this);
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

  handleUChange = (event) => {
    this.setState({
      u: event.target.value,
    });
  }

  formSubmission(event) {
    event.preventDefault();
    const toSubmit = {
      email: this.state.email,
      password: this.state.p,
      username: this.state.u,
    };
    // eslint-disable-next-line no-alert
    this.props.signupUser(toSubmit, this.props.history);
  }


  render() {
    const { classes } = this.props;
    return (
      <Container>
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            WoW a new User!
          </Typography>
          <form className={classes.form} noValidate onSubmit={this.formSubmission}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              ref="username"
              onChange={this.handleUChange}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              ref="email"
              onChange={this.handleEmailChange}
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
              Sign Up
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}

export default withRouter(connect(null, { signupUser })(withStyles(styles)(SignUp)));
