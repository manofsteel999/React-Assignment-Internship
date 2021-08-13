import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import MenuIcon from "@material-ui/icons/Menu";
// import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

const HomeScreen = () => {
	const classes = useStyles();

	return (
		<>
			<div className={classes.root}>
				<AppBar position="inherit">
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
					Welcome Back, Ramesh
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
							Name: Ramesh Gupta
						</Typography>
						<Typography variant="h6" color="textPrimary">
							Email: avinssdk
						</Typography>
						<Typography variant="h6" color="textPrimary">
							UserName:avineshgupta
						</Typography>
					</CardContent>
				</Card>
			</div>
		</>
	);
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

export default HomeScreen;
