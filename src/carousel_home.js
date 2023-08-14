import ReadMoreBtn from "./read_more_btn";

export default function CarouselHome() {
	/**
	 * slides[]: array of objects which will be dislpayed on the home page carousel
	 *slide_interval: time taken to switch contents automatically
	 */
	let slides = [
		{
			img_path: require("./img/carousel/pic2.jpg"),
			alt: "DRST improving healthcare img",
			heading: "IMPROVING HEALTH AND WELL-BEING",
			description: "Providing access to quality healthcare for all.",
		},
		{
			img_path: require("./img/carousel/pic3.jpg"),
			alt: "DRST PREVENTING HUMAN TRAFFICKING img",
			heading: "PREVENTING HUMAN TRAFFICKING",
			description:
				"Protecting the vulnerable and ensuring their rights are respected.",
		},
		{
			img_path: require("./img/carousel/pic4.jpg"),
			alt: "DRST ENDING VIOLENCE AGAINST WOMEN AND CHILDREN img",
			heading: "ENDING VIOLENCE AGAINST WOMEN AND CHILDREN",
			description: "Creating a safer and more just world for all.",
		},
		{
			img_path: require("./img/carousel/pic5.jpg"),
			alt: "DRST INVESTING IN EDUCATION",
			heading: "INVESTING IN EDUCATION",
			description: "Transforming lives through learning and development.",
		},
		{
			img_path: require("./img/carousel/pic6.jpg"),
			alt: "DRST INVESTING IN ECONOMIC EMPOWERMENT img",
			heading: "INVESTING IN ECONOMIC EMPOWERMENT",
			description:
				"Providing opportunities for sustainable growth and success.",
		},
		{
			img_path: require("./img/carousel/pic7.jpg"),
			alt: "DRST KIGOMA JOINT PROGRAMME PHASE II (KJP II) FOR ENHANCING RESILIENCE AND LIVELIHOOD OF COMMUNITIES LIVING IN KIGOMA REGION img",
			heading:
				"KIGOMA JOINT PROGRAMME PHASE II (KJP II) FOR ENHANCING RESILIENCE AND LIVELIHOOD OF COMMUNITIES LIVING IN KIGOMA REGION",
			description:
				"In joint program management and coordination with UN Resident Coordinator Tanzania (FAO, ILO, ITC, IOM, UNDP, UNICEF, UNHCR, UNESCO, UN WOMEN, UNFPA, UNIDO, UNCDF, UNEP, UN Habitat, WFP and WHO).",
		},
		{
			img_path: require("./img/carousel/pic8.jpg"),
			alt: "DRST CLIMATE JUSTICE AND RESILIENT img",
			heading: "CLIMATE JUSTICE AND RESILIENT",
			description:
				"Providing youth with knowledge and tools to raise awareness and promote progressive social change.",
		},
		{
			img_path: require("./img/carousel/pic9.jpg"),
			alt: "DRST DISABILITY INCLUSIVE img",
			heading:
				"DISABILITY INCLUSIVE COMMUNITY ENGAGEMENT FOR PREVENTION AND TREATMENT OF HIV, AND REDUCING STIGMA.",
			description:
				"To reduce stigma and discrimination in accessing HIV Health Care Services, disability inclusive.",
		},
		{
			img_path: require("./img/carousel/pic10.jpg"),
			alt: "CONGOLESE INFLUX",
			heading: "CONGOLESE INFLUX",
			description:
				"Mostly young men, boys, and girls, People with Special Needs (PSNs) with tiny children, and a few elderly people (generalized violence, ineffectiveness of governmental power, and youth targeting by all parties).",
		},
	];

	let slide_interval = 5000;

	return (
		<div id="CarouselDIV" className="carousel slide" data-bs-ride="carousel">
			<div className="carousel-inner">
				<div className="carousel-item active" data-bs-interval={slide_interval}>
					<img
						src={require("./img/carousel/pic1.jpg")}
						id="CarouselIMG"
						alt="EMPOWERING PEOPLE WITH SPECIAL NEEDS"
					></img>
					<div id="CarouselTextCard">
						<div className="card-body text-center">
							<p className="h2 mt-5">EMPOWERING PEOPLE WITH SPECIAL NEEDS</p>
							<p className="h5 mt-5">
								Helping those in need find their way to a brighter future
							</p>
							<div className="mt-5">
								<ReadMoreBtn link="https://drst.or.tz/what-we-do/" />
							</div>
						</div>
					</div>
				</div>

				{/* For each element, display the image, heading and description */}
				{slides.map((slide, i) => (
					<div
						className="carousel-item"
						data-bs-interval={slide_interval}
						key={i}
					>
						<img src={slide.img_path} id="CarouselIMG" alt={slide.alt}></img>
						<div id="CarouselTextCard">
							<div className="card-body text-center">
								<p className="h2 mt-5">{slide.heading.toUpperCase()}</p>
								<p className="h5 mt-5">{slide.description}</p>
								<div className="mt-5">
									<ReadMoreBtn link="https://drst.or.tz/what-we-do/" />
								</div>
							</div>
						</div>
					</div>
				))}
			</div>

			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#CarouselDIV"
				data-bs-slide="prev"
			>
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#CarouselDIV"
				data-bs-slide="next"
			>
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
}
