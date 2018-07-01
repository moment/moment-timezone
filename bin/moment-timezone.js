#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var moment = require('../moment-timezone-utils');
var latestData = require('../data/unpacked/latest.json');
var MOMENT_TIMEZONE_DIR = path.join(__dirname, '..');

/**
 * Moment-timezone binary, available commands:
 * moment-timezone --version
 * moment-timezone build 2012-2022 .
 */
var command = process.argv[2];

switch (command) {
    case "--version":
        printVersion();
        break;
    case "build": 
        createBuild(process.argv[3], process.argv[4]);
        break;
    default: 
        printHelp();
}

function printVersion(){
    console.log('moment-timezone version ' + moment.tz.version);
}

function printHelp(){
    console.log('usage: moment-timezone build [yearFrom]-[yearTo] [destination]');
}

/**
 * Creates a moment-timezone build for provided year range
 * @param yearRange (string) for example 2014-2024
 * @param destination (relative or absolute path) directory to put result to
 */
function createBuild(yearRange, destination) {
    'use strict';
    
    if (!(yearRange && /[0-9]{4}-[0-9]{4}/.test(yearRange))) {
        return printHelp();
    }
    var fileName = 'moment-timezone-with-data-' + yearRange + '.js',
        minifiedFileName = 'moment-timezone-with-data-' + yearRange + '.min.js',
        years = yearRange.split('-'),
        start  = years[0],
        end    = years[1];

    console.log('Building ' + fileName);
    
    // define destination directory
    
    var destDir;
    
    if (destination) {
        destDir = path.isAbsolute(destination) ? destination : path.join(process.cwd(), destination);
    } else {
        destDir = path.join(MOMENT_TIMEZONE_DIR, 'builds');
    }
    if (!fs.existsSync(destDir)) {
        console.error('Directory ' + destDir + ' does not exist');
        process.exit(1);
    }
    
    // build full paths of destination files

    var destFile = path.join(destDir, fileName);
    var minifiedDestFile = path.join(destDir, minifiedFileName);
    
    // read source files
    
    var fullContent = fs.readFileSync(path.join(MOMENT_TIMEZONE_DIR, 'moment-timezone.js')).toString();
    var minifiedContent= fs.readFileSync(path.join(MOMENT_TIMEZONE_DIR, 'builds', 'moment-timezone-with-data.min.js')).toString();
    
    // prepare data
    var data = moment.tz.filterLinkPack(latestData, start, end);
    
    try {
        fs.writeFileSync(destFile, putFullData(fullContent, data));
        console.log('Successfully created ' + fileName + ' (' + getFileSize(destFile) + 'Kb)');
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
    
    try {
        fs.writeFileSync(minifiedDestFile, putMinifiedData(minifiedContent, data));
        console.log('Successfully created ' + minifiedFileName + ' (' + getFileSize(minifiedDestFile) + 'Kb)');
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
    
    console.log('Both files are in ' + destDir);
}

function putFullData(fullContent, data){
    'use strict';
    var newData = JSON.stringify(data, null, '\t');
    newData = newData.split('\n').join('\n\t');
    newData = 'loadData(' + newData + ');\n';
    return fullContent.replace('// INJECT DATA', newData);
}

function putMinifiedData(minifiedContent, newData){
    'use strict';
    var oldData = minifiedContent.match(/\(\{version:.*?\}\)/)[0];
    return minifiedContent.replace(oldData, '({' + JSON.stringify(newData) + '})');
}

function getFileSize(file){
    'use strict';
    var stats = fs.statSync(file);
    return Math.floor(stats.size  / 1000.0);
}
