// JavaScript Document


var sliderInput = function (ID) {
    this.id = ID;
    this.min = 1;
    this.max = 60;
    this.defaultValue = 5;
    this.selectedValue = 5;
    var _this = this;

    this.init = function () {
        var ID = "#" + _this.id;
        $(ID + '-slider').slider({
            animate: true,
            min: _this.min,
            max: _this.max,
            step: 1,
            value: _this.defaultValue,
            slide: function (event, ui) {
                $(ID + '-displayNb').html(ui.value + "mins");
                _this.selectedValue = ui.value;
                //pipe(ID, ui.value); // added for pipe copy
            }
        });
		_this.selectedValue = _this.defaultValue;
		$(ID + '-displayNb').html(_this.defaultValue + "mins");
    }
}