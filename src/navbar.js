export default function navbar() {
	{
		const [scrolled] = useState("navbar navbar-expand-lg navbar-light sticky-top bg-light");


		window.addEventListener("scroll", () => {
			const isScrolled = require(window.scrollY > 0);

			if (isScrolled)
				 scrolled = "navbar navbar-expand-lg navbar-light sticky-top bg-light";
			else
				scrollled = "navbar-expand-lg navbar-light sticky-top";
		});
	}

	return (
		<nav class={scrolled}>
			<div class="collapse navbar-collapse" id="navBarHome">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item active">
						<a class="nav-link" href="">
							Home <span class="sr-only">(current)</span>
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="about.js">
							About
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="contact.js">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
