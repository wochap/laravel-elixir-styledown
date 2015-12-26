## Laravel Elixir Styledown

This Laravel Elixir extension allows you to compile [styledown](https://github.com/styledown/styledown).

## Installation
First, pull in the extension through NPM.

```sh
$ npm install --save-dev laravel-elixir-styledown
```

Next, add it to your Elixir-enhanced Gulpfile, like so:

```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-styledown');

elixir(function(mix) {
  mix.styledown('components/button.md');
});
```

Don't forget create a [config.md](https://github.com/styledown/styledown#step-2-configure) and that's it! You're all set to go!

## Usage

Assuming you write...

```javascript
elixir(function(mix) {
  mix.styledown('components/button.md');
});
```

...this will take `resources/assets/styledown/config.md` as configuration and compile your `resources/assets/styledown/components/button.md` file to `./public/styledown/styledown.html`.

If you'd like to set a different output directory, you may pass a second argument to the `styledown()` method, like so:

```javascript
mix.styledown('components/button.md', 'public/docs/button.html');

```

Finally, if you want to override the Styledown plugin options, you may pass an object as the third argument.

```javascript
mix.styledown('components/button.md', 'public/docs/button.html', {});

// See options at: https://www.npmjs.com/package/gulp-styledown#options
```

## Default Options

```javascript
{
  src: 'resources/assets/styledown', // Path to src files
  config: 'resources/assets/styledown/config.md', // Path to config.md
  filename: 'styledown.html', // output filename
  dest: './public/styledown' // Path to output folder
}
```
