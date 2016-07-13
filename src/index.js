const fetch = require('isomorphic-fetch');
const createIsReleased = require('./is-released');

const isReleased = createIsReleased(fetch);

module.exports = (country) => isReleased(country);
