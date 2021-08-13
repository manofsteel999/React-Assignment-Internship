import { combineReducers } from "redux";
import RestaurentReducer from "./User/RestaurentReducer";

const rootReducer = combineReducers({
	Restaurent: RestaurentReducer,
});

export default rootReducer;
