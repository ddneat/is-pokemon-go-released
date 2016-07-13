const isReleased = require('../src/');

isReleased(process.env.npm_config_country || 'de').then(result => {
  if (result) {
    console.log('Yes!');
    return;
  }
  console.log('Nope.');
});
