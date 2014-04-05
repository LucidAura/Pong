var player_up_speed = -300;
var player_down_speed = 300;

window.onkeydown = function ( e ) {
    e = e || window.event;
    var code = e.keyCode;
    keyPressed(code);
};

window.onkeyup = function ( e ) {
    e = e || window.event;
    var code = e.keyCode;
    keyReleased(code);
};

var keyPressed = function(code) {
	
	if ( code === 38 ) {
    	player2.vy = player_up_speed;
	} 
	else if ( code === 40 ) {
    	player2.vy = player_down_speed;
	}
	else if ( code === 87 ) {
    	player1.vy = player_up_speed;
	}
	else if ( code === 83 ) {
    	player1.vy = player_down_speed;
	}

};

var keyReleased = function(code) {
	if ( code === 38 ) {
    	player2.vy = 0;
	} 
	else if ( code === 40 ) {
    	player2.vy = 0;
	}
	else if ( code === 87 ) {
    	player1.vy = 0;
	}
	else if ( code === 83 ) {
    	player1.vy = 0;
	}

    
};