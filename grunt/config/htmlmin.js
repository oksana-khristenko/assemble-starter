'use strict';

module.exports = {
  dist: {
    options: {
      removeComments: true,
      collapseWhitespace: true
    },
    files: [{
      expand: true,
      cwd: 'dist/',
      src: ['**/*.html'],
      dest: 'dist/'
    }]
  }
};