// JavaScript Document for component

//@[component="rssFeed"]
var rssfeed = function (ID) {
	this.id = ID;
	var _this = this;
	// add fields defined by this
	this.title = "RSS feed";
	this.url = "http://www.tees.ac.uk/sections/news/rss.xml";
	this.feeds = 4;
	this.showdesc = true;
	this.showdate = true;
	// standard ARIA values (borrowed from the slider roles
	// appropraite to numeric ranges or text values
    this.valuemin = 0;
	this.valuemax = 10;
	this.valuenow = 5;
	this.valuetext = "";
	// data values
	this.data = "some data";
    
    // add an initialisation function called init (can be empty)
    this.init = function () {
		var ID = "#" + _this.id;
		_this.showrss();
	};
	
	this.showrss = function(){
		var ID = "#" + _this.id;
		$(ID+"title").text(_this.title);
		$(ID+"-rss").FeedEk({
			FeedUrl : _this.url,
			MaxCount : _this.feeds,
			ShowDesc : _this.showdesc,
			ShowPubDate: _this.showdate
			});
	};
}