const appId = 'id1094591345';
const matcher = /action view-in-itunes/;

const appStoreUrl = (country) => (
  `https://itunes.apple.com/${country}/app/pokemon-go/${appId}`
);

module.exports = request => country =>
  request(appStoreUrl(country))
    .then(result => !!result.match(matcher));
