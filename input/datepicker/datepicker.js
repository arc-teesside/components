var datepicker = function (ID) {

    this.id = ID;
	this.selectedDate = '';
	this.attach2Textbox = false;
	this.yearAsMenu = false;
	this.showWeekNumber= false;
	this.displayMultiple = false;
	this.dateFormat = 'standard';
	
    var _this = this;

    this.init = function () {
		
		var target = '#'+_this.id;
		
		if(_this.attach2Textbox) {
			var dateInput = document.createElement('input');
			dateInput.id = _this.id+'-input';
			document.getElementById(_this.id).appendChild(dateInput);
			target += '-input'; 
		}
		
		var chMonth = false;
		var chYear = false;
		
		if(_this.yearAsMenu) {
			chMonth = true;
			chYear = true;
		}
		
		var format = 'dd/mm/yy';
		
		if(_this.dateFormat == 'us')
			format = 'mm/dd/yy';
		
		_this.selectedDate = $.datepicker.formatDate(format, new Date());
		
		$(target).datepicker({
			dateFormat: format,
			changeMonth: chMonth,
			changeYear: chYear,
			onSelect: function (d) {
				_this.selectedDate = d;
			}
		});
		
		if(_this.showWeekNumber) {
			$(target).datepicker( "option", "firstDay", 1);
			$(target).datepicker( "option", "showWeek", true);
		}
		
		if(_this.displayMultiple)
			$(target).datepicker( "option", "numberOfMonths", 3);
	}
}
