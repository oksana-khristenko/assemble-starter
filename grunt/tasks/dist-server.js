module.exports = function(grunt) {
  grunt.registerTask('dist-server', [
    'dist',
    'connect:dist'
  ]);
};