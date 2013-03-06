var textbasedquiz = function (ID) {

    var _this = this;
	
    this.id = ID;
    this.symbol = "";
	this.question = "";
	this.right1 = "";
	this.right2 = "";
	this.btnText = "Check it!";
	this.width = 64;
	this.disableOnCheck = false;
	
	
	this.init = function() {
		
		var tbl = document.getElementById(_this.id+'-tbl');
		
		var rowCount = tbl.rows.length;
	
		var row = tbl.insertRow(rowCount);
		row.style.verticalAlign = "middle";
		
		var cell1 = row.insertCell(0);
		cell1.style.textAlign = "center";
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		
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
		
		//First cell
		var input1, answer1;
		input1 = document.createElement("input");
		input1.type = "text";
		input1.name = _this.id+"-txt1";
		input1.id = _this.id+"-txt1";
		input1.onkeyup = _this.checkInput;
			
		answer1 = document.createElement('span');
		answer1.innerText = _this.right1;
		answer1.id = _this.id+"-res1";
		answer1.style.display = 'none';
		
		cell2.appendChild(input1);
		cell2.appendChild(document.createElement("br"));
		cell2.appendChild(answer1);
		cell2.id = _this.id+"-right1Cell";
		
		//Second cell
		var input2, answer2;
		input2 = document.createElement("input");
		input2.type = "text";
		input2.name = _this.id+"-txt2";
		input2.id = _this.id+"-txt2";
		input2.onkeyup = _this.checkInput;
		
		answer2 = document.createElement('span');
		answer2.innerText = _this.right2;
		answer2.id = _this.id+"-res2";
		answer2.style.display = 'none';
		
		cell3.appendChild(input2);
		cell3.appendChild(document.createElement("br"));
		cell3.appendChild(answer2);
		cell3.id = _this.id+"-right2Cell";
		
		//button cell
		var btn = document.createElement('button');
		btn.disabled = true;
		btn.id = _this.id+"-btn";
		btn.onclick = _this.displayResult;
		btn.appendChild(document.createTextNode(_this.btnText));
		
		cell4.appendChild(btn);
	}
	
	this.displayResult = function() {
		var rep1 = document.getElementById(_this.id+"-txt1");
		var rep2 = document.getElementById(_this.id+"-txt2");
		var res1 = document.getElementById(_this.id+"-res1");
		var res2 = document.getElementById(_this.id+"-res2");
		if(rep1.value != '' && rep2.value != '') {
			if(_this.right1.toLowerCase().search(rep1.value.toLowerCase()) != -1)
				res1.style.color = "#00CC18"
			else
				res1.style.color = "#FF0000"
			res1.style.display = 'block';
			console.log(_this.right1.toLowerCase().search(rep1.value.toLowerCase()));
			if(_this.right2.toLowerCase().search(rep2.value.toLowerCase()) != -1)
				res2.style.color = "#00CC18"
			else
				res2.style.color = "#FF0000"
			res2.style.display = 'block';
			
			if(_this.disableOnCheck) {
				rep1.setAttribute("disabled","disabled");
				rep2.setAttribute("disabled","disabled");
			}
		}
	}
	
	this.checkInput = function() {
		var res1 = document.getElementById(_this.id+"-txt1");
		var res2 = document.getElementById(_this.id+"-txt2");
		var btn = document.getElementById(_this.id+"-btn");
		
		
		if(res1.value != '' && res2.value != '') {
			btn.disabled = false;
		} else {
			btn.disabled = true;
		}
	}
    
}


