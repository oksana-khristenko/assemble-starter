module.exports = function(grunt) {
  grunt.registerTask('build', [
    'clean:public',
    'svgstore:build',
    'assemble:build',
    'copy:svgBuild',
    'copy:vendorJsBuild',
    'postcss:build',
    'jshint:all',
    'jscs:all',
    'browserify:build',
    'copy:imagesBuild',
    'copy:downloadBuild'
  ]);
};