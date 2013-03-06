//JavaScript Document for component
//@[component="panel"]
var panel = function (ID) {
	this.id = ID;
	var _this = this;
	// add fields defined by this
	this.shown = 1; /* shown (+1), hidden (0) or collapsed (-1) */
			/*-- could page with n>1 show page n (0 and -1 as above) */
	this.header = "Some header text";
	this.text = "Some text";
	// standard ARIA values (borrowed from the slider roles
	// appropriate to numeric ranges or text values
    this.valuemin = -1;
	this.valuemax = 1;
	this.valuenow = 1;
	this.valuetext = "";
    
    // add an initialisation function called init (can be empty)
    this.init = function () {
		var ID = "#" + _this.id;
		_this.state();
	};
	
	// add functions for actions which can have any name
	// However the test harness expects: start(), stop(), reset()
	// and for media components: play (>), pause(||), forward(>>), rewind(<<), record(*)
	// for and for paged template navigation:  first(|<), prior(<), goto(^), next(>), last(>|)
	
	this.state = function() {
		var s = _this.shown;
		if (s==1) { 
			_this.show(); }
		else {
			if (s==0){
				_this.hide(); }
			else {
				_this.collapse(); }
		}
		_this.showText();
	};
			
	this.show = function () {
		_this.shown = 1;
        var ID = "#" + _this.id;
		$(ID).show();
		$(ID+"-ph").show();
    };

	this.hide = function () {
		_this.shown = 0;
		var ID = "#" + _this.id;
		$(ID).show();
		$(ID+"-ph").hide(); 
    };
					
  	this.collapse = function () {
		_this.shown = -1;
		var ID = "#" + _this.id;
		$(ID).hide();
		$(ID+"-ph").hide();	
    };
	
	this.toggle = function () {
		var s = _this.shown;
		if (s<1) { 
			_this.show(); }
		else {
			_this.collapse(); }
	};
	
	this.showText = function() {
		var ID = "#" + _this.id;
		$(ID+"-header").text(_this.header);
		$(ID+"-text").text(_this.text);
	}
	// set up default actions as synonyms for above
	this.start = _this.show;
	this.stop = _this.collapse;
	this.reset = _this.hide;
	
}

