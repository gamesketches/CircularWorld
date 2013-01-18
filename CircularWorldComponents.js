Crafty.c("Player", {
	init: function() {
		this.addComponent("2D,Canvas,Color,Twoway,Collision,Gravity");
		this.twoway(10,7);
		this.collision();
		this.gravity("Ground");
		}
	});

Crafty.c("Ground", {
	init: function() {
		this.addComponent("2D,Canvas,Color");
		}
	});
