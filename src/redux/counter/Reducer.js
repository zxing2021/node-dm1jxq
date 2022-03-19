let initState = {
	count: 0
};
export default function (state = initState, action) {
	const {type, amount} = action;
	switch (type) {
		case "Normal":
			if (state.count + amount >= 0) {
				return {count: state.count + amount};
			} else {
				return state;
			}
		default:
			return state;
	}
}
