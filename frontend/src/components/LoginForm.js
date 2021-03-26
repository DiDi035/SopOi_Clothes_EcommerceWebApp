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
import Checkbox from "@material-ui/core/Checkbox";
import axios from "axios";

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export default function LoginForm({ handleOpenClose, open }) {
  const [validRegistration, setValidRegistration] = React.useState(true);

  const [emailValidation, setEmailValidation] = React.useState(false);
  const [emailMess, setEmailMess] = React.useState("");

  const [message, setMessage] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

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
    setPassword(e.target.value);
  };
  const handleSubmit = async () => {
    const res = await axios.post("http://localhost:3000/auth/login", {
      email,
      password,
    });
    if (email === "") {
      console.log("Please type in your email");
    }
    if (password === "") {
      console.log("Please type in your password");
    }
    if (res.data.valid) {
      handleOpenClose(false);
      setMessage(false);
    } else {
      setMessage(true);
    }
  };
  React.useEffect(() => {
    if (email !== "" && !emailValidation && password !== "") {
      setValidRegistration(false);
    } else {
      setValidRegistration(true);
    }
  }, [email, password]);
  const classes = useStyles();
  return (
    <div className={classes.formContainer}>
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
              <h2>Log in</h2>
            </div>
            {message ? (
              <p className={classes.message}>
                Your email/password is incorrect!
              </p>
            ) : (
              ""
            )}
          </DialogTitle>
          <DialogContent>
            <div className={classes.dialogRow}>
              <TextField
                error={emailValidation}
                helperText={emailMess}
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
              />
            </div>
            <div className={classes.dialogRow}>
              <div className={classes.checkBoxContainer}>
                <div className={classes.checkBox}>
                  <Checkbox value="remember" color="primary" size="small" />
                  <p className={classes.checkBoxLable}>Remember me</p>
                </div>
                <Link
                  color="secondary"
                  className={classes.forgot}
                  underline="hover"
                  href="#">
                  Forgot your pasword?
                </Link>
              </div>
            </div>
            <div className={classes.dialogRow}>
              <Button
                type="submit"
                variant="contained"
                className={classes.regBtn}
                color="primary"
                onClick={handleSubmit}
                disabled={validRegistration}>
                Log in
              </Button>
            </div>
            <div className={(classes.dialogRow, classes.logIn)}>
              <Typography variant="body3">
                Don't have an account?{" "}
                <Link
                  color="primary"
                  underline="always"
                  onClick={() => handleOpenClose(true)}
                  href="#">
                  <span className={classes.bold}>Register</span>
                </Link>
              </Typography>
            </div>
          </DialogContent>
        </Dialog>
      </ThemeProvider>
    </div>
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
    paddingLeft: "2rem",
    paddingRight: "1.5rem",
    paddingBottom: "2rem",
    justifyContent: "center",
    width: "80%",
  },
  termService: {
    textAlign: "center",
  },
  dialogInput: {
    width: "21.3rem",
    background: "#f6f6f6",
  },
  link: {
    textDecoration: "underlined",
  },
  regBtn: {
    textTransform: "none",
    color: "white",
    width: "105%",
  },
  logIn: {
    paddingTop: "2rem",
    paddingLeft: "5rem",
    paddingBottom: "1rem",
  },
  closeButton: {
    width: "3rem",
    marginLeft: "88%",
  },
  checkBoxLable: {
    fontSize: "13px",
    marginTop: "0.7rem",
    color: "#4d4d4d",
    fontWeight: "500",
  },
  checkBoxContainer: {
    width: "22rem",
    display: "flex",
  },
  checkBox: {
    flex: 1,
    display: "flex",
  },
  forgot: {
    flex: 1,
    fontSize: "12px",
    marginTop: "0.7rem",
    fontWeight: "1000",
    marginLeft: "4.5rem",
  },
  message: {
    color: "red",
    fontSize: "0.8rem",
  },
});
