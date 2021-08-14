import {
	FETCH_RESTAURENT_REQUEST,
	FETCH_RESTAURENT_SUCCESS,
	FETCH_RESTAURENT_ERROR,
	FETCH_CUSTOMER_SUCCESS,
} from "./RestaurentTypes";

const initialState = {
	loading: true,
	restaurent: {},
	error: "",

	customerData: {},
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
				loading: false,
				restaurent: action.payload,
				error: "",
			};
		case FETCH_RESTAURENT_ERROR:
			return {
				loading: false,
				restaurent: {},
				error: action.payload,
			};
		case FETCH_CUSTOMER_SUCCESS:
			return {
				...state,
				customerData: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
