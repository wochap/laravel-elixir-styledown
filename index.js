var gulp = require('gulp')
var styledown = require('gulp-styledown')
var Elixir = require('laravel-elixir')
var _ = require('underscore')

var config = Elixir.config

/*
 |----------------------------------------------------------------
 | Gulp Styledown
 |----------------------------------------------------------------
 |
 | This task will generate CSS styleguides.
 | You can pass your custom options.
 |
 */

Elixir.extend('styledown', function (src, output, options) {
  config.styledown = {
    folder: 'styledown',
    outputFolder: 'styledown'
  }

  var paths = prepGulpPaths(src, output)

  options = _.extend({
    src: paths.src.path, // Path to src files
    config: config.get('assets.styledown.folder') + '/config.md', // Path to config.md
    filename: paths.output.name, // output filename
    dest: paths.output.baseDir // Path to output folder
  }, options)

  new Elixir.Task('styledown', function () {
    this.log(paths.src, paths.output) // Log src and output

    return gulp.src(options.src)
      .pipe(styledown(options))
      .pipe(gulp.dest(options.dest))
      .pipe(new Elixir.Notification('Styledown Compiled!'))
  })
  .watch(config.get('assets.styledown.folder') + '/**/*.md')
})

/**
 * Prep the Gulp src and output paths.
 *
 * @param  {string|array} src
 * @param  {string|null}  output
 * @return {object}
 */
var prepGulpPaths = function (src, output) {
  return new Elixir.GulpPaths()
    .src(src, config.get('assets.styledown.folder'))
    .output(output || config.get('public.styledown.outputFolder'), 'styledown.html')
}
