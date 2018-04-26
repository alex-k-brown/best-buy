'use strict';

// Header JS

function loadSocial() {
	
	// Add social icons, pulling from data.js
	data.social.forEach(function(icon, n) {
		$('#social').append('<a href="' + icon.url + '" target="_blank" class="social-icon ' + icon.name + '"></a>')
	});

	// Add close button after social icons
	$('#social').append('<div id="closed" class="close"></div>');
};

loadSocial();

function menu() {
	$('#social').toggleClass('closed');
};

$('#closed').on('click', menu);