import ImgHome from "./img_home.js";
import PartnersPanel from "./partners_panel.js";
import NavBar from "./navbar.js";
import WhatWeDo from "./what_we_do.js";

export default function main_content() {
	return (
		<div>
			<NavBar />
			<ImgHome />
			<WhatWeDo />
			<PartnersPanel />
		</div>
	);
}
