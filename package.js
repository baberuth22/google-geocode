Package.describe({
  name: 'baberuth22:google-geocode',
  version: '0.0.6',
  summary: 'Calls Googles geocode API converting GPS lat and lng to physical address',
  git: 'https://github.com/JayMc/meteor-google-geocode',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.4.1');
  api.use([
    'http'
  ]);
  api.addFiles('google-geocode.js');
  api.export('geocode', 'client')
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('jaymc:google-geocode');
  api.addFiles('google-geocode-tests.js');
});
