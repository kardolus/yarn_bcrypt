const http = require('http')
const leftpad = require('leftpad')
const bcrypt = require('bcrypt');
const port = process.env.PORT || 8080

const requestHandler = (request, response) => {
  response.end("Hello, World!")
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  bcrypt.hash('myPassword', 10, function(err, hash) {
    console.log('inside of hash method')
  });

  console.log(`server is listening on ${port}`)
})
