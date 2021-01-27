exports.watch = {
  scripts: './src/js/**/*.js',
  styles: './src/styles/**/*.scss',
  form: './src/form/**/*.html'
}

exports.scripts = {
  bundles: [
    {
      input: 'src/js/main.js',
      dest: 'public/app.js',
      build: 'dist/app.min.js'
    },
    {
      input: 'src/js/report.js',
      dest: 'public/report.js',
      build: 'dist/report.min.js'
    }
  ],
  output: {
    sourcemap: true,
    format: 'cjs'
  }
}

exports.styles = {
  entry: './src/styles/main.scss',
  output: 'styles.css',
  build: 'styles.min.css',
  dest: process.env.NODE_ENV === 'production'
    ? './dist'
    : './public'
}

exports.form = {
  entry: './src/form/form.html',
  partials: './src/form/partials',
  dest: './dist'
}

exports.mocks = {
  port: 1234,
  delayInMs: 1000,
  dbFile: './mocks/db.json',
  path: '/mocks/api'
}
