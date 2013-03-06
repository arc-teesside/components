// JavaScript Document for component

//@[component="histogram"]
var histogram = function (ID) {
	this.id = ID;
	var _this = this;
	// add fields defined by this
	this.title = "My title text";
	this.labels = "Test 1,Test 2,Test 3,Test 4";
	this.values = "9.9,6.9,9.8,3.0";
	this.columns = 4;
	// standard ARIA values (borrowed from the slider roles
	// appropraite to numeric ranges or text values
    this.valuemin = 0;
	this.valuemax = 100;
	this.valuenow = 5;
	this.valuetext = "";
	// data values
	this.hdata = []; // used to create histogram data
    
    // add an initialisation function called init (can be empty)
    this.init = function ()
	{
		_this.graph();
	}
	
	this.graph = function ()
	{
		var ID = "#" + _this.id;
		_this.build();
        $(ID).jqChart({
            title: { text: _this.title },
			axes: [{
                    type: 'category',
                    location: 'bottom',
                    zoomEnabled: false
                }],
            series: 
				[{
                    type: 'column',
                    data: _this.hdata
                }]
            });
	}
	
	this.build = function ()
	{
		// build data from params
		var labs = _this.labels.split(",");
		var vals = _this.values.split(",");
		var cols = _this.columns;
		for (var i=0; i<_this.columns; i++)
		{
			_this.hdata.push([]);
			var lab = labs[i];
			var val = vals[i];
			if (!lab) {lab=""};
			if (!val) {val="0"}; 
			_this.hdata[i][0] = lab;
			_this.hdata[i][1] = parseFloat(val);
		}
	}

}
