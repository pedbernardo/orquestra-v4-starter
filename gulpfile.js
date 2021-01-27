const { parallel } = require('gulp')

const mocks = require('./gulp/tasks/mocks')
const form = require('./gulp/tasks/form')
const scripts = require('./gulp/tasks/scripts')
const styles = require('./gulp/tasks/styles')
const watch = require('./gulp/tasks/watch')

exports.mocks = mocks
exports.form = form
exports.scripts = scripts
exports.styles = styles
exports.watch = watch

exports.build = parallel(scripts, styles, form)
exports.default = parallel(mocks, watch)
