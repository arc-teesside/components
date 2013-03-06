// JavaScript Document for component
// change 'blankComponent' to match component className
var mulberrysvg = function (ID) {
	
	this.id = ID;
	this.text = "";
	this.src = "";
	this.size = 64;
	this.root = "http://arc.tees.ac.uk/WIDEST/Media/SVG_MulberyEN3v1/";
	var _this = this;
	
	this.init = function() {};
	
	this.change = function() {
		var ID = "#" + _this.id;
        $(ID+"-img").attr("alt", _this.text);
		$(ID+"-img").attr("src", _this.root + _this.src + ".svg");
		$(ID+"-img").height(_this.size);
		$(ID+"-img").width(_this.size)
	}
}
