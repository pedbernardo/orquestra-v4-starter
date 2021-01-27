const { src, dest } = require('gulp')
const posthtml = require('gulp-posthtml')

const config = require('../config')
const plugins = [
  require('posthtml-include')({ root: config.form.partials })
]

module.exports = function form () {
  return src(config.form.entry)
    .pipe(posthtml(plugins, {}))
    .pipe(dest(config.form.dest))
}
