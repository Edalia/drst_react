export default function Img_home() {
	/**
	 * slides[]: array of objects which will be dislpayed on the home page carousel
	 *slide_interval: time taken to switch contents automatically
	 */
	let slides = [
		{
			img_path: require("./img/drst2.jpg"),
			alt: "DRST economic empowerment img",
			heading: "Economic Empowerment Related Activities",
			description:
				"The economic empowerment program aims to provide people with the opportunities and resources they need to achieve sustainable growth and success.",
			link: "",
		},
		{
			img_path: require("./img/drst3.jpg"),
			alt: "DRST improving healthcare img",
			heading: "IMPROVING HEALTH AND WELL-BEING",
			description: "Providing access to quality healthcare for all.",
			link: "",
		},
	];

	let slide_interval = 5000;

	return (
		<div id="CarouselDIV" class="carousel slide" data-bs-ride="carousel">
			<div class="carousel-inner">
				<div class="carousel-item active" data-bs-interval={slide_interval}>
					<img
						src={require("./img/drst1.jpg")}
						id="CarouselIMG"
						alt="DRST special needs img"
					></img>
					<div id="CarouselCard">
						<div class="card-body text-center">
							<p class="h2 mt-5">EMPOWERING PEOPLE WITH SPECIAL NEEDS</p>
							<p class="h5 mt-5">
								Helping those in need find their way to a brighter future
							</p>
							{/* <a href="" class="btn btn-warning mt-5" id="ReadMoreBtn">
								Read More
							</a> */}
						</div>
					</div>
				</div>

				{/* For each element, display the image, heading and description */}
				{slides.map((slide, i) => (
					<div class="carousel-item" data-bs-interval={slide_interval} key={i}>
						<img src={slide.img_path} id="CarouselIMG" alt={slide.alt}></img>
						<div id="CarouselCard">
							<div class="card-body text-center">
								<p class="h2 mt-5">{slide.heading.toUpperCase()}</p>
								<p class="h5 mt-5">{slide.description}</p>
								<a
									href={slide.link}
									class="btn btn-warning mt-5"
									id="ReadMoreBtn"
								>
									Read More
								</a>
							</div>
						</div>
					</div>
				))}
			</div>

			<button
				class="carousel-control-prev"
				type="button"
				data-bs-target="#CarouselDIV"
				data-bs-slide="prev"
			>
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Previous</span>
			</button>
			<button
				class="carousel-control-next"
				type="button"
				data-bs-target="#CarouselDIV"
				data-bs-slide="next"
			>
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Next</span>
			</button>
		</div>
	);
}
