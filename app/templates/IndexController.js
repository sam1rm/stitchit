var IndexController = can.Control({
	init: function(element, options) {
		var self = this,
			OwlOptions = {
				items: 1,
				singleItem: true,
				mouseDrag: false,
				stopOnHover: true,
				autoPlay: 10000
			};
		self.element.html(can.view('/javascripts/views/index.mustache', {}, {}));
		$('#press_quotes').owlCarousel(OwlOptions);
	}
});