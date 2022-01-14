let theShader;

function preload() {

  // load shader
  theShader = getShader(this._renderer);
}

function setup() {
  // shaders require WEBGL
  // vars for fullscreen in browser:
  // windowWidth, windowHeight

  // disables scaling for retina screens which can create inconsistent scaling
  // between displays
  pixelDensity(1);
  createCanvas(windowWidth, windowHeight, WEBGL);


  // shader() sets the active shader with our shader
  shader(theShader);
  noStroke();
}

function draw() {
  //shader(theShader);
  // send resulotion of sketch into shader
  theShader.setUniform('u_resolution', [width, height]);

  // set the active shader with our


  // rect gives us some geometry on the screen
  rect(0,0,100,100);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}




/*

let metaballShader;

const N_balls = 20,
			metaballs = [];

function preload() {
	metaballShader = getShader(this._renderer);
}

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	shader(metaballShader);

	for (let i = 0; i < N_balls; i ++) metaballs.push(new Metaball());
}

function draw() {
	var data = [];

	for (const ball of metaballs) {
		ball.update();
		data.push(ball.pos.x, ball.pos.y, ball.radius);
	}

	metaballShader.setUniform("metaballs", data);
	rect(0, 0, width, height);
}

// OpenProcessing has a bug where it always creates a scrollbar on Chromium.
function mouseWheel() { // This stops the canvas from scrolling by a few pixels.
	return false;
}

*/
