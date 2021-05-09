const { tokens, types, richness } = require('./lib/tokenizer.js');
const concordance = require('./lib/concordance.js');
const { n_gram, clusters } = require('./lib/n_gram.js');

module.exports = { tokens, types, richness, concordance, n_gram, clusters };