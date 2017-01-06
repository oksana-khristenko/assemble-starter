'use strict';

module.exports = {
  optimise: {
    options: {
      quitAfter: false
    },
    files: [{
      expand: true,
      cwd: 'app/',
      src: ['**/*.{png,jpg,gif}'],
      dest: 'app/'
    }]
  }
};