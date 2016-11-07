('use strict')
const getHTML = require('../http-functions')

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
}

function print_uppercase(input) {
  console.log(input.toUpperCase())
}

getHTML(requestOptions, print_uppercase)