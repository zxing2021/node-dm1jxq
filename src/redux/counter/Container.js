import UI from "./UI.jsx";
import {connect} from "react-redux";
import {Async, Normal} from "./Action";
let states = (state) => {
	return {count: state.counter.count};
}
let methods = {
	upd: Normal,
	updAsync: Async
}
export default connect(states, methods)(UI)
