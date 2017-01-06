'use strict';

module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: 'dist/',
      src: ['**/*.css'],
      dest: 'dist/'
    }]
  }
};