var defaults = {
	selector: '[data-adaptive-background="1"]',
	parent: null,
	normalizeTextColor: false,
	normalizedTextColors: {
		light: "#fff",
		dark: "#000"
	},
	lumaClasses: {
		light: "ab-light",
		dark: "ab-dark"
	}
};

$(document).ready( function() {
	$.adaptiveBackground.run( defaults )
});