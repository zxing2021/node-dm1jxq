export default function (props) {
	return (
		<div style={{fontSize: "4rem"}}>
			{props.count}
			<button onClick={e => props.upd(1)}>同步加</button>
			<button onClick={e => props.upd(-1)}>同步减</button>
			<button onClick={e => props.updAsync(1, 1000)}>异步加</button>
			<button onClick={e => props.updAsync(-1, 1000)}>异步减</button>
		</div>
	);
}