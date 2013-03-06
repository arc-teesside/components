
var sound = function (ID) {
	
	this.id = ID;
	this.text = "";
	this.src = "";
	this.root = "http://arc.tees.ac.uk/WIDEST/Media/Sound/";
	var _this = this;
	
	this.init = function() {};
	
	this.change = function() {
	    var ID = "#" + _this.id;
        $(ID+"-text").attr("alt", _this.text);
		$(ID+"-audio").attr("src", _this.root + _this.src + ".wav");
	};
	
	// play sound
	this.play = function() {
		var ID = "#" + _this.id;
		$(ID+"-audio").get(0).play();
	}
	
	this.pause = function() {
		var ID = "#" + _this.id;
		$(ID+"-audio").get(0).pause();
	}
	
// Further functions here (actions in cdlmanifest.json)
}
