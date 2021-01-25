/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-string-refs */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Button, CssBaseline, TextField, Typography, Container, Grid,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import DateFnsUtils from '@date-io/date-fns';
import {
  KeyboardTimePicker,
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { fetchPost, updatePost, deletePost } from '../actions/index';

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  deleter: {
    backgroundColor: 'red',
    margin: theme.spacing(3, 0, 2),
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  updater: {
    backgroundColor: 'green',
    margin: theme.spacing(3, 0, 2),
  },
});

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.url.slice(8),
      title: '',
      tags: '',
      coverUrl: '',
      content: '',
      date: new Date('2020-05-01T00:00:00'),
    };
    this.updateBoi = this.updateBoi.bind(this);
    this.deleteBoi = this.deleteBoi.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleTagChange = this.handleTagChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleURLChange = this.handleURLChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.boo = this.boo.bind(this);
  }

  // I'm sorry this is hacky I really tried to find a better approach
  // but this was the only thing that worked
  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount() {
    this.props.fetchPost(this.state.id);
    setTimeout(this.boo, 1000);
  }


  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value,

    });
  };

  handleTagChange = (event) => {
    this.setState({
      tags: event.target.value,

    });
  };

  handleURLChange = (event) => {
    this.setState({
      coverUrl: event.target.value,

    });
  };

  handleContentChange = (event) => {
    this.setState({
      content: event.target.value,
    });
  };

  handleDateChange = (event) => {
    this.setState({
      date: new Date(event),
    });
  }

  boo() {
    this.setState({
      title: this.props.currentPost.title,
      date: new Date(this.props.currentPost.tags),
      content: this.props.currentPost.content,
      coverUrl: this.props.currentPost.coverUrl,
    });
    this.render();
  }

  updateBoi(event) {
    event.preventDefault();
    const toSubmit = {
      id: this.state.id,
      title: this.state.title,
      tags: this.state.date.toISOString(),
      content: this.state.content,
      coverUrl: this.state.coverUrl,
    };
    this.props.updatePost(toSubmit, this.props.history);
  }

  deleteBoi(event) {
    event.preventDefault();
    this.props.deletePost(this.state.id, this.props.history);
  }

  render() {
    const { classes } = this.props;
    return (
      <Container>
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            {this.props.currentPost.title}
          </Typography>
          <form className={classes.form} noValidate onSubmit={this.updateBoi}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="title"
              name="title"
              autoComplete="title"
              ref="title"
              onChange={this.handleTitleChange}
              value={this.state.title}
              label="Title"
            />
            {/* <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="tags"
              label="Tags"
              id="tags"
              ref="tags"
              onChange={this.handleTagChange}
              value={this.state.tags}
            /> */}
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date picker inline"
                  value={this.state.date}
                  onChange={this.handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
                <KeyboardTimePicker
                  variant="inline"
                  margin="normal"
                  id="time-picker"
                  label="Time picker"
                  value={this.state.date}
                  onChange={this.handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change time',
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="content"
              label="Content"
              id="content"
              ref="content"
              onChange={this.handleContentChange}
              value={this.state.content}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="coverUrl"
              label="coverUrl"
              id="coverUrl"
              ref="coverUrl"
              onChange={this.handleURLChange}
              value={this.state.coverUrl}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.updater}
            >
              Update Reminder
            </Button>
          </form>
          <form className={classes.form} noValidate onSubmit={this.deleteBoi}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.deleter}
              onSubmit={this.deleteBoi}
            >
              Delete Reminder
            </Button>
          </form>

        </div>
      </Container>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    currentPost: reduxState.posts.current,
  };
}

export default withRouter(connect(mapStateToProps, { fetchPost, updatePost, deletePost })(withStyles(styles)(Post)));
