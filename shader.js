function getShader(_renderer) {
	const vert = `
    // shapes are driven by p5
    // our vertex data from WEBGL/p5
    attribute vec3 aPosition;

    void main() {
      // copy the position data into a vec4
      // (x,y,z,w). We are not using z, because we are only operating
      // in two dimensions, x and y. We will put in 1.0 as the w
      // parameter (when w = 1.0 the vector is treated as a position,
      // when w = 0.0 the vector is treated as a direction, this is standard vector math.
      vec4 positionVec4 = vec4(aPosition, 1.0);


      positionVec4.xy = positionVec4.xy * 2.0 - 1.0;

      // send the vertex information to the frag shader
      gl_Position = positionVec4;
    }
  `;

	const frag = `
    #ifdef GL_ES
    precision mediump float;
    #endif

    uniform vec2 u_resolution; // this is passed in as uniform from main.js

    void main () {

      // gl_FragCoord are the window relative coordinates
      // of the current fragment

      vec2 st = gl_FragCoord.xy/u_resolution.xy
      
      // currently this line of code makes a gradient based on
      // the position of pixel on the canvas
      gl_FragColor = vec4(st.x, 0.0, 0.0, 1.0);
    }
	`;

	return new p5.Shader(_renderer, vert, frag);
}
