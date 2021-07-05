import React from "react";
import Header from "./Header";
import DisplayDetails from "./DisplayDetails";
import { makeStyles } from "@material-ui/core"

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

  detailsDisplay: {
    marginTop: "5rem"
  }
})

function App() {
  const classes = useStyles();

  return (
    <div>
      <Header />

      <div className={classes.detailsDisplay}>
        <DisplayDetails />
      </div>

    </div>
  );
}

export default App;
