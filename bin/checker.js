#! /usr/bin/env node

'use strict'

const fs = require("fs")
const program = require('commander');

program
    .option('-s, --size <size>', 'images max size', 'GK')
    .option('-f, --file <file>', 'file', 'GK')

const MAXSIZE = program.parse(process.argv).size * 1000 || 300 * 1000;
const file = program.parse(process.argv).file;

fs.stat(file, function (err, stats) {
  if (err) throw err;
  if (stats.size > MAXSIZE) {
    throw file + ' is over' + MAXSIZE + 'bit';
  }
});