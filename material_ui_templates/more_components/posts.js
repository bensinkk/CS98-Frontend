/* eslint-disable react/no-danger */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import marked from 'marked';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { fetchPosts, deletePost } from '../actions/index';

const styles = (theme) => ({
  root: {
    minWidth: 275,
    marginBottom: 10,
  },
  pos: {
    marginBottom: 12,
  },
});

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { classes } = this.props;
    if (this.props.allPosts === null) {
      return (
        <div>
          Loadin
        </div>
      );
    } else {
      const postbois = this.props.allPosts.map((post) => {
        const dateBoi = new Date(post.tags);
        dateBoi.setSeconds(0);
        dateBoi.setMilliseconds(0);
        return (
          <NavLink to={`posts/:${post.id}`} key={post.id}>
            <Card className={classes.root} key={post.id}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {post.title}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Made by the wonderful {post.username}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  {dateBoi.toLocaleString()}
                </Typography>
                <div className="noteBody" dangerouslySetInnerHTML={{ __html: marked(post.coverUrl || '') }} />
              </CardContent>
            </Card>
          </NavLink>
        );
      });
      return (
        <div>
          { postbois }
        </div>
      );
    }
  }
}


function mapStateToProps(reduxState) {
  return {
    allPosts: reduxState.posts.all,
  };
}

export default connect(mapStateToProps, { fetchPosts, deletePost })(withStyles(styles)(Posts));
