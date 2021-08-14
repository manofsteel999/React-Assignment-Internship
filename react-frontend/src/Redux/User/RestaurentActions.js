import {
	FETCH_RESTAURENT_REQUEST,
	FETCH_RESTAURENT_SUCCESS,
	FETCH_RESTAURENT_ERROR,
	FETCH_CUSTOMER_SUCCESS,
} from "./RestaurentTypes";
import axios from "axios";

export const fetchRestaurentRequest = () => {
	return {
		type: FETCH_RESTAURENT_REQUEST,
	};
};

export const fetchRestaurentSuccess = (restaurent) => {
	return {
		type: FETCH_RESTAURENT_SUCCESS,
		payload: restaurent,
	};
};

export const fetchRestaurentError = (error) => {
	return {
		type: FETCH_RESTAURENT_ERROR,
		payload: error,
	};
};
export const userAuthenticatedSuccess = (res) => {
	return {
		type: FETCH_CUSTOMER_SUCCESS,
		paylaod: res,
	};
};

export const fetchRestaurent = (id) => {
	return (dispatch) => {
		dispatch(fetchRestaurentRequest);
		console.log("action func id:" + id);
		axios
			.get("http://localhost:5000/app/login/" + id)
			.then((response) => {
				// console.log(response.data);
				dispatch(fetchRestaurentSuccess(response.data));
			})
			.catch((error) => {
				const errorMessage = error.message;
				// console.log("Here" + errorMessage);
				dispatch(fetchRestaurentError(errorMessage));
			});
	};
};

export const authUser = (userId, password) => {
	return (dispatch) => {
		axios
			.post("http://localhost:5000/api/login", {
				UserId: userId,
				Password: password,
			})
			.then((response) => {
				console.log(response);
				dispatch(userAuthenticatedSuccess(response));
			})
			.catch((error) => {
				const errMsg = error.message;
				console.log(errMsg);
			});
	};
};
