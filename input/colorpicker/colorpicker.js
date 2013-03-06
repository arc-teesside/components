var colorpicker = function (ID) {

    this.id = ID;
	this.selectedColor = '0000ff';
    var _this = this;

    this.init = function () {
		var ID = "#" + _this.id;
		
       $(ID).ColorPicker({
			color: '#'+_this.selectedColor,
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$(ID + " div").css("backgroundColor", '#' + hex);
				_this.selectedColor = hex;
			}
		});
	}
}
