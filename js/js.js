// Navbar Fixed Change Color&bG //
$(function () {
    'use strict';
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.navbar').height()) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });
    // Deal With Tabs
    $('.tab-list li').click(function () {
        // Add Selected Class
        $(this).addClass('active').siblings().removeClass('active');
        // Hide All Div
        $('.tabs .tab-content > div').hide();
        // Show Div
        $($(this).data('class')).show();
    });
});
