var jars = [
	undefined,
	//pint jars
	21,
	32,
	34,
	39,
	40,
	41,
	55,
	75,
	84,
	88,
	104,
	109,
	119,
	121,
	134,
	193,
	208,
	240,
	255,
	336,
	337,
	394,
	//quart jars
	18,
	19,
	49,
	75,
	103,
	117,
	142,
	162,
	214,
	//mega jars
	231,
	1602,
];

document.getElementById("submit").onclick = function() {
	var guess = document.getElementById("guess").value;
	guess = parseInt(guess, 10);
	var jar = jars.indexOf(guess);
	if (jar === -1) {
		alert("incorrect guess");
	} else {
		if (jar >= 32) {
			alert("YOU WON A MEGA JAR!!!!!!!!");
		} else {
			alert("YOU WON JAR NUMBER " + String(jar) + "!!!");
		}
		delete jars[jar];
	}
	document.getElementById("guess").value = "";
};
