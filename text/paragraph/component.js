// JavaScript Document for paragraph
var paragraph = function (ID) {
	
	this.id = ID;
	this.text = "";
	this.fontSize = null;
	// further attributes here (attributes in cdlmanifest.json)
	
	var _this = this;
	
	this.init = function() {
	    var ID = "#" + _this.id;
        $(ID+"-text").text(_this.text);
		if(_this.fontSize) {
			$(ID+"-text").css("font-size", _this.fontSize+"px");
		}
	}
// Further functions here (actions in cdlmanifest.json)

}
