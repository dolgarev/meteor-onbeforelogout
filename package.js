Package.describe({
  name: 'liberation:meteor-onbeforelogout',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'This package realizes callback function onBeforeLogout.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/dolgarev/meteor-onbeforelogout',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.5.2');
  api.use(['ecmascript', 'underscore'], 'client');
  api.mainModule('meteor-onbeforelogout.js', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('liberation:meteor-onbeforelogout');
  api.mainModule('meteor-onbeforelogout-tests.js');
});
