var getAssembleFiles = function(dest) {
  return [
    {
      expand: true,
      cwd: 'app/content/',
      src: ['**/*.hbs'],
      dest: `${dest}/`
    }
  ];
};

module.exports = {
  options: {
    project: {
      name: 'Project name', // e.g. Twitter
      key: 'project key', // e.g. twitter.com
      url: 'https://project-url/', // e.g. https://twitter.com/
      urlNoSlash: 'https://project-url', // e.g. https://twitter.com
      displayUrl: 'project-url', // e.g. twitter.com
      startYear: '2016' // e.g. 2016
    },
    googleAnalytics: {
      id: '',
      domain: '' // e.g. twitter.com
    },
    layoutdir: 'app/layouts',
    partials: ['app/partials/**/*.hbs'],
    data: ['app/data/**/*.{json,yml}'],
    helpers: 'app/helpers/**/*.js'
  },
  build: {
    options: {
      assets: 'public/assets',
      enableGa: false,
      showDrafts: true
    },
    files: getAssembleFiles('public')
  },
  dist: {
    options: {
      assets: 'dist/assets',
      enableGa: false,
      showDrafts: true
    },
    files: getAssembleFiles('dist')
  }
};