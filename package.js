Package.describe({
  name: 'baberuth22:google-geocode',
  version: '0.0.7',
  summary: 'Calls Googles geocode API converting GPS lat and lng to physical address',
  git: 'https://github.com/baberuth22/google-geocode',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.4.1');
  api.use([
    'http'
  ]);
  api.addFiles('google-geocode.js');
  api.export('geocode', ['client', 'server']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('baberuth22:google-geocode');
  api.addFiles('google-geocode-tests.js');
});
