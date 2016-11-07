('use strict')

const getHTML = require('../http-functions')

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
}

function print_lowercase(input) {
  console.log(input.toLowerCase())
}

getHTML(requestOptions, print_lowercase)