"use strict";

var tz = require("../../").tz;
var moment = require('../../index');

var guess = tz.prototype.guess;
var now = Date.prototype.now;

exports.getNextTransition = {
  setUp : function (done) {
    tz.prototype.guess = 'America/New_York';
    Date.now = function() { return 1361481581996 };
    done();
  },

  tearDown : function (done) {
    tz.prototype.guess = guess;
    Date.now = now;
    done();
  },

  "returns moment object with the date of next transition date relative to the moment or date object given as argument" : function (test) {
    var resultWithDate = tz.getNextTransition(new Date(1461481581996));
    test.equal(resultWithDate.valueOf(), 1478412000000);

    var resultWithMoment = tz.getNextTransition(moment(1461481581996));
    test.equal(resultWithMoment.valueOf(), 1478412000000);

    test.done();
  },

  "when no argument is given, returns moment object with the date of next transition date relative to current time" : function (test) {
    var result = tz.getNextTransition();
    test.equal(result.valueOf(), 1362898800000);

    test.done();
  }
};

exports.getPreviousTransition = {
  setUp : function (done) {
    tz.prototype.guess = 'America/New_York';
    Date.now = function() { return 1361481581996 };
    done();
  },

  tearDown : function (done) {
    tz.prototype.guess = guess;
    Date.now = now;
    done();
  },

  "returns moment object with the date of previous transition date relative to the moment or date object given as argument" : function (test) {
    var resultWithDate = tz.getPreviousTransition(new Date(1461481581996));
    test.equal(resultWithDate.valueOf(), 1457852400000);

    var resultWithMoment = tz.getPreviousTransition(moment(1461481581996));
    test.equal(resultWithMoment.valueOf(), 1457852400000);

    test.done();
  },

  "when no argument is given, returns moment object with the date of previous transition date relative to current time" : function (test) {
    var result = tz.getPreviousTransition();
    test.equal(result.valueOf(), 1352008800000);

    test.done();
  }
};
