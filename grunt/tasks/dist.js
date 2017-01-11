module.exports = function(grunt) {
  grunt.registerTask('dist', [
    'clean:dist',
    'assemble:dist',
    'htmlmin:dist',
    'postcss:dist',
    'cssmin:dist',
    'svgstore:dist',
    'copy:vendorJsDist',
    'svgmin:dist',
    'jshint:all',
    'jscs:all',
    'browserify:dist',
    'uglify:dist',
    'copy:imagesDist',
    'copy:downloadDist'
  ]);
};