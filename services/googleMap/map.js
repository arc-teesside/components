var googlemap = function(ID) {
	this.id = ID;
	this.lat;
	this.lng;
	this.geocoder;
	this.map;
	this.address= '';
	var _this = this;
	
	this.init = function() {
		_this.geocoder = new google.maps.Geocoder();
		if(navigator.geolocation && _this.address == ''){
			
			navigator.geolocation.watchPosition(function (position){
			
					_this.lat= position.coords.latitude;		
					_this.lng= position.coords.longitude;
					
					var myLatLng =  new google.maps.LatLng(_this.lat,_this.lng); 
		
					_this.geocoder = new google.maps.Geocoder();
								
					var myOptions = { 
						center: myLatLng, //54.573007 -1.23791
						zoom: 15,
						mapTypeId: google.maps.MapTypeId.HYBRID
					};
					
					_this.map = new google.maps.Map(document.getElementById(_this.id+"_canvas"), myOptions);
					
					var marker = new google.maps.Marker({
						map: _this.map,
						position: myLatLng
					
					});
					
					var infowindow = new google.maps.InfoWindow({
						content: "You are here"
					});
					
					google.maps.event.addListener(marker, "click", function() {
						infowindow.open(_this.map, marker);
					});
					
					google.maps.event.addListener(_this.map, "click", function() {
						infowindow.close();
					});
					
				},function(error){
				
					_this.lat= 54.573007;		
					_this.lng= -1.23791;
					
					var myLatLng =  new google.maps.LatLng(_this.lat,_this.lng); 
		
					_this.geocoder = new google.maps.Geocoder();
								
					var myOptions = { 
						center: myLatLng, //54.573007 -1.23791
						zoom: 8,
						mapTypeId: google.maps.MapTypeId.HYBRID
					};
					
					_this.map = new google.maps.Map(document.getElementById(_this.id+"_canvas"), myOptions);
				
				},{
					enableHighAccuracy:true,
					timeout:100000,
					maximumAge:0
			});
			
			
			
		} else {
			_this.lat= 54.573007;		
			_this.lng= -1.23791;
			
			var myLatLng =  new google.maps.LatLng(_this.lat,_this.lng); 
		
			_this.geocoder = new google.maps.Geocoder();
						
			var myOptions = { 
				center: myLatLng, //54.573007 -1.23791
				zoom: 8,
				mapTypeId: google.maps.MapTypeId.HYBRID
			};
			
			_this.map = new google.maps.Map(document.getElementById(_this.id+"_canvas"), myOptions);
			
		}
		
		if(_this.address != '') {
			_this.codeAddress();
		}
	};
	
	this.codeAddress = function() {
		_this.geocoder.geocode( {
			'address': _this.address
		}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				_this.map.setCenter(results[0].geometry.location);
				var marker = new google.maps.Marker({
					map: _this.map,
					position: results[0].geometry.location
				});
			} else {
				alert("Geocode was not successful for the following reason: " + status);
			}
		});
	}
}



		

