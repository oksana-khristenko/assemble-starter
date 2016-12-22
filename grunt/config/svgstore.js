'use strict';

var getFolders = require('../helpers/folders').getFolders;

function getSpriteFiles(sprites, dest) {
  var obj = {};

  for (let sprite of sprites) {
    obj[`${dest}/assets/svg/${sprite}.svg`] = [`app/assets/svg/sprites/${sprite}/*.svg`];
  }

  return obj;
};

module.exports = {
  options: {
    prefix : 'icon-',
    includedemo: false,
    inheritviewbox: true
  },
  build: {
    files: getSpriteFiles(
      getFolders('app/assets/svg/sprites'),
      'public'
    )
  },
  dist: {
    files: getSpriteFiles(
      getFolders('app/assets/svg/sprites'),
      'dist'
    )
  }
};