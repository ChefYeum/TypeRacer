var Typed = require('typed.js');
var Navbar = require('./imports/navbar')
// var Counters = require('./imports/counters')

// typed effect on spanner 1
$('body').ready(function(){
	$("#code-input").keypress(function() {
		console.log( "Handler for .keypress() called." );
		var text = $("#to-be-written")
						.text().replace(/\t/g, '');
		// alert(text)

		var strings = text.split('\n')
		var dead = strings.shift()
		
		strings = strings.map($.trim)//.split('');
		alert(strings)
	});
});

function checkTab(ele) {
	ele != '\t';
}

// w3CodeColor();