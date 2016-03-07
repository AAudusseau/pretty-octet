var _  = require('underscore');
var defs = require('./definitions');

var prettyOctet = {};

var defaults = {
  round: 0,
  suf: true,
};

prettyOctet.format = function(octetSize, options) {
  if (!_.isFinite(octetSize)) {
    return 'Input value is not a number';
  }
  if (octetSize < 0) {
    return 'A size must be positive';
  }

  options = _.defaults(options || {}, defaults);

  if (options.round < 0 || options.round > 20) {
    return 'round options must be between 0 and 20';
  }

  var absVal = Math.abs(parseInt(octetSize, 10));

  var defToUse = _.find(defs, function(def) {
    return absVal < def.limit * 1024;
  });

  var out = (octetSize / defToUse.limit).toFixed(options.round);
  if (options.suf) {
    out += ' ' + defToUse.suffix;
  }
  return out;
};

module.exports = prettyOctet;
