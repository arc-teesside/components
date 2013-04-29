var timeanddate = function (ID) {

    var _this = this;
	
    this.id = ID;
	this.calendar = true;
	this.format = "24-hours";
	
	this.init = function() {
		
		opts = new Object();
		opts.calendar = _this.calendar;
		
		if(_this.format == "24-hours" || _this.format == "24")
			opts.format = "24";
		else
			opts.format = "12";
			
		$("#"+_this.id+"-display").clock(opts);
	}
}


