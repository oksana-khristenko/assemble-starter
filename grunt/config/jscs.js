module.exports = {
  all: {
    options: {
      config: 'grunt/rc/.jscsrc'
    },
    src: [
      'app/assets/js/**/*.js',
      '!app/assets/js/vendor/**/*.js'
    ]
  }
};