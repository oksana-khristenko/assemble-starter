'use strict';

module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: 'app/assets/svg',
      src: ['**/*.svg', '!sprites/**/*.svg'],
      dest: 'dist/assets/svg'
    }]
  }
};