var playerX = 0, playerY = 0;

Crafty.c("Player", {
	init: function() {
		this.addComponent("2D,Canvas,Color,Twoway,Collision,Gravity");
		this.twoway(10,7);
		this.collision();
		this.onHit("Enemy", function() {
			this.destroy(); // Go to game over later
		});
		this.gravity("Ground");
		}
	});

Crafty.c("Ground", {
	init: function() {
		this.addComponent("2D,Canvas,Color");
		}
	});

Crafty.c("Enemy", {
	init: function() {
		this.addComponent("2D,Canvas,Color,Collision");
		this.collision();
		this.bind("EnterFrame", function() {
			if(playerX > this.x)	{
				this.x++; }
			else {
				this.x--; }
			if(playerY > this.y) {
				this.y++; }
			else {
				this.y--; }
		});

		}
	});				
