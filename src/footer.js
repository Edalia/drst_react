import Sitelogo from "./logo";

export default function Footer() {
	return (
		<div class=" container mt-5">
			<Sitelogo />
			<p>
				A nonprofit making organization dealing with improvement of
				socio-economic condition in vulnerable, marginalized and deprived
				communities in Tanzania.{" "}
			</p>
			<p>
				<i class="bi bi-geo-alt-fill"></i> Kasulu Town Murubona Area Kigoma,
				Tanzania
			</p>
			<p>
				<i class="bi bi-telephone-fill"></i> +255 620 583 841
			</p>
			<p>
				<i class="bi bi-envelope-at-fill"></i> info@drst.or.tz
			</p>

			<hr />

			<p class="text-center">
				{"©" + new Date().getFullYear() + "	DRST. All Rights Reserved"}
			</p>
		</div>
	);
}
