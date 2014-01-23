jQuery( function( $ ) {
	$( '.flexslider' ).flexslider({
		slideshow:      false,
		animation:      'fade',
		controlNav:     false,
		prevText:       '&#8249;',
		nextText:       '&#8250;',
		slideshowSpeed: '14000',
		animateHeight:  true
	});

	$( '.minislides .carousel' ).flexslider({
		animation:     'slide',
		slideshow:     false,
		animationLoop: false,
		itemWidth:     62,
		itemHeight:    62,
		directionNav:  true,
		controlNav:    false,
		prevText:      '&#8249;',
		nextText:      '&#8250;',
		animationLoop: false,
	  });
} );


( function( $ ) {

	// Code inside here only fires when the DOM is ready
	$( document ).on( 'ready', function() {

		var masthead = $( '#masthead' );
		var maindiv = $( '#main' );

		if ( !! masthead.offset() ) {

			var mastheadStickyTop = masthead.offset().top;
			var mastheadTopGap    = 0;
			var isIframed = (window.location != window.parent.location) ? true : false;
			var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);

			if ( $( 'body' ).hasClass('logged-in') && !isIframed && !isMobile ) {
				mastheadTopGap    = 32;
			}

			$( window ).on( 'scroll', false, function() {

				var windowTop = $( window ).scrollTop();

				if ( windowTop > mastheadStickyTop - mastheadTopGap ) {
					masthead.css( { position: 'fixed', top: mastheadTopGap } );
					maindiv.css( { marginTop: masthead.height() + 52 } );
				} else {
					masthead.css( { position: 'relative', top: 'auto' } );
					maindiv.css( { marginTop: 0 } );
				}
			});
		}

	});

} ) ( jQuery );
