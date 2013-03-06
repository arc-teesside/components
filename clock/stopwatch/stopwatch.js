// JavaScript Document

var stopwatch = function (ID) {

    this.id = ID;
    this.intMinutes = null;
    this.intSeconds = null;
    this.startTime = 5;
    var _this = this;

    this.init = function () { };

    this.launchCountdown = function () {
        _this.resetClock();

        var secondsVal = _this.startTime * 60;
        var ID = "#" + _this.id;

        _this.intSeconds = setInterval(function () {
            if (secondsVal <= 0) {
                _this.resetClock();
            }
            var seconds = secondsVal % 60;
            var sdegree = seconds * 6;
            var srotate = "rotate(" + sdegree + "deg)";

            $(ID + "-sec").css({ "-moz-transform": srotate, "-webkit-transform": srotate });
            secondsVal = secondsVal - 1;
        }, 1000);

        _this.intMinutes = setInterval(function () {
            var mins = Math.ceil(secondsVal / 60);
            var mdegree = mins * 6;
            var mrotate = "rotate(" + mdegree + "deg)";
            $(ID + "-min").css({ "-moz-transform": mrotate, "-webkit-transform": mrotate });
        }, 1000);
    };

    this.resetClock = function () {
        clearInterval(_this.intSeconds);
        clearInterval(_this.intMinutes);
		var ID = "#" + _this.id;
		$(ID + "-sec").css({ "-moz-transform": "", "-webkit-transform": "" });
		$(ID + "-min").css({ "-moz-transform": "", "-webkit-transform": "" });
    }
}

var analogClearClock = function (ID) {

    this.id = ID;
    this.intMinutes = null;
    this.intSeconds = null;
    this.startTime = 5;
    var _this = this;

    this.init = function () { };

    this.launchCountdown = function () {
        _this.resetClock();

        var secondsVal = _this.startTime * 60;
        var ID = "#" + _this.id;

        _this.intSeconds = setInterval(function () {
            if (secondsVal <= 0) {
                _this.resetClock();
            }
            var seconds = secondsVal % 60;
            var sdegree = seconds * 6;
            var srotate = "rotate(" + sdegree + "deg)";

            $(ID + "-sec").css({ "-moz-transform": srotate, "-webkit-transform": srotate });
            secondsVal = secondsVal - 1;
        }, 1000);

        _this.intMinutes = setInterval(function () {
            var mins = Math.ceil(secondsVal / 60);
            var mdegree = mins * 6;
            var mrotate = "rotate(" + mdegree + "deg)";
            $(ID + "-min").css({ "-moz-transform": mrotate, "-webkit-transform": mrotate });
        }, 1000);
    };

    this.resetClock = function () {
        clearInterval(_this.intSeconds);
        clearInterval(_this.intMinutes);
    }
}

var analogCrystalClock = function (ID) {

    this.id = ID;
    this.intMinutes = null;
    this.intSeconds = null;
    this.startTime = 5;
    var _this = this;

    this.init = function () { };

    this.launchCountdown = function () {
        _this.resetClock();

        var secondsVal = _this.startTime * 60;
        var ID = "#" + _this.id;

        _this.intSeconds = setInterval(function () {
            if (secondsVal <= 0) {
                _this.resetClock();
            }
            var seconds = secondsVal % 60;
            var sdegree = seconds * 6;
            var srotate = "rotate(" + sdegree + "deg)";

            $(ID + "-sec").css({ "-moz-transform": srotate, "-webkit-transform": srotate });
            secondsVal = secondsVal - 1;
        }, 1000);

        _this.intMinutes = setInterval(function () {
            var mins = Math.ceil(secondsVal / 60);
            var mdegree = mins * 6;
            var mrotate = "rotate(" + mdegree + "deg)";
            $(ID + "-min").css({ "-moz-transform": mrotate, "-webkit-transform": mrotate });
        }, 1000);
    };

    this.resetClock = function () {
        clearInterval(_this.intSeconds);
        clearInterval(_this.intMinutes);
    }
}