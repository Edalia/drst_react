export default function img_home() {
	let imgPath = require("./img/drst1.jpg");

	return (
		<div>
		<img
			src={imgPath}
			class="img-fluid w-100"
			id="carouselHome"
			alt="drst"
			></img>
		</div>
	);
}
