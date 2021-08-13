import {
	FETCH_RESTAURENT_REQUEST,
	FETCH_RESTAURENT_SUCCESS,
	FETCH_RESTAURENT_ERROR,
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

export const fetchRestaurent = (id) => {
	return (dispatch) => {
		dispatch(fetchRestaurentRequest);
		console.log("action func id:" + id);
		axios
			.get("http://localhost:5000/app/login/" + id)
			.then((response) => {
				console.log(response.data);
				dispatch(fetchRestaurentSuccess(response.data));
			})
			.catch((error) => {
				const errorMessage = error.message;
				console.log("Here" + errorMessage);
				dispatch(fetchRestaurentError(errorMessage));
			});
	};
};
