'use strict';

module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: 'dist',
      src: ['**/*']
    }]
  },
  public: {
    files: [{
      expand: true,
      cwd: 'public',
      src: ['**/*']
    }]
  },
  examples: {
    files: [{
      expand: true,
      cwd: 'app',
      src: [
        'content/examples/**/*',
        'assets/css/examples/**/*',
        'assets/js/examples/**/*',
        'partials/example/**/*',
        'layouts/examples.hbs'
      ]
    }]
  }
};