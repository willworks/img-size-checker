#! /usr/bin/env node

'use strict'

const fs = require("fs")

const maxsize = process.argv[2] || 300;
const file = process.argv[4] || process.argv[3];

if (!file) throw 'not such file!';
fs.stat(file, (err, stats) => {
  if (err) throw err;
  if (stats.size/1000 > maxsize) {
    const msg = file + ' is over ' + maxsize + 'kb';
    throw msg;
  }
});