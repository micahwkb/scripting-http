('use strict')

const https = require('https')

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
}

function getHTML (options, callback) {
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
      console.log('Total chunks received:', dataChunks.length)
      callback(dataChunks.join())
      //console.log(dataChunks.join("\n\n---next chunk---\n\n"))
    })
  })
}

function printHTML (html) {
  console.log(html)
}
getHTML(requestOptions, printHTML)