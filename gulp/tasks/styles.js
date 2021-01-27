const { src, dest } = require('gulp')
const rename = require('gulp-rename')
const sass = require('gulp-sass')
const sassCompiler = require('sass')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')
const cssnano = require('gulp-cssnano')
const gulpif = require('gulp-if')
const livereload = require('gulp-livereload')
const config = require('../config')

const isProduction = process.env.NODE_ENV === 'production'

sass.compiler = sassCompiler

module.exports = function styles () {
  return src(config.styles.entry)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpif(
      isProduction,
      rename(config.styles.build),
      rename(config.styles.output)
    ))
    .pipe(gulpif(
      isProduction,
      cssnano()
    ))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(config.styles.dest))
    .pipe(livereload())
}
