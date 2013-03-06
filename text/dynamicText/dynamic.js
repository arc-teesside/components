var dynamicText = function (ID) {
	this.id = ID;
    this.inputText = "";
    var _this = this;

    this.init = function () {
		_this.setText();
		window.addEventListener('mousemove', _this.setText, false);
	};
	
	this.setText = function() {
		pipes();
		document.getElementById(_this.id).innerHTML = _this.inputText;
	}
}