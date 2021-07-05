import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";


// Styling-------------------------------------------------------------------------------

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },

  header: {
    backgroundColor: "transparent",
    color: "black",
    boxShadow: "0px 0px 0px 0px"
  },

  buttonDiv: {
    position: "absolute",
    right: "10rem"
  },
})

function Header() {
  const classes = useStyles();

  // Rendering-------------------------------------------------------------------------------
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <Typography variant="h6">
            Find Your Bank
          </Typography>
          <div className={classes.buttonDiv}>
          </div>
        </Toolbar>
      </AppBar>

    </div>
  );
}

export default Header;