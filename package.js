Package.describe({
  name: 'new3rs:current-visitors',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'monitoring each number of current visitors per page',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.use('mongo');
  api.use('iron:router');
  api.addFiles('current-visitors-experts.js');
  api.addFiles('current-visitors-server.js', 'server');
  api.addFiles('current-visitors-common.js');
  api.addFiles('current-visitors-client.js', 'client');
  api.export('currentVisitors');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('new3rs:current-visitors');
  api.addFiles('new3rs:current-visitors-tests.js');
});
