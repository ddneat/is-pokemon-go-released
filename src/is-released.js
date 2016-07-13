const appId = /id1094591345/;
const searchTerm = 'pokemongo';

const appStoreUrl = (country) => (
  `https://itunes.apple.com/search?term=${searchTerm}&country=${country}&entity=software`
);

module.exports = (fetch) => (country) =>
  fetch(appStoreUrl(country))
    .then(response => {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.text();
    })
    .then(text => !!text.match(appId))
;
