'use strict';

module.exports = {
  all: {
    options: {
      jshintrc: 'grunt/rc/.jshintrc'
    },
    src: [
      'app/assets/js/**/*.js',
      '!app/assets/js/vendor/**/*.js'
    ]
  }
};