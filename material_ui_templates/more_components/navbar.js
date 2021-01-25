import React, { Component } from 'react';
import {
  withRouter, NavLink,
} from 'react-router-dom';
import '../style.scss';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar, Toolbar, Typography,
} from '@material-ui/core';
// import Posts from './posts';
// import Post from './post';
// import NewPost from './newpost';
// import SignUp from './signup';
// import SignIn from './signin';
import { signoutUser } from '../actions/index';

const styles = (theme) => ({
  titleBar: {
    backgroundColor: 'orange',
    marginBottom: 10,
    display: 'flex',
  },
  linkLeft: {
    color: 'white',
    paddingRight: 10,
  },
  linkRight: {
    marginLeft: 'auto',
  },
});

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.signoutBoi = this.signoutBoi.bind(this);
  }

  signoutBoi(event) {
    event.preventDefault();
    this.props.signoutUser();
  }

  render() {
    const { classes } = this.props;
    if (this.props.signedIn) {
      return (
        <nav>
          <AppBar position="static" className={classes.titleBar}>
            <Toolbar>
              <Typography variant="h6" className={classes.linkLeft}>
                <NavLink to="/">Home</NavLink>
              </Typography>
              <Typography variant="h6" className={classes.linkLeft} onClick={this.signoutBoi}>
                <NavLink to="/">Sign Out</NavLink>
              </Typography>
              <Typography variant="h6" className={classes.linkRight}>
                <NavLink to="/posts/new">New Reminder</NavLink>
              </Typography>
            </Toolbar>
          </AppBar>
        </nav>
      );
    } else {
      return (
        <nav>
          <AppBar position="static" className={classes.titleBar}>
            <Toolbar>
              <Typography variant="h5" className={classes.linkLeft}>
                <NavLink to="/">Home</NavLink>
              </Typography>
              <Typography variant="h5" className={classes.linkLeft}>
                <NavLink to="/signin">Sign In</NavLink>
              </Typography>
              <Typography variant="h5" className={classes.linkLeft}>
                <NavLink to="/signup">Sign Up</NavLink>
              </Typography>
              <Typography variant="h6" className={classes.linkRight}>
                <NavLink to="/posts/new">New Reminder</NavLink>
              </Typography>
            </Toolbar>
          </AppBar>
        </nav>
      );
    }
  }
}

function mapStateToProps(reduxState) {
  return {
    signedIn: reduxState.auth.authenticated,
  };
}

export default withRouter(connect(mapStateToProps, { signoutUser })(withStyles(styles)(NavBar)));
