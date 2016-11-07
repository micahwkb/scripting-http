('use strict')

const https = require('https')

function getAndPrintHTMLChunks () {
  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  }
  https.get(requestOptions, function(response) {
    response.setEncoding('utf8')
    response.on('err', function(err) {
      console.log("Error! -", err + '\n')
    })
    response.on('data', function(data) {
      console.log('Received Chunk of length:', data.length + '\n')
      console.log(data + '\n')
    })
    response.on('end', function() {
      console.log('Stream complete!\n')
    })
  })
}

getAndPrintHTMLChunks();

module.exports {
  getAndPrintHTMLChunks: getAndPrintHTMLChunks
}