window.onload = (function() {

	var WIDTH = 1000,
		HEIGHT = 600;

	Crafty.init(WIDTH, HEIGHT);
	 Crafty.background("#000000");

	Crafty.e("Ground").attr({x: 0, y: 550, w: 1000, h: 50}).color("#888888");
	var player = Crafty.e("Player").attr({x: 300, y: 300, w: 50, h: 50}).color("#0000FF");

	Crafty.bind("EnterFrame", function() {
		var vpx = player.x - WIDTH/2;
	
		Crafty.viewport.x = -vpx
		});
});
