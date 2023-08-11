import React, { useState } from "react";

export default function Scrollup() {
	let [isDisplayed, setIsDisplayed] = useState(false);

	//When the user scrolls down 20px from the top of the document, show the button
	window.onscroll = function () {
		scrollFunction();
	};

	//if document is scrolled 100px display the button, else hide button
	function scrollFunction() {
		if (
			document.body.scrollTop > 100 ||
			document.documentElement.scrollTop > 100
		) {
			//scrolled
			setIsDisplayed(true);
		} else {
			//hide
			setIsDisplayed(false);
			console.log("hidden");
		}
	}

	// When the user clicks on the button, scroll to the top of the document
	function sent_to_top() {
		window.scrollTo({
			top: 0,
			behavior: "smooth", // smooth scrolling
		});
	}

	return (
		<div>
			<span
				onClick={sent_to_top}
				id="ScrollUpBtn"
				title="Go to top"
				class="bi bi-arrow-up-circle-fill"
				style={{ display: isDisplayed ? "block" : "none" }}
			></span>
		</div>
	);
}
