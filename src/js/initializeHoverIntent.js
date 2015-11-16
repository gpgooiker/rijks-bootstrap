;if (typeof jQuery === 'undefined') {
  console.warn('Superfish requires jQuery to run');
} else {
	jQuery(function () {
		jQuery('ul.sf-menu').superfish();
	});
}