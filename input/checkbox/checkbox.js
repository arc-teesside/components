var checkbox = function (ID) {

    var _this = this;
	
    this.id = ID;
    this.checked = false;
	this.onTickAction = false;
	this.onUntickAction = false;
	
	this.init = function() {
		
		var chk = document.getElementById(_this.id+'-chk');
		
		if(_this.checked) {
			chk.checked = true;
		}
		
		//chk.onclick = _this.clickHandler
		
	};
	
	this.clickHandler = function(e) {
		var chk = document.getElementById(_this.id+'-chk');
		if(chk.checked) {
			//action(_this.onTickAction);
		} else {
			//action(_this.onUntickAction);
		}
	};
}


