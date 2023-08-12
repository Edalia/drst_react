import Sitelogo from "./logo";

export default function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg fixed-top bg-light" id="NavBarDIV">
			<div className="container-fluid">
				<Sitelogo />
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<a
							className="nav-link active"
							aria-current="page"
							id="NavBarLink"
							href="https://drst.or.tz/"
						>
							<p>Home</p>
						</a>
						<a
							className="nav-link"
							id="NavBarLink"
							href="https://drst.or.tz/about-us/"
						>
							<p>About Us</p>
						</a>
						<a
							className="nav-link"
							id="NavBarLink"
							href="https://drst.or.tz/contact-us/"
						>
							<p>Contact</p>
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}
