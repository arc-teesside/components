var youtube = function (ID) {

	this.id = ID;
	this.url = "";
	this.video_id = '';
	this.width = 560;
	this.height = 315;
	
	var _this = this;
	
	this.init = function() { 
		var initDiv = document.getElementById(_this.id);
		if(_this.url.length > 0) {
			if(_this.url.split('v=')[1]) {
				_this.video_id = _this.url.split('v=')[1];			
				var ampersandPosition = _this.video_id.indexOf('&');
				if(ampersandPosition != -1) {
					_this.video_id = _this.video_id.substring(0, ampersandPosition);
				}
			}
		}
		
		
		if (top.window.editable) {	
			initDiv.style.width = _this.width+'px';
			initDiv.style.height = _this.height+'px';
			initDiv.className = initDiv.className + " editable"
			var imgBlank = document.createElement("img");
			imgBlank.id = _this.id +"-youtubeLogo";
			imgBlank.style.border = "none";
			//imgBlank.style.position = 'relative';
			//var posLeft = (_this.width-200)/2;
			//var posTop = (_this.height-80)/2;
			//imgBlank.style.left = '0px';
			//imgBlank.style.top = (posTop-10)+'px';
			imgBlank.style.marginTop = ((_this.height-80)/2)-20+'px';
			imgBlank.style.marginBottom = '10px';
			imgBlank.src = "http://arc.tees.ac.uk/WIDEST/Widget/components/media/youtube/youtubeLogoSmall.png";
			imgBlank.alt = "Youtube Logo";
			
			initDiv.appendChild(imgBlank);
			initDiv.appendChild(document.createElement('br'));
			if(_this.url.length == 0) {
				initDiv.appendChild(document.createTextNode('Insert '));
				
				var textNode = document.createElement('span');
				textNode.innerText = 'Video URL';
				//textNode.style.position = 'relative';
				//textNode.style.left = '0px';
				//textNode.style.top = posTop+'px';
				textNode.style.color = "red";
				initDiv.appendChild(textNode);
				
				
				initDiv.appendChild(document.createTextNode(' in the Edit panel --->'));
			}
			else if(_this.url.length > 0 && _this.video_id.length == 0) {
				
				var textNode = document.createElement('span');
				textNode.innerText = 'Invalid URL!';
				//textNode.style.position = 'relative';
				//textNode.style.left = '0px';
				//textNode.style.top = posTop+'px';
				textNode.style.color = "red";
				initDiv.appendChild(textNode);
				
				
			}
			else if(_this.url.length > 0 && _this.video_id.length > 0) {
				initDiv.appendChild(document.createTextNode('Your video was linked '));
				
				var textNode = document.createElement('span');
				textNode.innerText = 'successfully.';
				//textNode.style.position = 'relative';
				//textNode.style.left = '0px';
				//textNode.style.top = posTop+'px';
				textNode.style.color = "green";
				initDiv.appendChild(textNode);
				
				
				initDiv.appendChild(document.createTextNode('It will appear in preview'));
			}
			
		} else {
			
			initDiv.innerHTML = '<iframe width="'+_this.width+'" height="'+_this.height+'" src="http://www.youtube.com/embed/'+_this.video_id+'" frameborder="0" allowfullscreen  class="component" id="'+_this.ID+'-frame" ></iframe>';
		}
		
	}
	
}