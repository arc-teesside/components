var visualcountdown = function (ID) {

    var _this = this;
	
    this.flag = false;
    this.id = ID;
    this.color = "#FFFFFF";
    this.startTime = 2;
    this.opacity = 0.8;
	this.playAlarm = true;
	this.alarmPlayTime = 1;
	
	this.x = null;
	this.ctx = null;
	this.tween = null;
	this.count= 0;
	this.beginAngle = new Object();
	this.endAngle = new Object();
	this.originBeginAngle = new Object();
	this.originEndAngle = new Object();
	
	this.init = function() {
		var canvassec = document.getElementById(_this.id+'-sec');
		
		if (canvassec.getContext){
		
            _this.ctx = canvassec.getContext('2d');
			
			_this.ctx.clearRect(0,0,200,200);
			_this.ctx.textBaseline = "top";
			_this.ctx.font = "bold 1.4em arial";
			_this.ctx.fillText(_this.startTime, 93, 110);
			_this.ctx.font = "1em arial";
			_this.ctx.fillText("minutes left", 60, 130);
			
			_this.originBeginAngle.val = (Math.PI/180)*-90;
			_this.originEndAngle.val = (Math.PI/180)*-(90+360);
			
			_this.beginAngle.val = _this.originBeginAngle.val;
			_this.endAngle.val = _this.originEndAngle.val;
			
			_this.count = 0;
			
			_this.tween = new TWEEN.Tween(_this.beginAngle)
				.to(_this.endAngle,60000)
				.onUpdate( function () {
					_this.ctx.clearRect(0,0,200,200);
					_this.ctx.globalAlpha = _this.opacity;
					_this.ctx.beginPath();
					_this.ctx.arc(100, 100, 50, _this.beginAngle.val,_this.endAngle.val, false); 
					_this.ctx.lineWidth = 100;
					_this.ctx.strokeStyle = _this.color;
					_this.ctx.stroke();
					_this.ctx.textBaseline = "top";
					_this.ctx.font = "bold 1.4em arial";
					_this.ctx.fillText(_this.startTime-_this.count, 93, 110);
					_this.ctx.font = "1em arial";
					_this.ctx.fillText("minutes left", 60, 130);
			})
		}
	}
	
    this.startClock = function(){
        if(_this.flag==true){
            _this.resetClock(_this.startCanvas);
        } else {
			_this.startCanvas();
		}
    }
	
    this.resetClock =function(callback){
        clearInterval(_this.x);
        _this.ctx.clearRect(0,0,200,200);
		_this.ctx.textBaseline = "top";
		_this.ctx.font = "bold 1.4em arial";
		_this.ctx.fillText(_this.startTime, 93, 110);
		_this.ctx.font = "1em arial";
		_this.ctx.fillText("minutes left", 60, 130);
        TWEEN.stop();
		
        _this.flag=false;
		_this.beginAngle.val = _this.originBeginAngle.val;
		_this.endAngle.val = _this.originEndAngle.val;
        _this.count = 0;
		if(callback)
			callback();
    }
	
    this.startCanvas=function() {
        var ID = "#" + _this.id;
				
        if (_this.ctx){
			
            TWEEN.start();
			
			
			_this.x=setInterval( function() {
				_this.count ++;
				
				if(_this.count == _this.startTime ){
					_this.resetClock();
					if(_this.playAlarm) {
						document.getElementById(_this.id+'-testaudio').play();
						setTimeout("document.getElementById('"+_this.id+"-testaudio').pause()",_this.alarmPlayTime * 1000);
					}
				} else {
			
					_this.beginAngle.val = _this.originBeginAngle.val;
					_this.endAngle.val = _this.originEndAngle.val;
					
					_this.tween.start();
				}
			},60000);
			
			_this.flag=true;
			
			_this.tween.start();
			
        }
    }
}


