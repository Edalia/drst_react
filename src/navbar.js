import SiteLogo from "./site_logo.js";

export default function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg fixed-top bg-light" id="NavBarDIV">
			<div className="container-fluid">
				<SiteLogo />
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
				<div className="collapse navbar-collapse " id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<a
							className="nav-link"
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
							<p>Who We Are</p>
						</a>

						<a
							className="nav-link"
							id="NavBarLink"
							href="https://drst.or.tz/what-we-do/"
						>
							<p>What We Do</p>
						</a>

						<a
							className="nav-link"
							id="NavBarLink"
							href="https://drst.or.tz/our-projects/"
						>
							<p>Our Projects</p>
						</a>

						<a
							className="nav-link"
							id="NavBarLink"
							href="https://drst.or.tz/our-partners/"
						>
							<p>Our Partners</p>
						</a>

						<a
							className="nav-link"
							id="NavBarLink"
							href="https://drst.or.tz/contact-us/"
						>
							<p>Contact Us</p>
						</a>
					</div>
				</div>

				<div className="d-flex flex-row-reverse" id="MediaContactDIV">
					<a href="https://youtube.com/@drstanzania">
						<i className="bi bi-youtube"></i>
					</a>
					<a href="https://www.facebook.com/profile.php?id=100086490039454">
						<i className="bi bi-facebook"></i>
					</a>
					<a href="https://www.instagram.com/drstanzania/">
						<i className="bi bi-instagram"></i>
					</a>
					<a href="https://twitter.com/drs_tanzania">
						<i className="bi bi-twitter"></i>
					</a>
				</div>
			</div>
		</nav>
	);
}
