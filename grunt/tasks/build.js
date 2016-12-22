module.exports = function(grunt) {
  grunt.registerTask('build', [
    'clean:public',
    'svgstore:build',
    'copy:svgBuild',
    'copy:htmlBuild',
    'postcss:build',
    'jshint:all',
    'jscs:all',
    'browserify:build',
    'copy:imagesBuild'
  ]);
};