const profile = require('./src/profile')
const util = require('util')

profile('danielmontteiro')
  .then((data) => {
    console.log(util.inspect(data, true, 10, true))
  })
  .catch((err) => {
    console.log(err)
  })
