('use strict')

const https = require('https')

const requestOptions = {
  host: 'example.com',
  path: '/'
}

https.get(requestOptions, function (response) {
  response.setEngoding('utf8')
  response.on('data', function (data) {
    console.log('Chunk Received. Length:', data.length)
  })
  response.on('end', function() {
    console.log('Response stream complete.')
  })
})