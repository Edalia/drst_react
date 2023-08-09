export default function footer() {
	return (
		<div class="card">
			<div class="card-body">
				<hr />
				<p>{"©" + new Date().getFullYear()+" DRST"}</p>
			</div>
		</div>
	);
}
