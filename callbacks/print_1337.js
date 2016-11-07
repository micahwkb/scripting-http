('use strict')
const getHTML = require('../http-functions')

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
}

function print_1337(input) {
  console.log(input.replace(/you/gi, "j00").replace(/er/g, "0r").replace(/e/ig, 3).replace(/l/ig, 1).replace(/t/ig, 7).replace(/s/ig, 5).replace(/a/gi, 4).replace(/o/gi, 0).replace(/ck/g, "x"))
}

getHTML(requestOptions, print_1337)