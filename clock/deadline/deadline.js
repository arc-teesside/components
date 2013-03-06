// JavaScript Document

var deadline = function (ID) {

    this.id = ID;
	this.day = 0;
	this.month = "january";
	this.year = 2013;
	this.time = '01:00';
	this.displayText = true;
    var _this = this;

    this.init = function () {
		var ID = "#" + _this.id;
		
		var newYear = new Date(); 
		
		if(_this.day == 0) {
			newYear = new Date(newYear.getFullYear() + 1, 1 - 1, 1); 
		} else {
			newYear = new Date(_this.month+' '+_this.day+', '+_this.year+' '+_this.time); 
		}
		if(_this.displayText)
			$(ID + "-deadlineText").text('Deadline: '+newYear.toUTCString().substr(0,22));
		$(ID + "-deadlineCountdown").countdown('destroy');
		$(ID + "-deadlineCountdown").countdown({until: newYear});
	};
	
	this.startCountdown = function() {
		var ID = "#" + _this.id;
		
		var newYear = new Date(); 
		
		if(_this.day == 0) {
			newYear = new Date(newYear.getFullYear() + 1, 1 - 1, 1); 
		} else {
			newYear = new Date(_this.month+' '+_this.day+', '+_this.year+' '+_this.time); 
		}
		if(_this.displayText)
			$(ID + "-deadlineText").text('Deadline: '+newYear.toUTCString().substr(0,22));
		$(ID + "-deadlineCountdown").countdown('destroy');
		$(ID + "-deadlineCountdown").countdown({until: newYear});
	};
    
}