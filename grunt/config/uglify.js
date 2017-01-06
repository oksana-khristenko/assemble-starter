'use strict';

var getFiles = dest => {
  return [{
    expand: true,
    cwd: `${dest}/assets/js`,
    src: '**/*.js',
    dest: `${dest}/assets/js`
  }];
};

module.exports = {
  dist: {
    options: {
      compress: {
        dead_code: true,
        drop_console: true
      },
      mangle: {
        except: ['jQuery']
      },
    },
    files: getFiles('dist')
  }
};