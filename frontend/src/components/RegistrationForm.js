import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import InputAdornment from "@material-ui/core/InputAdornment";
import axios from "axios";

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const validatePassword = (pass) => {
  return pass.length >= 8;
};

export default function RegistrationForm({ handleOpenClose, open }) {
  const [emailValidation, setEmailValidation] = React.useState(false);
  const [emailMess, setEmailMess] = React.useState("");
  const [passValidation, setPassValidation] = React.useState(false);
  const [passMess, setPassMess] = React.useState("");

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    e.preventDefault();
    if (!validateEmail(e.target.value)) {
      setEmailValidation(true);
      setEmailMess("Invalid email");
    } else {
      setEmailValidation(false);
      setEmailMess("");
    }
    setEmail(e.target.value);
  };
  const handlePassChange = (e) => {
    e.preventDefault();
    if (!validatePassword(e.target.value)) {
      setPassValidation(true);
      setPassMess("Password must be at least 8 characters");
    } else {
      setPassValidation(false);
      setPassMess("");
    }
    setPassword(e.target.value);
  };
  const handleSubmit = async () => {
    const res = await axios.post("http://localhost:3000/auth/register", {
      name,
      email,
      password,
    });
    if (res) {
      handleOpenClose(true);
    }
  };
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Dialog
        open={open}
        onClose={() => handleOpenClose(false)}
        aria-labelledby="form-dialog-title">
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={() => handleOpenClose(false)}>
          <CloseIcon color="secondary" />
        </IconButton>
        <DialogTitle id="form-dialog-title" className={classes.dialogTitle}>
          <div className={classes.bold}>
            <h2>Register</h2>
          </div>
        </DialogTitle>
        <DialogContent>
          <div className={classes.dialogRow}>
            <TextField
              className={classes.dialogInput}
              margin="dense"
              id="name"
              type="text"
              placeholder="Enter your name..."
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className={classes.dialogRow}>
            <TextField
              className={classes.dialogInput}
              margin="dense"
              id="email"
              type="text"
              placeholder="Enter your email..."
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              value={email}
              onChange={handleEmailChange}
              error={emailValidation}
              helperText={emailMess}
            />
          </div>
          <div className={classes.dialogRow}>
            <TextField
              className={classes.dialogInput}
              margin="dense"
              id="pass"
              type="password"
              placeholder="Enter your password..."
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              value={password}
              onChange={handlePassChange}
              error={passValidation}
              helperText={passMess}
            />
          </div>
          <div className={classes.dialogRow}>
            <div className={classes.termService}>
              <Typography>By creating an account, you agree to the</Typography>
              <Typography>
                <Link
                  href="#"
                  color="primary"
                  underline="always"
                  className={classes.link}>
                  <span className={classes.bold}>Terms of Service</span>
                </Link>{" "}
                and{" "}
                <Link color="primary" underline="always" href="#">
                  <span className={classes.bold}>Privacy Policy</span>
                </Link>
              </Typography>
            </div>
          </div>
          <div className={classes.dialogRow}>
            <Button
              variant="contained"
              className={classes.regBtn}
              color="primary"
              type="submit"
              onClick={handleSubmit}>
              Register
            </Button>
          </div>
          <div className={(classes.dialogRow, classes.logIn)}>
            <Typography variant="body3">
              Do you have an account?{" "}
              <Link
                color="primary"
                onClick={() => handleOpenClose(true)}
                underline="always"
                href="#">
                <span className={classes.bold}>Log in</span>
              </Link>
            </Typography>
          </div>
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff7413",
    },
    secondary: {
      main: "#d4d3d3",
    },
  },
});

const useStyles = makeStyles({
  dialogTitle: {
    textAlign: "center",
    padding: "0 0",
  },
  bold: {
    fontWeight: "bold",
  },
  dialogRow: {
    paddingLeft: "3rem",
    paddingRight: "3rem",
    paddingBottom: "2rem",
    justifyContent: "center",
    width: "80%",
  },
  termService: {
    textAlign: "center",
  },
  dialogInput: {
    width: "20rem",
    background: "#f6f6f6",
  },
  link: {
    textDecoration: "underlined",
  },
  regBtn: {
    textTransform: "none",
    color: "white",
    width: "96%",
  },
  logIn: {
    paddingTop: "2rem",
    paddingLeft: "6rem",
    paddingBottom: "1rem",
  },
  closeButton: {
    width: "3rem",
    marginLeft: "88%",
  },
});
