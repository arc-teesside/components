// JavaScript Document for paragraph
var paragraph = function (ID) {
	
	this.id = ID;
	this.text = "";
	// further attributes here (attributes in cdlmanifest.json)
	
	var _this = this;
	
	this.init = function() {
	    var ID = "#" + _this.id;
        $(ID+"-text").text(_this.text);
	}
// Further functions here (actions in cdlmanifest.json)

}
