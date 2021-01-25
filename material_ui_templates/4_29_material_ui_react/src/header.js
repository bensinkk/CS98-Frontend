import { Toolbar, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
}));

export default function Header(props) {
  const classes = useStyles();
  return (
    <>
      <Toolbar>
        <Button size="small" className={classes.toolbar}>Subscribe</Button>
        <Typography
          className={classes.toolbar}
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
        >
          My Blog
        </Typography>
        <Button size="small" className={classes.toolbar}>Search</Button>
        <Button variant="outlined" size="small" className={classes.toolbar}>
          Sign up
        </Button>
      </Toolbar>
    </>
  );
}
