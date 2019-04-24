const media = require('./src/media')
const util = require('util')

media('BelpAWxHnQ5')
  .then((data) => {
    console.log(util.inspect(data, true, 10, true))
  })
  .catch((err) => {
    console.log(err)
  })
