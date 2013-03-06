var comments = function (ID) {

    var _this = this;
	this.widgetId = "";
	
	this.id = ID;
	
	this.init = function() {
			
			var htmlId = document.documentElement.id || document.getElementsByTagName('HTML')[0].id;
			_this.widgetId = htmlId.substr(htmlId.indexOf('w@'));
	
			$("#"+_this.id+"-textbox").focus(function(srcc) {
				if ($(this).val() == $(this)[0].title) {
					$(this).removeClass("defaultTextActive");
					$(this).val("");
				}
			});
			
			$("#"+_this.id+"-textbox").blur(function()	{
				if ($(this).val() == "") {
					$(this).addClass("defaultTextActive");
					$(this).val($(this)[0].title);
				}
			});
			
			$("#"+_this.id+"-textbox").blur();
			
			$("#"+_this.id+"-btn").click(_this.send);
			
			_this.loadComments();
	}
	
	this.send = function() {
	
		var comment = $("#"+_this.id+"-textbox").val();
		if(comment != 'Comment here...' && comment.length != 0) {
			
			$.post('http://arc.tees.ac.uk/WIDEST/Services/postComment.php', {
					widgetID: _this.widgetId,
					cmpId: _this.id,
					content: comment
				},
				_this.loadComments
			);
		}
	}
	
	this.loadComments = function() {
		
		$.get('http://arc.tees.ac.uk/WIDEST/Services/loadComment.php', {
				widgetID: _this.widgetId,
				cmpId: _this.id
			},
			function(data, textStatus) {
				$("#"+_this.id+"-content").html(data);
			});
	}
    
}


