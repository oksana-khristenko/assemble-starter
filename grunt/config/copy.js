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

var getDownloadFiles = dest => {
  return {
    cwd: 'app/download',
    src: ['**/*'],
    dest: `${dest}/download`,
    expand: true
  };
};

var getVendorJsFiles = dest => {
  return {
    cwd: 'app/assets/js/vendor',
    src: ['**/*'],
    dest: `${dest}/assets/js/vendor`,
    expand: true
  };
};

module.exports = {
  imagesBuild: getImageFiles('public'),
  imagesDist: getImageFiles('dist'),
  svgBuild: getSvgFiles('public'),
  downloadBuild: getDownloadFiles('public'),
  downloadDist: getDownloadFiles('dist'),
  vendorJsBuild: getVendorJsFiles('public'),
  vendorJsDist: getVendorJsFiles('dist')
};