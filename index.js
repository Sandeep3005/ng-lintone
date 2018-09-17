#!/usr/bin/env node

/* eslint-disable no-console */

const shell = require('shelljs');
const fs = require('fs');
const lineReader = require('readline');
const path = require('path');
const yargs = require('./yargs.config');

const { _: commands, name: fileToRead } = yargs.argv;


if (commands[0] !== 'file') {
  throw new Error('Invalid command passed. Please check --help');
}

const filePath = path.join(__dirname, 'output.txt');

// Create nglint file
shell.exec(`ng lint > ${filePath}`);

function readFileLineByLine() {
  // Create input stream
  const readFromHere = lineReader.createInterface({
    input: fs.createReadStream(filePath),
  });

  // List issue in the file
  readFromHere.on('line', (line) => {
    const [errorType, fileName, issue] = line.split(':');
    if (fileName && fileName.includes(fileToRead)) {
      console.log(errorType, fileName, issue);
    }
  });

  // Delete the file
  fs.unlink(filePath, (err) => {
    if (err) return console.log(err);
    console.log('Done.');
  });
}

function afterFileLocated(err) {
  if (err) return console.log(err);
  readFileLineByLine();
}

fs.stat(filePath, afterFileLocated);
