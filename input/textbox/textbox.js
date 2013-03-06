var textbox = function (ID) {
	this.id = ID;
    this.value = "";
    var _this = this;

    this.init = function () {
		_this.setValue();
		//document.getElementById(_this.id + "-input").addEventListener('change', _this.setValue, false);
		document.getElementById(_this.id + "-input").onchange = _this.setValue;
	};
	
	this.setValue = function() {
		_this.value = document.getElementById(_this.id + "-input").value;
		pipes();
	}
}