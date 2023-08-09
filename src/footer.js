export default function footer() {
	return (
			<div class="card mt-5">
				<div class="card-body">
					<hr />
					<p>{"©" + new Date().getFullYear() + "	DRST. All Rights Reserved"}</p>
				</div>
			</div>
	);
}
