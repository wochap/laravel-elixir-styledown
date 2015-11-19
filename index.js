var elixir          = require('laravel-elixir');
var gulp            = require('gulp');
var styledown 		= require('gulp-styledown');
var notify          = require('gulp-notify');
var _               = require('underscore');

var Task = elixir.Task;

/*
 |----------------------------------------------------------------
 | Gulp Styledown
 |----------------------------------------------------------------
 |
 | This task will generate CSS styleguides.
 | You can pass your custom options.
 |
 */

elixir.extend('styledown', function (options) {

    options = _.extend({
		src     : '/path/to/styledown/*.md',
		config  : '/path/to/config.md', // Path to config.md
		filename: 'output.html', // Path to output html
		dest    : 'paht/to/'
    }, options);

    var gulp_src = options.src;
    var gulp_dest = options.dest;

	var styledown_options = options;

    new Task('styledown', function() {
		return gulp.src(gulp_src)
			.pipe(styledown(styledown_options))
			.pipe(gulp.dest(gulp_dest))
			.pipe(notify({
				title: 'Laravel Elixir',
				message: 'Styledown generated!',
				icon: __dirname + '/../laravel-elixir/icons/pass.png'
			}));
    })
    .watch([ options.src ]);

});
