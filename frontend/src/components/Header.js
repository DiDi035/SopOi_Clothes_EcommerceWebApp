import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Container from "@material-ui/core/Container";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { BorderColor } from "@material-ui/icons";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";

const Header = () => {
  const [regOpen, setRegOpen] = React.useState(false);
  const [logOpen, setLogOpen] = React.useState(false);
  const handleRegFormToggle = (openLogForm) => {
    setRegOpen(!regOpen);
    if (openLogForm) {
      setLogOpen(true);
    }
  };
  const handleLogFormToggle = (openRegForm) => {
    setLogOpen(!logOpen);
    if (openRegForm) {
      setRegOpen(true);
    }
  };
  const classes = useStyles();
  return (
    <div>
      <AppBar color="#fbe9e7">
        <Toolbar>
          <Container maxWidth="lg">
            <Grid container>
              <Grid item lg={4} justify="center">
                <InputBase placeholder="Search" className={classes.searchBar} />
              </Grid>
              <Grid
                item
                lg={4}
                justify="center"
                className={classes.brandContainer}>
                <Typography className={classes.brand}>Sop oi...</Typography>
              </Grid>
              <Grid
                item
                lg={4}
                justify="center"
                className={classes.buttonContainer}>
                <Button
                  className={(classes.buttonGroup, classes.regBtn)}
                  onClick={() => handleRegFormToggle(false)}>
                  Register
                </Button>
                <Button
                  onClick={() => handleLogFormToggle(false)}
                  variant="outlined"
                  className={(classes.buttonGroup, classes.loginBtn)}>
                  Log in
                </Button>
                <IconButton className={classes.buttonGroup}>
                  <ShoppingCartIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
      <LoginForm handleOpenClose={handleLogFormToggle} open={logOpen} />
      <RegistrationForm handleOpenClose={handleRegFormToggle} open={regOpen} />
    </div>
  );
};

const useStyles = makeStyles({
  buttonContainer: {
    paddingLeft: "4rem",
  },
  buttonGroup: {
    padding: "1rem 2rem",
  },
  loginBtn: {
    color: "#ff7413",
    borderColor: "#ff7413",
    borderRadius: "2rem",
    width: "8rem",
    height: "2rem",
    textTransform: "none",
  },
  regBtn: {
    width: "8rem",
    height: "2rem",
    textTransform: "none",
  },
  brand: {
    padding: "1rem 0",
  },
  brandContainer: {
    textAlign: "center",
  },
  searchBar: {
    marginTop: "0.5rem",
    marginLeft: "1rem",
    width: "12rem",
    border: "1px solid #d4d3d3",
    borderRadius: "2rem",
    padding: "0 1rem",
  },
});

export default Header;
