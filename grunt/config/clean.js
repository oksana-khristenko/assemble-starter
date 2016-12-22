module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: 'dist',
      src: ['**/*']
    }]
  },
  public: {
    files: [{
      expand: true,
      cwd: 'public',
      src: ['**/*']
    }]
  }
};