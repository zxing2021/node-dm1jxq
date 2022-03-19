export const Normal = v => ({
	type: "Normal", amount: v
})
export const Async = (v, time) => {
	return (dispatch) => {
		setTimeout(() => {
			dispatch(Normal(v));
		}, time);
	}
}
