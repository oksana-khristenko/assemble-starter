'use strict';

var getAssembleFiles = function(dest) {
  return [
    {
      expand: true,
      cwd: 'app/content/',
      src: ['**/*.hbs'],
      dest: `${dest}/`
    }
  ];
};

module.exports = {
  options: {
    layoutdir: 'app/layouts',
    partials: ['app/partials/**/*.hbs'],
    data: ['app/data/**/*.{json,yml}'],
    helpers: 'app/helpers/register-helpers/**/*.js',
    enviromentConfig: '<%= enviromentConfig %>'
  },
  build: {
    options: {
      assets: 'public/assets'
    },
    files: getAssembleFiles('public')
  },
  dist: {
    options: {
      assets: 'dist/assets'
    },
    files: getAssembleFiles('dist')
  }
};