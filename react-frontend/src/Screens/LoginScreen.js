import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Avatar from "@material-ui/core/Avatar";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import { BrowserRouter as Router } from "react-router-dom";

import { connect } from "react-redux";
import { fetchRestaurent, authUser } from "../Redux/index";

const LoginScreen = ({ userData, match, fetchRest, userAuth, history }) => {
  const id = match.params.id;
  // console.log(id);
  const classes = useStyles(); // for Material Ui styles
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(userData.customerError);
  useEffect(() => {
    fetchRest(id);
  }, [fetchRest, id]);

  if (userData.loading == true) {
    return null;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    userAuth(email, password);
    console.log("Form submitted success");
    console.log(userData.customerData);
    if (userData.customerData != null) {
      history.push("/home");
    } else return;
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.content}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          {userData.restaurent.Login}
        </Typography>
        <form className={classes.form} noValidate onSubmit={submitHandler}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label={`${userData.restaurent.Username}`}
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label={`${userData.restaurent.Password}`}
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          {userData.customerError ? (
            <h3 style={{ color: "red" }}>Incorrect Credentials Entered</h3>
          ) : null}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {userData.restaurent.Signin}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.Restaurent,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRest: (id) => dispatch(fetchRestaurent(id)),
    userAuth: (email, password) => dispatch(authUser(email, password)),
  };
};

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="">
        Your Website
      </Link>{" "}
      {2021}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
