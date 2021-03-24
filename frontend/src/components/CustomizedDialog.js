import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

export default function CustomizedDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title">
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        <DialogTitle id="form-dialog-title" className={classes.dialogTitle}>
          Register
        </DialogTitle>
        <DialogContent>
          <div className={classes.dialogRow}>
            <TextField
              margin="dense"
              id="name"
              label="Name"
              type="text"
              placeholder="Enter your name..."
            />
          </div>
          <div className={classes.dialogRow}>
            <TextField
              margin="dense"
              id="email"
              label="E-mail"
              type="text"
              placeholder="Enter your email..."
            />
          </div>
          <div className={classes.dialogRow}>
            <TextField
              margin="dense"
              id="pass"
              label="Password"
              type="password"
              placeholder="Enter your password..."
            />
          </div>
          <div className={classes.dialogRow}>
            <div className={classes.termService}>
              <Typography>By creating an account, you agree to the</Typography>
              <Typography>
                <Link>Terms of Service</Link> and <Link>Privacy Policy</Link>
              </Typography>
            </div>
          </div>
          <div className={classes.dialogRow}>
            <Button>Register</Button>
          </div>
          <div className={classes.dialogRow}>
            <Typography>
              Do you have an account? <Link>Log in</Link>
            </Typography>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

const useStyles = makeStyles({
  dialogTitle: {
    textAlign: "center",
  },
  dialogRow: {
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "center",
  },
  termService: {
      textAlign: "center"
  }
});
