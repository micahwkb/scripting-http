('use strict')

const getHTML = require('./http-functions')
const uppercase = require('./callbacks/print_uppercase')
const print = require('./callbacks/printHTML')
const lowercase = require('./callbacks/print_lowercase')
const leet = require('./callbacks/print_1337')

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
}


// getHTML(requestOptions, print)
// getHTML(requestOptions, uppercase)
// getHTML(requestOptions, lowercase)
getHTML(requestOptions, leet)