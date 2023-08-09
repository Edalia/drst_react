export default function main_content() {
	let imgPath = require("./img/drst1.jpg");

	return (
		<img
			src={imgPath}
			class="img-fluid w-100"
			id="carouselHome"
			alt="drst"
		></img>
	);
}
