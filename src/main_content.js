import ImgHome from "./img_home.js";
import PartnersPanel from "./partners_panel.js";
import NavBar from "./navbar.js";
import WhatWeDo from "./what_we_do.js";
import Scrollup from "./scrollup.js";
import HomeMap from "./home_map.js";

export default function Main_content() {
	return (
		<div>
			<NavBar />
			<ImgHome />
			<WhatWeDo />
			<Scrollup />
			<PartnersPanel />
			<HomeMap />
		</div>
	);
}
