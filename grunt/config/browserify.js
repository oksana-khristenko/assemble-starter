'use strict';

var babelConfig = require('../rc/.babelrc');

var getFiles = dest => {
  return [{
    expand: true,
    cwd: 'app/assets/js/',
    src: ['**/*.js', '!modules/**/*.js', '!vendor/**/*.js'],
    dest: `${dest}/assets/js`
  }];
};

module.exports = {
  options: {
    transform: [
      'hbsfy',
      ['babelify', babelConfig]
    ],
  },
  build: {
    files: getFiles('public'),
    options: {
      browserifyOptions: {
        debug: true
      }
    }
  },
  dist: {
    files: getFiles('dist')
  }
};