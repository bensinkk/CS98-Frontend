import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import '../style.scss';
import { connect } from 'react-redux';
// import { makeStyles } from '@material-ui/core/styles';
// import {
//   AppBar, Toolbar, Typography,
// } from '@material-ui/core';
import Posts from './posts';
import Post from './post';
import NewPost from './newpost';
import SignUp from './signup';
import SignIn from './signin';
import NavBar from './navbar';
import PrivateRoute from './privateRoute';

const App = (props) => {
  return (
    <div>
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Posts} />
            <PrivateRoute path="/posts/new" component={NewPost} />
            <Route path={`/posts/:${Post.id}`} component={Post} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route render={() => (<div>wait that doesnt exist</div>)} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

function mapStateToProps(reduxState) {
  return {
    signedIn: reduxState.auth.authenticated,
  };
}

export default connect(mapStateToProps, null)(App);
