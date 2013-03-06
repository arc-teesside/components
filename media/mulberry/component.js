// JavaScript Document for component
// change 'blankComponent' to match component className
var mulberry = function (ID) {
	
	this.id = ID;
	this.text = "";
	this.src = "";
	this.root = "http://arc.tees.ac.uk/WIDEST/Media/PNG_MulberryEN3v1/";
	var _this = this;
	
	this.init = function() {
	    var ID = "#" + _this.id;
        $(ID+"-img").attr("alt", _this.text);
		$(ID+"-img").attr("src", _this.root + _this.src + ".png");
	}
// Further functions here (actions in cdlmanifest.json)

}
