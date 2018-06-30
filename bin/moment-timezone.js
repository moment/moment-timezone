#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var moment = require('../moment-timezone-utils');
var data = require('../data/unpacked/latest.json');
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
        source = fs.readFileSync(path.join(MOMENT_TIMEZONE_DIR, 'moment-timezone.js')).toString(),
        years = yearRange.split('-'),
        start  = years[0],
        end    = years[1],
        destDir;
    
    if (destination) {
        destDir = path.isAbsolute(destination) ? destination : path.join(process.cwd(), destination);
    } else {
        destDir = path.join(MOMENT_TIMEZONE_DIR, 'builds');
    }
    if (!fs.existsSync(destDir)) {
        console.error('Directory ' + destDir + ' does not exist');
        process.exit(1);
    }
    
    var destFile = path.join(destDir, fileName);
    console.log('Building ' + fileName);
    
    data = moment.tz.filterLinkPack(data, start, end);
    data = JSON.stringify(data, null, '\t');
    data = data.split('\n').join('\n\t');
    data = 'loadData(' + data + ');\n';
    source = source.replace('// INJECT DATA', data);
    
    try {
        fs.writeFileSync(destFile, source);
        console.log('Successfully created ' + fileName + ' (' + getFileSize(destFile) + 'Kb)');
        console.log('Full path: ' + destFile);
        process.exit(0);
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}

function getFileSize(file){
    var stats = fs.statSync(file);
    return Math.floor(stats.size  / 1000.0);
}
