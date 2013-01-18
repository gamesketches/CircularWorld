window.onload = (function() {

	var WIDTH = 900,
		HEIGHT = 600,
		ROLLBACK_POINT = 2100,
		STARTING_POINT = 600;

	Crafty.init(WIDTH, HEIGHT);
	 Crafty.background("#000000");

	Crafty.e("Ground").attr({x: 0, y: 550, w: 3000, h: 50}).color("#888888");
	var player = Crafty.e("Player").attr({x: STARTING_POINT, y: 300, w: 50, h: 50}).color("#0000FF");
	Crafty.e("2D,Canvas,Color").attr({x: 1200, y: 500, w: 50, h: 50}).color("#00FF00");
	Crafty.e("Enemy").attr({x: 900, y: 200, w: 50, h: 50}).color("#FF0000");

	Crafty.bind("EnterFrame", function() {
		playerX = player.x;
		playerY = player.y;
		if(player.x >= ROLLBACK_POINT) {
			player.x = STARTING_POINT;}
		if(player.x <= 500) {
			player.x = ROLLBACK_POINT; }
		
		var vpx = player.x - WIDTH/2;
	
		Crafty.viewport.x = -vpx;

		});
});
