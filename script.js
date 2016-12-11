$(function() {
	var container = $('#container');
	var qr = $('#qr');
	var width = container.width();
	var height = container.height();
	var resize = function() {
		container.css('left', $(window).width()/2 - width/2);
		container.css('bottom', height);
		qr.css('left', $(window).width()/2 - width/2);
	};

	resize();
	$(window).on('resize', resize);

	$(document).on('contextmenu', function(event) {
		alert('クリック禁止です！');
		return false;
	});

	$(document).on('click', function(event){
		alert('クリック禁止です！');
		return false;
	});
});
