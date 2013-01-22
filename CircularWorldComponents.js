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
		this.bind("KeyDown", function() {
			if(this.isDown('SPACE')) {
				Crafty.e("Projectile").attr({x: this.x + this.w, y: this.y, w: 25, h: 25}).color("#FF0000");
			}
		});
		}
	});

Crafty.c("Ground", {
	init: function() {
		this.addComponent("2D,Canvas,Color");
		}
	});

Crafty.c("Enemy", {
	destroyed: false,
	init: function() {
		this.addComponent("2D,Canvas,Color,Collision");
		this.collision();
		this.destroyed = false;
		this.onHit("Projectile", function() {
			this.destroyed = true;			
			this.destroy();
		});
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

Crafty.c("Projectile", {
	distance: 0,
	init: function() {
		this.addComponent("2D, Canvas, Color, Collision");
		this.collision();
		this.bind("EnterFrame", function() {
			this.x += 10;
			this.distance++;
			if(this.distance == 20) {
				this.destroy();
			}
		});
	}
});
