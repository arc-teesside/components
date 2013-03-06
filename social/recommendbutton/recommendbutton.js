var recommendbutton = function(ID){
    this.id = ID;
    this.url = window.location.href;
    var _this = this;

    this.init = function() {
        var ID = "#" + _this.id;
        document.getElementById(_this.id+"-recommendbutton").setAttribute("data-href",_this.url);
        fbAsyncInit();
    }
    window.fbAsyncInit = function() {
        FB.init({
            appId      : '391138277598905', // App ID
            status     : true, // check login status
            cookie     : true, // enable cookies to allow the server to access the session
            xfbml      : true  // parse XFBML
        });

    // Additional initialization code here
    };

    // Load the SDK Asynchronously
    (function(d){
        var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement('script');
        js.id = id;
        js.async = true;
        js.src = "http://connect.facebook.net/en_US/all.js";
        ref.parentNode.insertBefore(js, ref);
    }(document));    
    
}
