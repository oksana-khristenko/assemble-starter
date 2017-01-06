'use strict';

var getFiles = dest => {
  return [{
    expand: true,
    cwd: 'app/assets/css/',
    src: ['**/*.css', '!**/_*.css'],
    dest: `${dest}/assets/css`,
    ext: '.css'
  }];
};

module.exports = {
  options: {
    processors: [
      require('postcss-import')(),
      require('postcss-nested')(),
      require('postcss-mixins')(),
      require('postcss-conditionals')(),
      require('postcss-each')(),
      require('postcss-for')(),
      require('postcss-custom-media')(),
      require('postcss-custom-properties')(),
      require('postcss-custom-selectors')(),
      require('postcss-calc')()
    ]
  },
  build: {
    options: {
      map: false
    },
    files: getFiles('public')
  },
  dist: {
    options: {
      map: false
    },
    files: getFiles('dist')
  }
};