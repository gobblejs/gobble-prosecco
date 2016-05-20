# gobble-prosecco

Use [Prosecco](https://www.npmjs.com/package/prosecco) to minify your javascript files within a GobbleJS workflow.


## Installation

I assume you already know the basics of [Gobble](https://github.com/gobblejs/gobble).

```bash
npm i -D gobble-prosecco
```

## Usage

In your `gobblefile`, run the `prosecco` gobble transform, like so:

```javascript
var gobble = require( 'gobble' );
module.exports = gobble( 'src' )
	.transform( 'prosecco' );
```

By default, gobble-prosecco will minify only files with a `.js` extension, and
output files with a `.min.js` extension. Override this with the `accept` and `ext` options:

```javascript
var gobble = require( 'gobble' );
module.exports = gobble( 'src' )
	.transform( 'prosecco', {
		accept: ['.js', '.jsx', '.jsnext'],
		ext: ['.small.js']
		// Any other Prosecco options go here
	} );
```

## License

```
"THE BEER-WARE LICENSE":
<ivan@sanchezortega.es> wrote this file. As long as you retain this notice you
can do whatever you want with this stuff. If we meet some day, and you think
this stuff is worth it, you can buy me a beer in return.
```
