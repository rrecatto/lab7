'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
    $('button').click(function() {
        console.log('here');
        ga("send", "event", 'like', 'click');
    });
}

