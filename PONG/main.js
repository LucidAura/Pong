var canvas = document.getElementById( "canvas" );
var ctx = canvas.getContext( "2d" );
var FPS = 30;
// Ball Properties
var ball = {
	x: canvas.width/2,
	y: canvas.height/2,
	vx: 400,
	vy: 0,
	ax: 0,
	ay: 0,
	speed: 200,
	radius: 10,
	color: "green",
	draw: function() {
		ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc( this.x, this.y, this.radius, 0, 2 * Math.PI );
        ctx.fill();
	},
	
	update: function() {
		this.x += this.vx / FPS;
		this.y += this.vy / FPS;
		
				// Ball Collison!!!
				//Canvas
		if ( ( this.x - this.radius ) < 0 ) {
            alert("Player 1 Lose");
			this.vx = 0;
			this.x+= 100;
        }
        if ( ( this.x + this.radius ) > canvas.width ) {
            alert("Player 2 Lose");
			this.vx = 0;
			this.x-= 100;
        }
        if ((this.y +this.radius)  < 0 ) {
            this.y = this.radius;
            this.vy = -this.vy;
        }
        if ( ( this.y - this.radius ) > canvas.height ) {
            this.y = canvas.height - this.radius;
            this.vy = -this.vy;
        }
				//Player 1
		if (((this.x - this.radius) < (player1.x + player1.width) && player1.y < (this.y + this.radius) && (this.y - this.radius) < (player1.y + player1.height) )) {
			if((player1.y + player1.height/2) > (this.y + this.radius)){
				//Upper Half
				this.vy -= 100;
			}
			else{
				//Botton Half	
				this.vy += 100;
			}
            this.vx = -this.vx;
        }
				//Player 2
		if (((this.x - this.radius) > (player2.x - player2.width*2) && player2.y < (this.y + this.radius) && (this.y - this.radius) < (player2.y + player2.height) )) {
			if((player2.y + player2.height/2) > (this.y + this.radius)){
				//Upper Half
				this.vy += 100;
			}else{
				//Botton Half	
				this.vy -= 100;
			}
            this.vx = -this.vx;
        }
	}
};

// Player Objects

var player1 = {

    x: 10,
    y: 210,
	lifes: 3,
    vy: 0,
    width: 10,
	height: 90,
    color: "blue",
    draw: function() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.fill();
    },
    update: function() {
        this.y += this.vy / FPS;
        // Collision detection
        if (this.y < 0 ) {
            this.y = 0;
        }
        if ((this.y + this.height) > canvas.height ) {
            this.y = canvas.height - this.height;
        }
    }
};

var player2 = {

    x: 480,
    y: 210,
	lifes: 3,
    vy: 0,
    width: 10,
	height: 90,
    color: "red",
    draw: function() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.fill();
    },
    update: function() {
        this.y += this.vy / FPS;
        // Collision detection
        if ( ( this.y) < 0 ) {
            this.y = 0;
        }
        if ( ( this.y + this.height ) > canvas.height ) {
            this.y = canvas.height - this.height;
        }
    }
};

// Game loop draw function
function draw() {
    ctx.clearRect( 0, 0, canvas.width, canvas.height );
    player1.draw();
	player2.draw();
	ball.draw();

}

// Game loop update function
function update() {
    player1.update();
	player2.update();
	ball.update();
	
}

function tick() {
    draw();
    update();
}

setInterval( tick, 1000 / FPS );