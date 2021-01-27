const gulp = require('gulp')
const livereload = require('gulp-livereload')
const scripts = require('./scripts')
const styles = require('./styles')
const form = require('./form')
const config = require('../config')

module.exports = function watch (done) {
  livereload.listen()

  gulp.watch(config.watch.styles, styles)
  gulp.watch(config.watch.scripts, scripts)
  gulp.watch(config.watch.form, form)

  done()
}
