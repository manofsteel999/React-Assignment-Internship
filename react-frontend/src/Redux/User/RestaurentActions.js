import {
	FETCH_RESTAURENT_REQUEST,
	FETCH_RESTAURENT_SUCCESS,
	FETCH_RESTAURENT_ERROR,
	FETCH_CUSTOMER_SUCCESS,
	FETCH_CUSTOMER_ERROR,
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
export const userAuthenticatedSuccess = (customer) => {
	return {
		type: FETCH_CUSTOMER_SUCCESS,
		payload: customer,
	};
};

export const fetchCustomerError = () => {
	return {
		type: FETCH_CUSTOMER_ERROR,
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
				//console.log(response.data);
				if (response.data == "User does not exist") {
					dispatch(fetchCustomerError());
				} else {
					// console.log("hello", response.data);
					dispatch(userAuthenticatedSuccess(response.data));
				}
			})
			.catch((error) => {
				const errMsg = error.message;
				console.log(errMsg);
				// dispatch(fetchCustomerError(errMsg));
			});
	};
};
