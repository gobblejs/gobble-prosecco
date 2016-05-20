
var minify = require('prosecco').minify;

function prosecco( input, options ) {
	return minify( input, options );
}

prosecco.defaults = {
	accept: ['.js'],
	ext: '.min.js'
}

module.exports = prosecco;

