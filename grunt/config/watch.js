module.exports = {
  configFiles: {
    files: [ 'Gruntfile.js', 'grunt/**/*'],
    options: {
      reload: true
    }
  },
  clean: ['public'],
  options: {
    nospawn: true,
    livereload: {
      port: 35730
    }
  },
  livereload: {
    files: ['public/**/*']
  },
  css: {
    files: ['app/**/*.css'],
    tasks: ['postcss:build']
  },
  images: {
    files: ['app/**/img/**/*'],
    tasks: ['copy:imagesBuild']
  },
  svgsprites: {
    files: ['app/assets/svg/sprites/**/*.svg'],
    tasks: ['svgstore:build']
  },
  svg: {
    files: ['app/assets/svg/**/*.svg', '!app/assets/svg/sprites/**/*.svg'],
    tasks: ['copy:svgBuild']
  },
  scripts: {
    files: ['app/assets/js/**/*'],
    tasks: ['jshint:all', 'jscs:all', 'browserify:build']
  },
  html: {
    files: [
      'app/**/*.html'
    ],
    tasks: ['copy:htmlBuild']
  }
};