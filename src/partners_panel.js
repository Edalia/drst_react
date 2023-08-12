export default function Partners_panel() {
	//obj array to add partner details
	let partners = [
		{
			img: require("./img/drc-logo.png"),
			link: "https://drc.ngo/",
			alt: "https://drc.ngo/",
		},
		{
			img: require("./img/helpage-international-logo.png"),
			link: "https://www.helpage.org/",
			alt: "https://www.helpage.org/",
		},
		{
			img: require("./img/oxfam-logo.png"),
			link: "https://www.oxfam.org.uk/",
			alt: "https://www.oxfam.org.uk/",
		},
		{
			img: require("./img/unhcr-logo.png"),
			link: "https://www.unrefugees.org/",
			alt: "https://www.unrefugees.org/",
		}
	];

	return (
		<div className="container-fluid text-center mt-5" id="PartnersDiv">
			<h2 className="mt-4">OUR PARTNERS</h2>
			<div className="container mt-3">
				<p>
					Disability Relief Services (DRS) Tanzania is proud to work alongside
					our esteemed partners who share our vision of creating an inclusive
					and barrier-free society for people with disabilities in Tanzania.
				</p>
			</div>
			<div className="container d-flex justify-content-center">
				<div className="row">
					{partners.map((partner, i) => (
						<div className="card mt-5" key={i}>
							<div className="card-body">
								<a href={partner.link}>
									<img src={partner.img} alt={partner.alt}></img>
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
