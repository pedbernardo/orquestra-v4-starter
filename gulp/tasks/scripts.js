const livereload = require('gulp-livereload')
const rollup = require('rollup')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const { terser } = require('rollup-plugin-terser')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'

const bundler = ({ input, dest, build }) =>
  rollup
    .rollup({
      input,
      plugins: [nodeResolve()]
    })
    .then(bundle =>
      bundle.write({
        file: isProduction ? build : dest,
        plugins: isProduction ? [terser()] : [],
        ...config.scripts.output
      })
    )

module.exports = async function scripts (done) {
  const bundles = config.scripts.bundles
    .map(bundler)

  await Promise.all(bundles)

  livereload.reload()

  return done()
}
