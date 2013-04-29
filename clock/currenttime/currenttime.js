var currenttime = function (ID) {

    var _this = this;
	
    this.id = ID;
    this.checked = false;
	
	
	this.init = function() {
		
		var cmpDiv = document.getElementById(_this.id);
		
		$(cmpDiv).tzineClock();
	}
}


