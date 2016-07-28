const fetch = require('isomorphic-fetch');
const createRequest = require('./request');
const createIsReleased = require('./is-released');

const request = createRequest(fetch);
const isReleased = createIsReleased(request);

module.exports = (country) => isReleased(country);
