var paging = function (ID) {
	
	this.id = ID;
	this.nbPage = 3;
	this.defaultPage = 1;
	this.activePage = 1;
	
	var _this = this;
	
	this.init = function() {
			
			if(0 < _this.defaultPage <= _this.nbPage) {
				$("#"+_this.id+"-page"+_this.defaultPage).removeClass("inactivePage");
				$("#"+_this.id+"-page"+_this.defaultPage).addClass("activePage");
				_this.activePage = _this.defaultPage;
			} else {
				$("#"+_this.id+"-page1").removeClass("inactivePage");
				$("#"+_this.id+"-page1").addClass("activePage");
				_this.activePage = 1;
			}
			
			$("#"+_this.id+"-activePage").html(_this.activePage);
			
			var hashNum = top.window.location.hash.split('#')[1];
			
			console.log('##### window.location.hash', top.window.location);
			if(_this.isNumber(hashNum)) {
				if(0 < hashNum <= _this.nbPage) {
					_this.goToPage(hashNum);
				}
			}
			
	}
	
	this.next = function() {
		if((_this.activePage+1) <= _this.nbPage) {
		
			$("#"+_this.id+"-page"+_this.activePage).removeClass("activePage");
			$("#"+_this.id+"-page"+_this.activePage).addClass("inactivePage");
			
			_this.activePage = _this.activePage+1;
			
			
			$("#"+_this.id+"-page"+_this.activePage).removeClass("inactivePage");
			$("#"+_this.id+"-page"+_this.activePage).addClass("activePage");
			$("#"+_this.id+"-activePage").html(_this.activePage);
		}
	}
	
	this.previous = function() {
		
		if((_this.activePage-1) > 0) {
		
			$("#"+_this.id+"-page"+_this.activePage).removeClass("activePage");
			$("#"+_this.id+"-page"+_this.activePage).addClass("inactivePage");
			
			_this.activePage = _this.activePage-1;
			
			
			$("#"+_this.id+"-page"+_this.activePage).removeClass("inactivePage");
			$("#"+_this.id+"-page"+_this.activePage).addClass("activePage");
			$("#"+_this.id+"-activePage").html(_this.activePage);
		}
		
	}
	
	this.goToPage = function(pageNumber) {
		
		if(0 < pageNumber <= _this.nbPage) {
		
			$("#"+_this.id+"-page"+_this.activePage).removeClass("activePage");
			$("#"+_this.id+"-page"+_this.activePage).addClass("inactivePage");
			
			_this.activePage = pageNumber;
			
			top.window.location.hash = pageNumber;
			
			$("#"+_this.id+"-page"+_this.activePage).removeClass("inactivePage");
			$("#"+_this.id+"-page"+_this.activePage).addClass("activePage");
			$("#"+_this.id+"-activePage").html(_this.activePage);
		}
		
	}
	
	this.isNumber = function(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}
    
}


