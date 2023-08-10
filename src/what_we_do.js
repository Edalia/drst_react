export default function what_we_do() {
	//projects[]: array of objects which will be dislpayed on the 'what we do panel'
	const projects = [
		{
			heading:
				"Social Protection Interventions for People with Special Needs (PWSNs)",
			description:
				"The social protection program focuses on providing support to people with special needs and adolescent girls and young women.",
		},
		{
			heading: "Actions to End Violence Against Women and Children (VAWC)",
			description:
				"The goal of this program is to create a safer and more just world for women and children by addressing and ending violence against them.",
		},
		{
			heading: "Economic Empowerment Related Activities",
			description:
				"The economic empowerment program aims to provide people with the opportunities and resources they need to achieve sustainable growth and success.",
		},
		{
			heading: "Improving Education",
			description:
				"The education program aims to transform lives through learning and development.",
		},
		{
			heading: "Improving Education",
			description:
				"The education program aims to transform lives through learning and development.",
		},
		{
			heading: "Improving Education",
			description:
				"The education program aims to transform lives through learning and development.",
		},
	];

	return (
		<div class="container text-center mt-5">
			<h2 class="">WHAT WE DO</h2>
			<div class="row">
				<div class="col mt-5">
					<img src={require("./img/drst1.jpg")} id="WhatWeDoIMG" alt=""></img>
				</div>
				<div class="col">
					<div class="grid text-center mt-5">
						{projects.map((project, i) => (
							<div class="g-col-6 projects" key={i}>
								<h5>{project.heading}</h5>
								<p>{project.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
