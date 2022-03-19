import Counter from "./redux/counter/Reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
export default createStore(
	combineReducers({
		counter: Counter
	}), composeWithDevTools(applyMiddleware(thunk))
);
