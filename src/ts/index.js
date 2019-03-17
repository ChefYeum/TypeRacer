var Typed = require('typed.js');
var Navbar = require('./imports/navbar')
// var Counters = require('./imports/counters')

// $('body').ready(function(){
// 	$("#code-input").keypress(function() {
// 		var keycode = (event.keyCode ? event.keyCode : event.which);
// 		if(keycode == '13'){
// 			send_line(event);
// 		}
// 	})
// })

// typed effect on spanner 1
$('body').ready(function(){
	var ui = $("#to-be-written");
	var input = $('#code-input');
	var lines;
	var started = false;
	var times = [];
	var nc;
	$('.lang-choice').click(function(){
		lang = $(this).text();
		// alert(lang)
		
		if(lang == "HTML") {
			ui.html($("#to-html").html());
		} else if(lang == "Haskell") {
			ui.html($("#to-haskell").html());
		} else if(lang == "Python") {
			ui.html($("#to-python").html());
		}
		// nc = ui.text().length;
		lines = ui.text().split('\n')//.map($.trim);
		$("#choice").hide();
		// alert(lines)
	});

	var line_on = 0

	// detect enter key
	$("#code-input").keypress(function() {
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if(keycode == '13'){
			send_line(event);
		} else if (!started) {
			timer();
			started = true;
		}
	})

	// handle other keys
	$("#code-input").keyup(function() {
		var keycode = (event.keyCode ? event.keyCode : event.which);

		// console.log( "Handler for '"
		// 	+ String.fromCharCode(keycode)
		// 	+ "' key called." );
		// console.log(keycode)

		// console.log(input.text())

		setUI();
	});

	function setUI() {
		var inp = input.text();
		var [i,n] = checkInp(lines[line_on]);
		var past_lines = "";
		if (lines.slice(0,line_on) != "") {
			past_lines  = "<span style='color:#0f0'>"
						+ addTime(lines.slice(0,line_on)
							           .map(escape))
						//    .join('\n')
			+ "</span>"
		}
		var active_line = "<span style='color:#0f0;'>"
		                + escape(lines[line_on].slice(0,i))
						+ "</span><span style='color:#f00;'>"
		                + escape(lines[line_on].slice(i,n))
						+ "</span>"
						// + "<span class='end-of-input'></span>"
						// + "<span style='color:#00f;'>|</span>"
		                + escape(lines[line_on].slice(n))
		if (inp.length > lines[line_on].length) {
			active_line += "<span style='color:#f00;'>"
						+ "█".repeat(inp.length - lines[0].length)
						+ "</span>"
		}
		active_line += "\n"
		var rest_lines = lines.slice(line_on+1)
							  .map(escape)
							  .join('\n')
		ui.html(past_lines + active_line + rest_lines)
	}

	function checkInp(string) {
		var input = $('#code-input');
		var inp = input.text();
		
		for (i = 0; i < inp.length; i++) {
			if (string[i] != inp[i]){
				return [i,inp.length];
			}
		}
		return [inp.length,inp.length]
	}
	
	function escape(str) {
		return str.replace(/\</g, '&lt;');
	}
	
	function send_line(ev) {
		var inp = input.text();
		var text = ui.text();
		if (inp == lines[line_on]) {
			ev.preventDefault();
			times.push({"min": minutes, "sec": seconds, "cents": cents})
			line_on ++;
			input.text("")
			nc = lines.slice(0,line_on).join('\n').length
			var cpm = Math.round(nc*60/(60*minutes+seconds+Math.round(cents/100)))
			// console.log(nc)
			// console.log(minutes);
			// console.log(seconds)
			if (line_on != lines.length){
				lpm.text(cpm);

				setUI();
			} else {
				console.log("won")
				clearTimeout(t);
				p.css("font-size", "30px");
				p.css("color", "#f00");
				ui.html(lines.map(escape).join('\n'));
				w3CodeColor();
			}
		} else {
			ev.preventDefault();
			// input.text(inp.slice(0));
		}
	}

	function addTime(lines) {
		var ret = "";
		for (i = 0; i < line_on; i++) {
			var time = times[i];
			min = time["min"];
			sec = time["sec"];
			cent = time["cents"];
			console.log(lines[i])
			ret += lines[i]
				 + "<span class='w3-right cron'>"
			 + ((min ? (min > 9 ? min : "0" + min) : "00")
			 + ":" + (sec > 9 ? sec : "0" + sec))
			 + "." + (cent > 9 ? cent : "0" + cent)
			 + "</span>\n"
		}
		return ret;
	}
});

var p = $('#fulltime'),
	lpm = $('#lpm'),
	cents=0, seconds = 0, minutes = 0,
	t;

function add() {
	cents++;
	if (cents >= 100) {
		cents = 0;
		seconds++;
		if (seconds >= 60) {
			seconds = 0;
			minutes++;
		}
	}
	p.text(((minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00")
			 + ":" + (seconds > 9 ? seconds : "0" + seconds))
			 + "." + (cents > 9 ? cents : "0" + cents));
	timer();
}

function timer() {
	t = setTimeout(add, 10);
}

// /* Stop button */
// stop.onclick = function() {
// 	clearTimeout(t);
// }

// /* Clear button */
// clear.onclick = function() {
// 	h1.textContent = "00:00:00";
// 	seconds = 0; minutes = 0; hours = 0;
// }