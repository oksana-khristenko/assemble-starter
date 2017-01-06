'use strict';

var getImageFiles = dest => {
  return {
    cwd: 'app/assets/img',
    src: ['**/*'],
    dest: `${dest}/assets/img`,
    expand: true
  };
};

var getSvgFiles = dest => {
  return {
    cwd: 'app/assets/svg',
    src: ['**/*.svg', '!sprites/**/*.svg'],
    dest: `${dest}/assets/svg`,
    expand: true
  };
};

module.exports = {
  imagesBuild: getImageFiles('public'),
  imagesDist: getImageFiles('dist'),
  svgBuild: getSvgFiles('public')
};