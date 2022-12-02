//img = "";
noseX = 0;
noseY = 0;
//mX = 0;
//mY = 0;

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	coinSound=loadSound("coin.wav");
	game_over=loadSound("gameover.wav");
	jump=loadSound("jump.wav");
	kick=loadSound("kick.wav");
	mario_die=loadSound("mariodie.wav");
	//img = loadImage("mario.jpg");

}

function setup() {
	canvas = createCanvas(1240, 336);
	canvas.parent("canvas")
	instializeInSetup(mario);


	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent("gameConsole")
	pose = ml5.poseNet(video, modelLoaded);
	pose.on('pose', gotPoses);
}

function gotPoses(result) {
	if (result.length > 0) {
		noseX = result[0].pose.nose.x;
		noseY = result[0].pose.nose.y;
		//console.log("x=" + noseX + " y=" + noseY);
	}
}

function draw() {
	game()
	// image(img, mX, mY, 40, 40);
	// if (noseX < 300) {
	// 	mX -= 1
	// }
	// if (noseX > 300) {
	// 	mX += 1
	// }
	// if (noseY < 200) {
	// 	mY -= 1
	// }
}

function modelLoaded() {
	console.log('model is loaded');
}





