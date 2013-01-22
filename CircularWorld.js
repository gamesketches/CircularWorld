window.onload = (function() {

	var WIDTH = 900,
		HEIGHT = 600,
		ROLLBACK_POINT = 2100,
		STARTING_POINT = 600,
		enemyColor = "#FF0000";

	Crafty.init(WIDTH, HEIGHT);
	 Crafty.background("#000000");

	// Make Clouds
	Crafty.e("2D,Canvas,Color").attr({x: 500, y: 400, w: 25, h: 25}).color("#FFFFFF");
	Crafty.e("2D,Canvas,Color").attr({x: 650, y: 100, w: 25, h: 25}).color("#FFFFFF");
	Crafty.e("2D,Canvas,Color").attr({x: 900, y: 300,w: 25, h: 25}).color("#FFFFFF");
	Crafty.e("2D,Canvas,Color").attr({x: 1300, y: 336, w: 25, h: 25}).color("#FFFFFF");
	Crafty.e("2D,Canvas,Color").attr({x: 1400, y: 114, w: 25, h: 25}).color("#FFFFFF");
	Crafty.e("2D,Canvas,Color").attr({x: 1700, y: 476, w: 25, h: 25}).color("#FFFFFF");
	Crafty.e("2D,Canvas,Color").attr({x: 2000, y: 400, w: 25, h: 25}).color("#FFFFFF");
	Crafty.e("2D,Canvas,Color").attr({x: 2150, y: 100, w: 25, h: 25}).color("#FFFFFF");
	Crafty.e("2D,Canvas,Color").attr({x: 2400, y: 300, w: 25, h: 25}).color("#FFFFFF");
	

	Crafty.e("Ground").attr({x: 0, y: 550, w: 3000, h: 50}).color("#888888");
	var player = Crafty.e("Player").attr({x: STARTING_POINT, y: 300, w: 50, h: 50}).color("#0000FF");
	//Crafty.e("2D,Canvas,Color").attr({x: ROLLBACK_POINT, y: 500, w: 50, h: 50}).color("#00FF00");
	var enemies = [];
	var enemiesPast = [];
	var zombieEnemies = [];
	for(var i = 0; i < 8; i++) {
		enemies[i] = Crafty.e("Enemy").attr({x: 1500 + (10 * Crafty.math.randomInt(0, 20)), y: 200 + (10 * Crafty.math.randomInt(0,20)), w: 50, h: 50}).color(enemyColor);
		}

	function randomColor(min, max) {
	    min = min !== undefined ? min.substr(1) : "000000";
	    max = max !== undefined ? max.substr(1) : "FFFFFF";
	    var c = [];
                
	    c[0] = Crafty.math.randomInt(parseInt(min.substr(0, 2), 16), parseInt(max.substr(0, 2), 16));
	    c[1] = Crafty.math.randomInt(parseInt(min.substr(2, 2), 16), parseInt(max.substr(2, 2), 16));
	    c[2] = Crafty.math.randomInt(parseInt(min.substr(4, 2), 16), parseInt(max.substr(4, 2), 16));
        
	    return 'rgb(' + c.join(',') + ')';
	    }

	Crafty.bind("EnterFrame", function() {
		playerX = player.x;
		playerY = player.y;
		if(player.x >= ROLLBACK_POINT) {
			player.x = STARTING_POINT;
			for(var i = 0; i < enemies.length; i++) {
				if(enemies[i].destroyed == false) {
					enemiesPast.push(enemies[i]);
					}
				else {
					enemies[i].destroy();
					}
				}
			enemyColor = randomColor("#000000", "#FFFFFF");
			for(var i = 0; i < 8; i++) {
				enemies[i] = Crafty.e("Enemy").attr({x: 900 + (10 * Crafty.math.randomInt(0, 20)), y: 200 + (10 * Crafty.math.randomInt(0,20)), w: 50, h: 50}).color(enemyColor);
				}
			if(Crafty.math.randomInt(0,1) == 1) {
				for(var j = 0; j < enemiesPast.length; j++) {
					for(var i = 0; i < 8; i++) {
						zombieEnemies[i] = Crafty.e("Enemy").attr({x: 900 + (100 * j) + (10 * Crafty.math.randomInt(0, 20)), y: 200 + (10 * Crafty.math.randomInt(0,20)), w: 50, h: 50}).color(enemiesPast[j].color);
					}
					}
				}
			}
		if(player.x <= 500) {
			player.x = ROLLBACK_POINT; }
		
		var vpx = player.x - WIDTH/2;
	
		Crafty.viewport.x = -vpx;

		});
});
