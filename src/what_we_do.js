export default function what_we_do() {
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
	];

	return (
		<div class="container px-4 text-center mt-5">
			<h2 class="">What we do</h2>
			<div class="grid text-center mt-5">
				{projects.map((project, i) => (
					<div class="g-col-6 projects" key={i}>
						<h5>{project.heading}</h5>
						<p>{project.description}</p>
					</div>
				))}
			</div>
		</div>
	);
}
