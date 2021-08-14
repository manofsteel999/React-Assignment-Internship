import {
	FETCH_RESTAURENT_REQUEST,
	FETCH_RESTAURENT_SUCCESS,
	FETCH_RESTAURENT_ERROR,
	FETCH_CUSTOMER_SUCCESS,
	FETCH_CUSTOMER_ERROR,
} from "./RestaurentTypes";

const initialState = {
	loading: true,
	restaurent: {},
	error: "",
	customerData: null,
	customerError: false,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_RESTAURENT_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_RESTAURENT_SUCCESS:
			return {
				...state,
				loading: false,
				restaurent: action.payload,
				error: "",
			};
		case FETCH_RESTAURENT_ERROR:
			return {
				...state,
				loading: false,
				restaurent: {},
				error: action.payload,
			};
		case FETCH_CUSTOMER_SUCCESS:
			return {
				...state,
				customerData: action.payload,
				customerError: false,
			};
		case FETCH_CUSTOMER_ERROR:
			return {
				...state,
				customerError: true,
			};
		default:
			return state;
	}
};

export default reducer;
