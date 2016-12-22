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
      preserveComments: 'some'
    },
    files: {
      'dist/assets/js/main.js': ['dist/assets/js/main.js']
    }
  }
};