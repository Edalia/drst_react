export default function img_home() {
	let img = "./img/drst1.jpg";

	let slides = [
		{
			img_path: "./img/drst1.jpg",
			alt: "DRST",
			heading: "Economic Empowerment Related Activities",
			description:
				"The economic empowerment program aims to provide people with the opportunities and resources they need to achieve sustainable growth and success.",
			link: "",
		},
	];

	return (
		<div id="CarouselDiv">
			<img src={img} id="CarouselImg" alt={slides[0].alt}></img>
			<div id="CarouselCard">
				<div class="card-body text-center">
					<p class="h2 mt-5">{slides[0].heading}</p>
					<p class="h5 mt-5">{slides[0].description}</p>
					<a
						href={slides[0].link}
						class="btn btn-warning mt-5"
						id="ReadMoreBtn"
					>
						Read More
					</a>
				</div>
			</div>
		</div>
	);
}
