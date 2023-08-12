export default function What_we_do() {
	//projects[]: array of objects which will be dislpayed on the 'what we do panel'
	const projects = [
		{
			heading:
				"Social Protection Interventions for People with Special Needs (PWSNs)",
			description:
				"The social protection program focuses on providing support to people with special needs and adolescent girls and young women.",
			className: "bi bi-person-fill",
		},
		{
			heading: "Actions to End Violence Against Women and Children (VAWC)",
			description:
				"The goal of this program is to create a safer and more just world for women and children by addressing and ending violence against them.",
			className: "bi bi-slash-circle-fill",
		},
		{
			heading: "Economic Empowerment Related Activities",
			description:
				"The economic empowerment program aims to provide people with the opportunities and resources they need to achieve sustainable growth and success.",
			className: "bi bi-graph-up-arrow",
		},
		{
			heading: "Preventing Human Trafficking",
			description:
				"The human trafficking prevention program works to protect the vulnerable and ensure their rights are respected",
			className: "bi bi-slash-circle-fill",
		},
		{
			heading: "Improving Health",
			description:
				"The health program focuses on improving access to quality healthcare for all.",
			className: "bi bi-lungs-fill",
		},
		{
			heading: "Improving Education",
			description:
				"The education program aims to transform lives through learning and development.",
			className: "bi bi-book-fill",
		},
	];

	return (
		<div className="container mt-5" id="WhatWeDoDIV">
			<h2 className="text-center">WHAT WE DO</h2>
			<div className="container text-center mt-3">
				<p>
					Disability Relief Services (DRS) Tanzania is proud to work alongside
					our esteemed partners who share our vision of creating an inclusive
					and barrier-free society for people with disabilities in Tanzania.
				</p>
			</div>
			<div className="row mt-5">
				{/* <div className="col mt-5">
					<img src={require("./img/drst1.jpg")} id="WhatWeDoIMG" alt=""></img>
				</div> */}
				<div className="col">
					<div className="grid">
						{projects.map((project, i) => (
							<div className="g-col-4 projects" key={i}>
								<i className={project.className}>
									<h5>{project.heading}</h5>
								</i>
								<p>{project.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
