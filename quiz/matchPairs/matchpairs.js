// JavaScript Document
var matchPairs = function (ID) {
	
	this.id = ID;
	
	this.imgWidth = "100";
	this.imgHeight = "100";
	
	this.image1 = "http://arc.tees.ac.uk/WIDEST/Media/defaultImage.jpg";
	this.image2 = "http://arc.tees.ac.uk/WIDEST/Media/defaultImage.jpg";
	this.image3 = "http://arc.tees.ac.uk/WIDEST/Media/defaultImage.jpg";
	this.image4 = "http://arc.tees.ac.uk/WIDEST/Media/defaultImage.jpg";
	this.image5 = "http://arc.tees.ac.uk/WIDEST/Media/defaultImage.jpg";
	this.image6 = "http://arc.tees.ac.uk/WIDEST/Media/defaultImage.jpg";
	this.image7 = "http://arc.tees.ac.uk/WIDEST/Media/defaultImage.jpg";
	this.image8 = "http://arc.tees.ac.uk/WIDEST/Media/defaultImage.jpg";
	this.image9 = "http://arc.tees.ac.uk/WIDEST/Media/defaultImage.jpg";
	this.image10 = "http://arc.tees.ac.uk/WIDEST/Media/defaultImage.jpg";
	
	this.tileImg = "http://arc.tees.ac.uk/WIDEST/Media/defaultImage.jpg";

	this.layout = "horizontal";

	this.removeMatch = true;

	this.fadeTime = 0.5;

	this.firstClick = false;
	this.secondClick = '';
	
	this.arTile = [];
	this.arImg = [];
	this.arMatches = [];

	var _this = this;
	
	this.init = function() {
		
		var arImg = [
			_this.image1,
			_this.image2,
			_this.image3,
			_this.image4,
			_this.image5,
			_this.image6,
			_this.image7,
			_this.image8,
			_this.image9,
			_this.image10
		];
		
		arImg = $.grep(arImg, function( el, index ) {
			return (el != "http://arc.tees.ac.uk/WIDEST/Media/defaultImage.jpg");
		});
		
		_this.arImg = arImg;

		if(arImg.length == 0) {
			$('#'+_this.id).append('<b>Matching Pairs</b><br/>Please select images in the right hand panel --->');
			return;
		}

		var arTile = [];
		
		$.each(arImg, function(index, val) {
			arTile.push(val);
			arTile.push(val);
		});
		
		arTile.sort(function() { return 0.5 - Math.random() });
		
		_this.arTile = arTile;

		var table = document.createElement("table")
		table.id = _this.id + '-table';
		
		var numRows = 0;
		var numCols = 0;
		
		switch (arImg.length) {
			case 1:
				if(_this.layout == "horizontal") {
					numRows = 1;
					numCols = 2;
				} else {
					numRows = 2;
					numCols = 1;
				}
				break;
			case 2:
				numRows = 2;
				numCols = 2;
				break;
			case 3:
				if(_this.layout == "horizontal") {
					numRows = 2;
					numCols = 3;
				} else {
					numRows = 3;
					numCols = 2;
				}
				break;
			case 4:
				if(_this.layout == "horizontal") {
					numRows = 2;
					numCols = 4;
				} else {
					numRows = 4;
					numCols = 2;
				}
				break;
			case 5:
				if(_this.layout == "horizontal") {
					numRows = 2;
					numCols = 5;
				} else {
					numRows = 5;
					numCols = 2;
				}
				break;
			case 6:
				if(_this.layout == "horizontal") {
					numRows = 3;
					numCols = 4;
				} else {
					numRows = 4;
					numCols = 3;
				}
				break;
			case 7:
				if(_this.layout == "horizontal") {
					numRows = 2;
					numCols = 7;
				} else {
					numRows = 7;
					numCols = 2;
				}
				break;
			case 8:
				numRows = 4;
				numCols = 4;
				break;
			case 9:
				if(_this.layout == "horizontal") {
					numRows = 3;
					numCols = 6;
				} else {
					numRows = 6;
					numCols = 3;
				}
				break;
			case 10:
				if(_this.layout == "horizontal") {
					numRows = 4;
					numCols = 5;
				} else {
					numRows = 5;
					numCols = 4;
				}
				break;
			default:
				break;	
		}
	
		var ind = 0;
		for(var i=1; i<=numRows; i++){
			
			var rowCount = table.rows.length;
			var row = table.insertRow(rowCount);
			
			for( var j=0; j<numCols; j++)
			{
				var cell = row.insertCell(j);
				cell.style.width = _this.imgWidth+'px';
				cell.style.height = _this.imgHeight+'px';
				var lnk = document.createElement("a");
				lnk.id = _this.id +"-lnk-"+ind;
				lnk.onclick=_this.reveal;
				
				var img = document.createElement("img");
				img.id = _this.id +"-img-"+ind;
				img.style.border = "none";
				img.style.width = _this.imgWidth+'px';
				img.style.height = _this.imgHeight+'px';
				img.src = _this.tileImg;
				ind++;
				lnk.appendChild(img);

				cell.appendChild(lnk);

			}
		}
		
		$('#'+_this.id).append(table);

		console.log(table);
		
	}

	this.reveal = function () {

		var index = this.id.substr(this.id.lastIndexOf('-')+1, this.id.length-1);

		if (_this.firstClick === false) { // first img clicked

			_this.firstClick = index;
			document.getElementById(_this.id+'-img-'+index).src = _this.arTile[index];
			console.log('firstClick',_this.firstClick);

		} else { // second img clicked

			if(index === _this.firstClick) { // same image clicked
				document.getElementById(_this.id+'-img-'+index).src = _this.tileImg;
				_this.firstClick = false;
			} else {
				if(_this.arTile[index] == _this.arTile[_this.firstClick]) {
					document.getElementById(_this.id+'-img-'+index).src = _this.arTile[index];
					_this.arMatches.push(_this.arTile[index]);
					console.log('match');
					if(_this.removeMatch) {
						console.log('fade');
						setTimeout(function(){
							$('#'+_this.id+'-lnk-'+_this.firstClick).fadeOut('fast');
							$('#'+_this.id+'-lnk-'+index).fadeOut('fast');
							console.log('#'+_this.id+'-lnk-'+_this.firstClick,'#'+_this.id+'-lnk-'+index);
							_this.firstClick = false;
							if(_this.arMatches.length == _this.arImg.length) { // end of game
								alert('Well done');
								_this.resetGame();
							}
						},_this.fadeTime*1000);
					} else {
						console.log('nofade');
						_this.firstClick = false;
					}
				} else {
					document.getElementById(_this.id+'-img-'+index).src = _this.arTile[index];
					setTimeout(function() {
						document.getElementById(_this.id+'-img-'+index).src = _this.tileImg;
						document.getElementById(_this.id+'-img-'+_this.firstClick).src = _this.tileImg;
						_this.firstClick = false;
					}, _this.fadeTime*1000)
					console.log('no match');
				}
			}

			console.log('second click');
		};
		console.log(index);
	}

	this.resetGame = function() {
		$('#'+_this.id).empty();	
		this.firstClick = false;
		this.secondClick = '';
		
		this.arTile = [];
		this.arImg = [];
		this.arMatches = [];
		_this.init();
	};
}