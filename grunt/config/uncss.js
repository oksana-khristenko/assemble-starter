module.exports = {
  options: {
    ignore: [
      /[.]{1}no-js/,
      /[.]{1}js/
    ],
    report: 'gzip'
  },
  dist: {
    files: {
      'dist/assets/css/main.css': ['dist/**/*.html']
    }
  }
};