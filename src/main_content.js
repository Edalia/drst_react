import CarouselHome from "./carousel_home.js";
import PartnersPanel from "./partners_panel.js";
import NavBar from "./navbar.js";
import WhatWeDo from "./what_we_do.js";
import ScrollUp from "./scroll_up.js";
import HomeMap from "./home_map.js";
import WhoAreWe from "./who_are_we.js";

export default function MainContent() {
	return (
		<div>
			<NavBar />
			<CarouselHome />
			<WhoAreWe />
			<WhatWeDo />
			<ScrollUp />
			<PartnersPanel />
			<HomeMap />
		</div>
	);
}
