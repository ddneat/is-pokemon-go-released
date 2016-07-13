const appId = 'id1094591345';
const matcher = /action view-in-itunes/;

const appStoreUrl = (country) => (
  `https://itunes.apple.com/${country}/app/pokemon-go/${appId}`
);

module.exports = (fetch) => (country) =>
  fetch(appStoreUrl(country))
    .then(response => {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.text();
    })
    .then(text => !!text.match(matcher))
;
