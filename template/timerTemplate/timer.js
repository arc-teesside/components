// JavaScript Document

var timerTemplate = function (ID) {

    this.id = ID;
    this.heading = "";
    var _this = this;

    this.init = function () {
        var ID = "#" + _this.id;
        $(ID+"-heading").text(_this.heading);
    };
}