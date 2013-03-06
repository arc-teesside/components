// JavaScript Document

var todoTable = function (ID) {
	
	this.id = ID;
	this.inputText = "";
	var _this = this;
	
	this.init = function() {
	
	}

	this.addRowComplete = function() {
				
		var textbox1 = _this.inputText;
	
		_this.inputText = "";
	
		var table = document.getElementById(_this.id + "-table");
	
		var rowCount = table.rows.length;
	
		var row = table.insertRow(rowCount);
	
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		
    	var elem1 = document.createElement("input");
    	var elem2 = document.createTextNode(textbox1);
		cell2.style.textAlign = "left";
    	
		var linkDelete = document.createElement("a");
		linkDelete.id = _this.id +"-delLink";
		linkDelete.onclick=_this.deleteRow;
		
		var imgDelete = document.createElement("img");
		imgDelete.id = _this.id +"-delImg";
		imgDelete.style.border = "none";
		imgDelete.src = "http://arc.tees.ac.uk/WIDEST/Widget/components/todo/todoTable/delete.png";
		imgDelete.alt = "Delete row";
		
		linkDelete.appendChild(imgDelete);
		
		elem1.type = "checkbox";
    	elem1.id = _this.id + "-one";
        		
    	cell1.appendChild(elem1);
    	cell2.appendChild(elem2);
    	cell3.appendChild(linkDelete);
        		     		
	}
	
	this.deleteRow = function(e) {
						
		var table = document.getElementById(_this.id + "-table");
		var deletedRow;
		
		if(!this.parentNode) {
			deletedRow = table.rows.length - 1;
		} else {
			deletedRow = this.parentNode.parentNode.rowIndex;
		}

		table.deleteRow(deletedRow);	

					
	}


     		
}
