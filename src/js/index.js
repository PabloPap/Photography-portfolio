/* eslint-disable func-names */

'use strict';

var baguetteBox = require('baguettebox.js');
require('picturefill');
window.jQuery = require('jquery');

(function($) {
  $(function() {
    // Avoid `console` errors in browsers that lack a console.
    var method;
    var noop = function() {};
    var methods = [
      'assert',
      'clear',
      'count',
      'debug',
      'dir',
      'dirxml',
      'error',
      'exception',
      'group',
      'groupCollapsed',
      'groupEnd',
      'info',
      'log',
      'markTimeline',
      'profile',
      'profileEnd',
      'table',
      'time',
      'timeEnd',
      'timeline',
      'timelineEnd',
      'timeStamp',
      'trace',
      'warn',
    ];
    var length = methods.length;

    // eslint-disable-next-line no-self-assign
    var console = (window.console = window.console) || (window.console = {});

    while (length) {
      length -= length;
      method = methods[length];

      // Only stub undefined methods.
      if (!console[method]) {
        console[method] = noop;
      }
    }

    // reuse header and footer across pages
    $('#header-L1').load('header-L1.html');
    $('#header-L2').load('../header-L2.html');
    $('#header-L3').load('../../header-L3.html');
    $('#footer').load('footer.html', function() {
      // add dynamic year to footer
      $('#year').text(new Date().getFullYear());
    });
    $('#footer-L2').load('../footer.html', function() {
      // add dynamic year to footer
      $('#year').text(new Date().getFullYear());
    });
    $('#footer-L3').load('../../footer.html', function() {
      // add dynamic year to footer
      $('#year').text(new Date().getFullYear());
    });

    baguetteBox.run('.gallery', {
      overlayBackgroundColor: 'rgba(57,57,57,0.8)',
    });

    $('input,textarea')
      .focus(function() {
        $(this)
          .data('placeholder', $(this).attr('placeholder'))
          .attr('placeholder', '');
      })
      .blur(function() {
        $(this).attr('placeholder', $(this).data('placeholder'));
      });
  });
})(jQuery);
