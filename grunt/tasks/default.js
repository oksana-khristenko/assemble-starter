module.exports = function(grunt) {
  grunt.registerTask('default', [
    'build:newer',
    'connect:build',
    'watch'
  ]);
};