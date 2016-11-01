## Bugs

If you are submitting a bug, please create a [jsfiddle](http://jsfiddle.net/)
demonstrating the issue before opening a ticket on GitHub.

## Contributing

Fork the library, install grunt, and install dependencies.
Note that all pull requests will require a CLA.

```
npm install -g grunt-cli
npm install
```

Additions to `moment-timezone.js` or `moment-timezone-utils.js` should have matching tests in
`/tests/moment-timezone/`.

## Running tests

```sh
grunt nodeunit       # run all tests
grunt nodeunit:core  # run all core tests
grunt nodeunit:zones # run all zone tests
```

If all the tests are passing, submit a pull request.

## Compiling data

There are several steps to compiling the timezone data. These have all been
bundled into one grunt task to make releases easy.

Besides the `node`, `npm`, and `grunt` dependencies, there are also a few unix
dependencies.

`curl`, `tar`, `zic`, and `zdump` are all required.

```
which curl tar zic zdump
```

To compile the latest iana release, run `grunt data`.

To compile a specific tagged release, run `grunt data:2014d`, replacing `2014d`
with the desired release tag.

The compilation process involves 7 steps. For each of the steps, a tag name can
be passed to grunt. If no tag name was passed, it defaults to the latest release.

### 1. Download data from iana.org/time-zones.

```
grunt data-download:2014d
```

This downloads the data to `temp/curl/2014d/data.tar.gz` and unzips into
`temp/download/2014d`.

### 2. Compile the data to a binary format using `zic(8)`

```
grunt data-zic:2014d
```

This compiles each of the source files in the `temp/download/2014d` folder to
`temp/zic/2014d`.

### 3. Dump the changes from the binary format into a text format using `zdump(8)`.

```
grunt data-zdump:2014d
```

This dumps a list of timezone changes for each zone in `temp/zic/2014d` to
`temp/zdump/2014d`.

> For each zone, print the time at the lowest possible time value, the time one
> day after the lowest possible time value, the times both one second before and
> exactly at each detected time discontinuity, the time at one day less than the
> highest possible time value, and the time at the highest possible time value.
>
> via `man zdump`

### 4. Collect the changes into a single JSON file.

```
grunt data-collect:2014d
```

The output from `zdump(8)` looks like this.

```
America/Los_Angeles  Sun Mar  9 09:59:59 2014 UTC = Sun Mar  9 01:59:59 2014 PST isdst=0
America/Los_Angeles  Sun Mar  9 10:00:00 2014 UTC = Sun Mar  9 03:00:00 2014 PDT isdst=1
America/Los_Angeles  Sun Nov  2 08:59:59 2014 UTC = Sun Nov  2 01:59:59 2014 PDT isdst=1
America/Los_Angeles  Sun Nov  2 09:00:00 2014 UTC = Sun Nov  2 01:00:00 2014 PST isdst=0
```

The `data-collect` task takes all the dumped zones, converts them to
moment-timezone's unpacked format, collects them into one object, and saves them
to `temp/collect/2014b.json`.

```
    ...
}, {
    "name": "America/Los_Angeles",
    "abbrs": [..."PST", "PDT", "PDT", "PST"...],
    "untils": [...1604221199000, 1604221200000, 1615715999000, 1615716000000...],
    "offsets": [...480, 420, 420, 480...]
}, {
    "name": "America/Louisville",
    ...
```

### 5. Remove duplicate entries.

```
grunt data-dedupe:2014d
```

`zdump(8)` prints a line for the times _one second before_ and _exactly at_
each time discontinuity. In order to save space, we remove the
_one second before_ entries.

The output is saved in `data/unpacked/2014d.json`. This is the first file in the
process that is committed to git. Steps 1-4 are stored in an ignored `temp/`
directory.

### 6. Pack the data into the compressed format.

```
grunt data-pack:2014d
```

Pack each zone in `data/unpacked/2014d.json` and save in `data/packed/2014d.json`.

```
// unpacked
{
    "name"    : "America/Phoenix",
    "abbrs"   : ["MST", "MDT", "MST", "MDT", "MST", "MWT", "MST", "MWT", "MST", "MDT", "MST"],
    "untils"  : [-1633273200000, -1615132800000, -1601823600000, -1583683200000, -880210800000, -820519140000, -812653140000, -796845540000, -84380400000, -68659200000, null],
    "offsets" : [420, 360, 420, 360, 420, 360, 420, 360, 420, 360, 420]
}

// packed
"America/Phoenix|MST MDT MWT|70 60 60|01010202010|-261r0 1nX0 11B0 1nX0 SgN0 4Al1 Ap0 1db0 SWqX 1cL0"
```

### 7. Extract zone & country meta data

```
grunt data-meta:2014d
```

This task creates a JSON file containing list of timezones and countries. The extracted meta data can be used to list all timezones, list all countries, and filter zones by a country.

The output is saved in `data/meta/2014d.json`

Sample output:

```
{
    "countries": {
        "AD": {
            "name": "Andorra",
            "abbr": "AD",
            "zones": [
                "Europe/Andorra"
            ]
        },
        "AE": {
            "name": "United Arab Emirates",
            "abbr": "AE",
            "zones": [
                "Asia/Dubai"
            ]
        },
        ...
    },
    "zones": {
        "Europe/Andorra": {
            "name": "Europe/Andorra",
            "lat": 42.5,
            "long": 1.5167,
            "countries": [
                "AD"
            ],
            "comments": ""
        },
        "Asia/Dubai": {
            "name": "Asia/Dubai",
            "lat": 25.3,
            "long": 55.3,
            "countries": [
                "AE",
                "OM"
            ],
            "comments": ""
        },
        ...
    }
}
```

### 8. Build tests for each zone.

```
grunt data-tests
```

This task does not support tagged releases, and is only run on the latest
timezone data.

Reads data from `temp/collect/latest.json` and constructs unit tests for each
zone. This uses `temp/collect/latest.json` instead of `data/unpacked/latest.json`
in order to test both the times _one second before_ and _exactly at_
each time discontinuity.

### All tasks

For sanity, all these tasks are bundled into one task. This is the preferred way
to compile the data.

```
grunt data       # run tasks 1-8 on the latest release
grunt data:2014c # run tasks 1-7 on the 2014c release
grunt data:2014d # run tasks 1-7 on the 2014d release
```

















