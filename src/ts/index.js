var Typed = require('typed.js');
var Navbar = require('./imports/navbar')
var Counters = require('./imports/counters')

// typed effect on spanner 1
$('body').ready(function(){
	$("#code-input").keypress(function() {
		console.log( "Handler for .keypress() called." );
		var array = $("#to-be-written").text().split('');
		alert(array)
	});
});

w3CodeColor();