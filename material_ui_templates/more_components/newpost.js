/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-string-refs */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  // eslint-disable-next-line no-unused-vars
  Button, CssBaseline, TextField, Typography, Container, Grid,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import {
  KeyboardTimePicker,
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { connect } from 'react-redux';
import { createPost } from '../actions/index';


// import { }

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

// const [selectedDate, setSelectedDate] = useState(new Date('2020-05-01T00:00:00'));
// const handleDateChange = (date) => {
//   setSelectedDate(date);
// };

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      tags: '',
      coverUrl: '',
      contents: '',
      date: new Date('2020-05-01T00:00:00'),
    };
    this.formSubmission = this.formSubmission.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleTagChange = this.handleTagChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleURLChange = this.handleURLChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
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
      contents: event.target.value,
    });
  };

  handleDateChange = (event) => {
    this.setState({
      date: new Date(event),
    });
  }

  formSubmission(event) {
    event.preventDefault();
    const toSubmit = {
      title: this.state.title,
      tags: this.state.date.toISOString(),
      contents: this.state.contents,
      coverUrl: this.state.coverUrl,
    };
    this.props.createPost(toSubmit, this.props.history);
    // then(this.props.history.push('/'));
  }


  render() {
    const { classes } = this.props;
    return (
      <Container>
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            New Reminder
          </Typography>
          <form className={classes.form} noValidate onSubmit={this.formSubmission}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              autoComplete="title"
              ref="title"
              onChange={this.handleTitleChange}
              autoFocus
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
              name="contents"
              label="Contents"
              id="contents"
              ref="contents"
              onChange={this.handleContentChange}
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
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Submit
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}

export default withRouter(connect(null, { createPost })(withStyles(styles)(NewPost)));
