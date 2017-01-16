'use strict';

module.exports = {
  build: {
    options: {
      hostname: '0.0.0.0',
      livereload: true,
      port: 4001,
      base: 'public/'
    }
  },
  dist: {
    options: {
      hostname: '0.0.0.0',
      livereload: false,
      port: 4001,
      base: 'dist/',
      keepalive:true
    }
  }
};