var twochoicesquiz = function (ID) {

    var _this = this;
	
    this.id = ID;
    this.symbol = "";
	this.question = "";
	this.right = "";
	this.wrong = "";
	this.row = false;
	this.width = 64;
	
	this.init = function() {
		
		var tbl = document.getElementById(_this.id+'-tbl');
		
		var rowCount = tbl.rows.length;
	
		var row = tbl.insertRow(rowCount);
		_this.row = row;
		row.style.verticalAlign = "middle";
		var cell1 = row.insertCell(0);
		cell1.style.textAlign = "center";
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		
		// Question Cell
		if(_this.symbol != "") {
			var imgSymbol = document.createElement("img");
			imgSymbol.id = _this.id +"-symbol";
			imgSymbol.style.border = "none";
			imgSymbol.style.width = _this.width+"px";
			imgSymbol.src = "http://arc.tees.ac.uk/WIDEST/Media/PNG_MulberryEN3v1/"+_this.symbol+".png";
			imgSymbol.alt = _this.symbol;
			cell1.appendChild(imgSymbol);
			cell1.appendChild(document.createElement("br"));
		}
		if(_this.question != "") {
			var elemQ = document.createTextNode(_this.question);
			cell1.appendChild(elemQ);
		}
		if(_this.symbol == "" && _this.question == "") {
			var elemNQ = document.createTextNode("Define Question");
			cell1.appendChild(elemNQ);
		}
		
		var iconR = false;
		var iconW = false;
		
		switch(_this.right) {
			case "Valid tick":
				iconR = document.createElement("img");
				iconR.id = _this.id +"-iconR";
				iconR.style.border = "none";
				iconR.style.width = "48px";
				iconR.src = "http://arc.tees.ac.uk/WIDEST/Media/valid-icon.png";
				iconR.alt = "Yes";
				break;
			case "Happy smiley":
				iconR = document.createElement("img");
				iconR.id = _this.id +"-iconR";
				iconR.style.border = "none";
				iconR.style.width = "48px";
				iconR.src = "http://arc.tees.ac.uk/WIDEST/Media/smile-icon.png";
				iconR.alt = "Yes";
				break;
			case "Invalid tick":
				iconR = document.createElement("img");
				iconR.id = _this.id +"-iconR";
				iconR.style.border = "none";
				iconR.style.width = "42px";
				iconR.src = "http://arc.tees.ac.uk/WIDEST/Media/invalid-icon.png";
				iconR.alt = "No";
				break;
			case "Sad smiley":
				iconR = document.createElement("img");
				iconR.id = _this.id +"-iconR";
				iconR.style.border = "none";
				iconR.style.width = "48px";
				iconR.src = "http://arc.tees.ac.uk/WIDEST/Media/sad-icon.png";
				iconR.alt = "No";
				break;
			default:
				break;
		}
		
		switch(_this.wrong) {
			case "Valid tick":
				iconW = document.createElement("img");
				iconW.id = _this.id +"-iconW";
				iconW.style.border = "none";
				iconW.style.width = "48px";
				iconW.src = "http://arc.tees.ac.uk/WIDEST/Media/valid-icon.png";
				iconW.alt = "Yes";
				break;
			case "Happy smiley":
				iconW = document.createElement("img");
				iconW.id = _this.id +"-iconW";
				iconW.style.border = "none";
				iconW.style.width = "48px";
				iconW.src = "http://arc.tees.ac.uk/WIDEST/Media/smile-icon.png";
				iconW.alt = "Yes";
				break;
			case "Invalid tick":
				iconW = document.createElement("img");
				iconW.id = _this.id +"-iconW";
				iconW.style.border = "none";
				iconW.style.width = "42px";
				iconW.src = "http://arc.tees.ac.uk/WIDEST/Media/invalid-icon.png";
				iconW.alt = "No";
				break;
			case "Sad smiley":
				iconW = document.createElement("img");
				iconW.id = _this.id +"-iconW";
				iconW.style.border = "none";
				iconW.style.width = "48px";
				iconW.src = "http://arc.tees.ac.uk/WIDEST/Media/sad-icon.png";
				iconW.alt = "No";
				break;
			default:
				break;
		}
		
		//Right Answer Cell
		var elemR, chkR;
		elemR = document.createElement("label");
		
		if(_this.right != "" && !iconR)
			elemR.innerText = _this.right;
		else if(iconR)
			elemR.innerText = "";
		else
			elemR.innerText = "Right Answer";
			
		elemR.setAttribute("for",_this.id+"-chkR");
		chkR = document.createElement("input");
		chkR.type = "radio";
		chkR.name = _this.id+"-chk";
		chkR.id = _this.id+"-chkR";
		chkR.onclick = _this.doRight;
		
		//Wrong Answer Cell
		var elemW, chkW;
		elemW = document.createElement("label");
		if(_this.wrong != "" && !iconW) 
			elemW.innerText = _this.wrong;
		else if(iconW)
			elemW.innerText = "";
		else
			elemW.innerText = "Wrong Answer";
		elemW.setAttribute("for",_this.id+"-chkW");
		chkW = document.createElement("input");
		chkW.type = "radio";
		chkW.name = _this.id+"-chk";
		chkW.id = _this.id+"-chkW";
		chkW.onclick = _this.doWrong;
		
		
		switch(Math.random() < 0.5) {
			case true:
					cell2.appendChild(chkR);
					if(iconR)
						elemR.appendChild(iconR);
					cell2.appendChild(elemR);
					cell2.id = _this.id+"-rightCell";
					
					cell3.appendChild(chkW);
					if(iconW)
						elemW.appendChild(iconW);
					cell3.appendChild(elemW);
					cell3.id = _this.id+"-wrongCell";
				break;
			case false:
					cell3.appendChild(chkR);
					if(iconR)
						elemR.appendChild(iconR);
					cell3.appendChild(elemR);
					cell3.id = _this.id+"-rightCell";
					cell2.appendChild(chkW);
					if(iconW)
						elemW.appendChild(iconW);
					cell2.appendChild(elemW);
					cell2.id = _this.id+"-wrongCell";
				break;
			default:
				break;
		}
		
	}
	
	this.doRight = function() {
		document.getElementById(_this.id+"-wrongCell").style.color="";
		document.getElementById(_this.id+"-rightCell").style.color="#00CC18";
		
		var cellC = _this.row.insertCell(3);
		cellC.style.color="#14E31B";
		var iconCR = document.createElement("img");
		iconCR.id = _this.id +"-iconCR";
		iconCR.style.border = "none";
		iconCR.style.width = "36px";
		iconCR.src = "http://arc.tees.ac.uk/WIDEST/Media/valid-icon.png";
		iconCR.alt = "Correct";
		
		var elemCR = document.createTextNode("Correct");
		
		cellC.appendChild(iconCR);
		cellC.appendChild(elemCR);
		
		document.getElementById(_this.id+"-chkR").setAttribute("disabled","disabled");
		document.getElementById(_this.id+"-chkW").setAttribute("disabled","disabled");
		
	}
	
	this.doWrong = function() {
		document.getElementById(_this.id+"-rightCell").style.color="";
		document.getElementById(_this.id+"-wrongCell").style.color="#FF0000";
		
		var cellC = _this.row.insertCell(3);
		cellC.style.color="#FF0000";
		var iconCW= document.createElement("img");
		iconCW.id = _this.id +"-iconCW";
		iconCW.style.border = "none";
		iconCW.style.width = "32px";
		iconCW.src = "http://arc.tees.ac.uk/WIDEST/Media/invalid-icon.png";
		iconCW.alt = "Incorrect";
		
		var elemCW = document.createTextNode("Incorrect");
		
		cellC.appendChild(iconCW);
		cellC.appendChild(elemCW);
		document.getElementById(_this.id+"-chkR").setAttribute("disabled","disabled");
		document.getElementById(_this.id+"-chkW").setAttribute("disabled","disabled");
	}
    
}


