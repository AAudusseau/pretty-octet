/* globals describe */
/* globals it */

require('should');

var prettyOctet = require('./../index');

describe('Pretty Octet', function() {

  describe('Format NaN input', function() {
    it('should return "Input value is not a number"', function() {
      prettyOctet.format('test').should.equal('Input value is not a number');
      prettyOctet.format({}).should.equal('Input value is not a number');
      prettyOctet.format().should.equal('Input value is not a number');
      prettyOctet.format([0,1,2]).should.equal('Input value is not a number');
    });
  });

  describe('Format wrong options', function() {
    it('should return "round options must be between 0 and 20"', function() {
      prettyOctet.format(12, {
        round: -1
      }).should.equal('round options must be between 0 and 20');
    });
  });

  describe('Format -2548 octet', function() {
    it('should return "A size must be positive"', function() {
      prettyOctet.format(-1).should.equal('A size must be positive');
    });
  });

  describe('Format 0 octet', function() {
    it('should return "0 octet"', function() {
      prettyOctet.format(0).should.equal('0 octet(s)');
    });
  });

  describe('Format 12 octets', function() {
    it('should return "12 octet(s)"', function() {
      prettyOctet.format(12).should.equal('12 octet(s)');
    });
  });

  describe('Format 1568 octets', function() {
    it('should return "12 kio"', function() {
      prettyOctet.format(1568).should.equal('2 kio');
    });
  });

  describe('Format 5489654 octets', function() {
    it('should return "5 Mio"', function() {
      prettyOctet.format(5489654).should.equal('5 Mio');
    });
  });

  describe('Format 5489654 octets with round equal 3', function() {
    it('should return "5.235 Mio"', function() {
      prettyOctet.format(5489654, {
        round: 3
      }).should.equal('5.235 Mio');
    });
  });

  describe('Format 5489654 octets with suf equal false', function() {
    it('should return "5"', function() {
      prettyOctet.format(5489654, {
        suf: false
      }).should.equal('5');
    });
  });

});
