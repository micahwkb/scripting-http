('use strict')
const getHTML = require('../http-functions')
const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
}

module.exports = function print_1337(input) {
  console.log(input.replace(/e/ig, 3).replace(/l/ig, 1).replace(/t/ig, 7).replace(/s/ig, 5).replace(/a/gi, 4).replace(/o/gi, 0).replace(/ck/g, "x").replace(/er/g, "0r").replace(/you/gi, "j00"))
}

