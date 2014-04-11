var moment = require("../index");

exports["manipulate"] = {
  "add" : function (t) {
    t.equal(
      moment('2012-10-28 00:00:00+01:00').tz('Europe/London').add('days', 1).format(),
      '2012-10-29T00:00:00+00:00',
      "adding 1 day while crossing a DST boundary should not affect time (BST -> GMT).");
    t.equal(
      moment('2013-11-03T00:00:00-07:00').tz('America/Los_Angeles').add(1, 'day').format(),
      "2013-11-04T00:00:00-08:00",
      "adding 1 day while crossing a DST boundary should not affect time (PDT-> PST).");
    t.equal(
      moment("2014-03-09T00:00:00-08:00").tz('America/Los_Angeles').add(1, 'day').format(),
      "2014-03-10T00:00:00-07:00",
      "adding 1 day while crossing a DST boundary should not affect time (PST -> PDT).");
    t.done();
  },
  "subtract" : function (t) {
    t.equal(
      moment('2012-10-29T00:00:00+00:00').tz('Europe/London').subtract('days', 1).format(),
      '2012-10-28T00:00:00+01:00',
      "subtracting 1 day while crossing a DST boundary should not affect time (GMT -> BST).");
    t.equal(
      moment("2013-11-04T00:00:00-08:00").tz('America/Los_Angeles').subtract(1, 'day').format(),
      '2013-11-03T00:00:00-07:00',
      "adding 1 day while crossing a DST boundary should not affect time (PST -> PDT).");
    t.equal(
      moment("2014-03-10T00:00:00-07:00").tz('America/Los_Angeles').subtract(1, 'day').format(),
      "2014-03-09T00:00:00-08:00",
      "adding 1 day while crossing a DST boundary should not affect time (PDT -> PST).");
    t.done();
  },
  "month" : function (t) {
    t.equal(
      moment("2014-03-09T00:00:00-08:00").tz('America/Los_Angeles').add(1, 'month').format(),
      "2014-04-09T00:00:00-07:00",
      "adding 1 month while crossing a DST boundary should not affect time (PST -> PDT).");
    t.equal(
      moment("2014-03-09T00:00:00-08:00").tz('America/Los_Angeles').month("April").format(),
      "2014-04-09T00:00:00-07:00",
      "setting month across a DST boundary should not affect time (PST -> PDT).");

    t.done();
  }

};
