var pagelayout = function(ID) {
	this.id = ID;
	this.nbPage = 3;
	var _this= this;
	
	this.init = function() {
		$("#"+_this.id+"-slides").slides({
			pagination: true
		});
	};
	
	this.nextPage = function() {
		
	};
	
	this.prevPage = function() {
	
	};
}
