import Sitelogo from "./logo";

export default function Navbar() {
	return (
		<nav class="navbar navbar-expand-lg fixed-top bg-light">
			<div class="container-fluid">
				<Sitelogo />
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div class="navbar-nav">
						<a
							class="nav-link active"
							aria-current="page"
							href="https://drst.or.tz/"
						>
							Home
						</a>
						<a class="nav-link" href="https://drst.or.tz/our-partners/">
							About
						</a>
						<a class="nav-link" href="https://drst.or.tz/contact-us/">
							Contact
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}
