"use strict";

/* 
     
*/

var THEME = {};

function window_resize() = {};

THEME.window_resize = $(function() {
    $('.content-main').removeClass('content-bottom-normal').removeClass('content-bottom-narrow');
    if(window.innerWidth < 768) {
        //$('.content-main').removeClass('content-bottom-normal').addClass('content-bottom-narrow');
    } else {
        //$('.content-main').removeClass('content-bottom-narrow').addClass('content-bottom-normal');
    };
    window_resize();
});