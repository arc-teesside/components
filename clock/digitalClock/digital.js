// JavaScript Document

var digitalClock = function (ID) {

    this.id = ID;
    this.startTime = 5;
	this.autoStart = false;
    var _this = this;

    this.init = function () {
		var ID = "#" + _this.id;
		
		var initUntil = 0;
		
		if(_this.autoStart)
			initUntil = _this.startTime * 60;
		
       $(ID + "-timerCountdown").countdown({
			until: initUntil,
			format: 'MS',
			onExpiry: _this.resetTimer
		});
	}
	
    this.launchCountdown = function () {
    	
    	_this.resetTimer();
    	 
    	var secondsVal = _this.startTime * 60;
		
        var ID = "#" + _this.id;
		$(ID + "-timerCountdown").countdown('change', {until: +secondsVal}); 
    };		
					
  	this.resetTimer = function () {
		var ID = "#" + _this.id;
		$(ID + "-timerCountdown").countdown('change', {until: 0}); 
    }
    
}