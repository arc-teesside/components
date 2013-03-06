// JavaScript Document

var table = function (ID) {

    this.id = ID;
    this.rows = 3;
    this.cols = 2;
    var _this = this;

    this.init = function () { 
	
		var tbl = document.getElementById(_this.id);
	
		for(var i=0;i<_this.rows;i++) {
		
			var row = tbl.insertRow(i);
			
			for(var j=0;j<_this.cols;j++) {
			
				var cell = row.insertCell(j);
				cell.className = "placeholder";
				cell.id = _this.id + i + j;
				
				cell.appendChild(document.createTextNode('\u00a0'));
			}
		}
	
	};

}