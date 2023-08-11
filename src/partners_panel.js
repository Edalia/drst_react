export default function Partners_panel() {
	//obj array to add partner details
	let partners = [
		{
			img: require("./img/drc-logo.png"),
			link: "https://drc.ngo/",
		},
		{
			img: require("./img/helpage-international-logo.png"),
			link: "https://www.helpage.org/",
		},
		{
			img: require("./img/oxfam-logo.png"),
			link: "https://www.oxfam.org.uk/",
		},
		{
			img: require("./img/unhcr-logo.png"),
			link: "https://www.unrefugees.org/",
		},
	];

	return (
		<div class="container-fluid text-center mt-5" id="PartnersDiv">
			<h2 class="mt-4">OUR PARTNERS</h2>
			<div class="container d-flex justify-content-center">
				<div class="row">
					{partners.map((partner, i) => (
						<div class="card mt-5" key={i}>
							<div class="card-body">
								<a href={partner.link}>
									<img src={partner.img}></img>
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
