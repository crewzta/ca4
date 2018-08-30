$(document).ready(function () {
    $(window).on('load', function () {
        AddScrollBar();
    });

    $(window).on('resize orientationchange', function () {
        $('table').each(function () {
            var element = $(this);
            if (element.outerWidth() > element.parent().outerWidth()) {
                element.data('scrollWrapper').addClass('has-scroll');
            } else {
                element.data('scrollWrapper').removeClass('has-scroll');
            }
        });
    });




    var mql = window.matchMedia("screen and (max-width: 768px)");
    mediaqueryresponse(mql);// call listener function explicitly at run time
    mql.addListener(mediaqueryresponse); // attach listener function to listen in on state changes

    function mediaqueryresponse(mql) {
        if (mql.matches) {
            $(".tabber").attr("data-toggle", "collapse");
            $('.collapse').collapse("hide");
        } else {
            $('.collapse').collapse("show");
            $("[data-toggle='collapse-footer']").removeAttr("data-toggle");
        }
    }

});



function AddScrollBar() {
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
    });

}








/*!
 * Start Bootstrap - SB Admin 2 v3.3.7+1 (http://startbootstrap.com/template-overviews/sb-admin-2)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */
$(function() {
    $('#side-menu').metisMenu();
});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    $(window).bind("load resize", function() {
        var topOffset = 50;
        var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        var height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    var url = window.location;
    // var element = $('ul.nav a').filter(function() {
    //     return this.href == url;
    // }).addClass('active').parent().parent().addClass('in').parent();
    var element = $('ul.nav a').filter(function() {
        return this.href == url;
    }).addClass('active').parent();

    while (true) {
        if (element.is('li')) {
            element = element.parent().addClass('in').parent();
        } else {
            break;
        }
    }
});
