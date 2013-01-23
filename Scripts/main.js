var cycleImages = function(){};
jQuery(document).ready(function($) {
	cycleImages = function(time){
		var active = $('#divmainpicture img.active');
		var next = ($(active).next().length > 0) ? $(active).next(): $('#divmainpicture img:first');
		$(next).css('z-index',2);
		$(active).fadeOut(time || 1500,function(){
			$(active).css('z-index',1).show().show().removeClass('active');
			$(next).css('z-index',3).addClass('active');
		});
	};
	setInterval('cycleImages()',5000);
});
