import SiteLogo from "./site_logo.js";

export default function Footer() {
	return (
		<div className=" container-fluid mt-5" id="FooterDIV">
			<div className=" container">
				<br />
				<SiteLogo />
				<p className="mt-2">
					A nonprofit making organization dealing with improvement of
					socio-economic condition in vulnerable, marginalized and deprived
					communities in Tanzania.
				</p>
				<p>
					<i className="bi bi-geo-alt-fill"></i> Kasulu Town Murubona Area
					Kigoma, Tanzania
				</p>
				<p>
					<i className="bi bi-telephone-fill"></i> +255 620 583 841
				</p>
				<p>
					<i className="bi bi-envelope-at-fill"></i> info@drst.or.tz
				</p>

				<hr />

				<p className="text-center">
					{"©" + new Date().getFullYear() + "	DRST. All Rights Reserved"}
				</p>
			</div>
		</div>
	);
}
