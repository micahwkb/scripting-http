('use strict')

const https = require('https')

const longerStream = {
  host: "stream-large-file.herokuapp.com",
  path: "/give-me-stuff-now"
};

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
}

function getAndPrintHTML (options) {
  let dataChunks = []
  https.get(options, function(response) {
    response.setEncoding('utf8')
    response.on('err', function(err) {
      console.log("Error! -", err + '\n')
    })
    response.on('data', function(data) {
      console.log('Received Chunk of length:', data.length + '\n')
      dataChunks.push(data)
    })
    response.on('end', function() {
      console.log('Stream complete!\n')
      console.log(dataChunks.join("\n\n---next chunk---\n\n"))
    })
  })
}

// getAndPrintHTML(longerStream)
// getAndPrintHTML(requestOptions)