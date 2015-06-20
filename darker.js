function darker(val) {
	var r = parseInt("0x" + val.substr(0, 2)),
		g = parseInt("0x" + val.substr(2, 2)),
		b = parseInt("0x" + val.substr(4, 2));


	return Math.floor(r / 2).toString(16) + Math.floor(g / 2).toString(16) + Math.floor(b / 2).toString(16);
}