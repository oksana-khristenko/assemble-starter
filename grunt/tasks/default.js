module.exports = function(grunt) {
  grunt.registerTask('default', [
    'build:newer',
    'connect',
    'watch'
  ]);
};