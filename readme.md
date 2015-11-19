## Laravel Elixir Styledown

Laravel Elixir Styledown with [styledown](https://github.com/st44100/gulp-styledown)

## Install
```sh
$ npm install laravel-elixir-styledown --save-dev
```

## Usage

Example:

```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-styledown');

elixir(function(mix) {
   mix.styledown(options);
});
```

## Options
- src : Path to styledown.md
- config : Path to config.md
- filename : Path to output html
- dest : Path to gulp dest

Other options are pass to [styledown](https://github.com/styledown/styledown).

##Default Options

```javascript
{
	src     : '/path/to/styledown/*.md',
	config  : '/path/to/config.md', // Path to config.md
	filename: 'output.html', // Path to output html
	dest    : 'paht/to/'
}
```
