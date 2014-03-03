var dist = 'dist/docs';
module.exports = {
  dist: dist,

  //Sources for the docs to reference
  scripts: [
    'http://ajax.googleapis.com/ajax/libs/angularjs/1.2.12/angular.js',
    'http://ajax.googleapis.com/ajax/libs/angularjs/1.2.12/angular-cookies.js',
    'http://ajax.googleapis.com/ajax/libs/angularjs/1.2.12/angular-resource.js',
    'http://ajax.googleapis.com/ajax/libs/angularjs/1.2.12/angular-route.js',
    'http://ajax.googleapis.com/ajax/libs/angularjs/1.2.12/angular-sanitize.js',
    'http://ajax.googleapis.com/ajax/libs/angularjs/1.2.12/angular-animate.js',
    '/js/angular-bootstrap/bootstrap.js',
    '/js/angular-bootstrap/bootstrap-prettify.js',
    '/js/angular-bootstrap/dropdown-toggle.js',
    '/js/lunr/lunr.js',
    '/js/marked/lib/marked.js',
    '/js/google-code-prettify/src/prettify.js',
    '/js/google-code-prettify/src/lang-css.js',
    '/js/versions-data.js',
    '/js/pages-data.js',
    '/js/docs.js'
  ],
  stylesheets: [
    'http://cdn.optimizely.com/js/595530035.js',
    'http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css',
    '/css/site.css',
    '/css/prettify-theme.css',
    '/css/docs.css',
    '/css/animations.css'
  ],
  copy: {
    css: {
      src: ['config/docs/css/**/*.css'],
      dest: dist + '/css/'
    },
    js: {
      src: ['config/docs/js/**/*'],
      dest: dist + '/js'
    }
  }
};
