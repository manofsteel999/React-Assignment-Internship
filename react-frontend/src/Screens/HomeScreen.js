import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { connect } from "react-redux";
import { fetchRestaurent, authUser } from "../Redux/index";

const HomeScreen = ({ userData }) => {
	const classes = useStyles();

	return (
		<>
			<div className={classes.root}>
				<AppBar position="relative">
					<Toolbar variant="dense">
						<IconButton
							edge="start"
							className={classes.menuButton}
							color="inherit"
							aria-label="menu"
						></IconButton>
						<Typography variant="h5" color="inherit">
							XYZ Restaurent
						</Typography>
					</Toolbar>
				</AppBar>
			</div>
			<CssBaseline />
			<div className={classes.content}>
				<Typography variant="h3" align="left">
					Welcome Back, {userData.customerData.Name}
				</Typography>

				<Card className={classes.cardroot} variant="bold">
					<CardContent>
						<Typography
							color="primary"
							gutterBottom
							variant="h5"
							align="left"
						>
							As per our records,your Details are:
						</Typography>

						<Typography variant="h6" color="textPrimary">
							Name: {userData.customerData.Name}
						</Typography>
						<Typography variant="h6" color="textPrimary">
							Email: {userData.customerData.Email}
						</Typography>
						<Typography variant="h6" color="textPrimary">
							UserName: {userData.customerData.UserId}
						</Typography>
					</CardContent>
				</Card>
			</div>
		</>
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
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},

	pos: {
		marginBottom: 12,
	},
	cardroot: {
		width: "45%",
		marginTop: "1.5rem",
	},
}));

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
