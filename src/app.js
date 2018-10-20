
const senseLeds = require('sense-hat-led');
const senseJoystick = require('sense-joystick');

//CONFIGURATION SETTINGS
const SERVER_HOST = process.env.SERVER_HOST || 'http://10.10.1.95';
const SERVER_PORT = process.env.SERVER_PORT || '8000';
const socket = require('socket.io-client')(`http://${SERVER_HOST}:${SERVER_PORT}`);

// APPLICATION SETTINGS
const WIDTH = 8;
const HEIGHT = 8;
const MY_COLOR = process.env.MY_COLOR || [255, 255, 255];
const BLACK_COLOR = [23, 144, 47];

let userData = {
    id: '',
    position: {
        x: 0,
        y: 0
    },
    color: '',
};

const { mazes } = (() => {
    const _ = BLACK_COLOR;
	const mazes = {
		none: [
			_, _, _, _, _, _, _, _,
			_, _, _, _, _, _, _, _,
			_, _, _, _, _, _, _, _,
			_, _, _, _, _, _, _, _,
			_, _, _, _, _, _, _, _,
			_, _, _, _, _, _, _, _,
			_, _, _, _, _, _, _, _,
			_, _, _, _, _, _, _, _
		]
	};

	return { mazes }
})();

const drawMaze = (maze) => {
    senseLeds.setPixels(maze);
}

socket.on('connect', () => { 
    console.log('connected new player');
});


socket.on('start', function(newUser){
    userData = Object.assign(userData, newUser);

    var patata = mazes.none;
    var position = positionToIdx(userData.position.x, userData.position.y);
    patata[position] = MY_COLOR;
    drawMaze(patata);
});

const positionToIdx = (x, y ) => {
	if (x < 0 || x >= WIDTH) {
		throw new Error(`x is out of bounds: ${x}`);
	}
	if (y < 0 || y >= HEIGHT) {
		throw new Error(`y is out of bounds: ${y}`);
	}
	return x + WIDTH * y;
};


