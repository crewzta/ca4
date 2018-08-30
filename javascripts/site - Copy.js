$(function() {
"use strict";
$(window).on('load', function () {
	// Check all tables. You may need to be more restrictive.
	$('table').each(function () {
		var element = $(this);
		// Create the wrapper element
		var scrollWrapper = $('<div />', {
			'class': 'table-showScroller',
			'html': '<div />' // The inner div is needed for styling
		}).insertBefore(element);
		// Store a reference to the wrapper element
		element.data('scrollWrapper', scrollWrapper);
		// Move the scrollable element inside the wrapper element
		element.appendTo(scrollWrapper.find('div'));
		// Check if the element is wider than its parent and thus needs to be scrollable
		if (element.outerWidth() > element.parent().outerWidth()) {
			element.data('scrollWrapper').addClass('has-scroll');
		}
		// When the viewport size is changed, check again if the element needs to be scrollable
		$(window).on('resize orientationchange', function () {
			if (element.outerWidth() > element.parent().outerWidth()) {
				element.data('scrollWrapper').addClass('has-scroll');
			} else {
				element.data('scrollWrapper').removeClass('has-scroll');
			}
			});
    });
});

	
	
		var mql = window.matchMedia("screen and (max-width: 768px)");
		  mediaqueryresponse(mql) ;// call listener function explicitly at run time
		  mql.addListener(mediaqueryresponse); // attach listener function to listen in on state changes

		  function mediaqueryresponse(mql) {
			if (mql.matches) {
			  $(".tabber").attr("data-toggle", "collapse");
			  $('.collapse').collapse("hide");
			} else {
			  $('.collapse').collapse("show");
			  $("[data-toggle='collapse']").removeAttr("data-toggle");
			}
		  }

	
});

