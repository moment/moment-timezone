moment-timezone
===============

[![Build Status](https://travis-ci.org/moment/moment-timezone.png)](https://travis-ci.org/moment/moment-timezone)

Timezone information for moment.js.

## After cloning repo

```
git submodule update --init
```

## Updating timezone info

```
git submodule update

sudo zic tz/africa
sudo zic tz/antarctica
sudo zic tz/asia
sudo zic tz/australasia
sudo zic tz/europe
sudo zic tz/northamerica
sudo zic tz/southamerica

grunt zdump
grunt zones

grunt test
```


