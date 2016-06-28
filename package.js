Package.describe({
  name: 'baberuth22:google-geocode',
  version: '0.0.9',
  summary: 'Calls Google geocode API converting address into latitude, longitude, or address object.',
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
