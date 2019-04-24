const profile = require('./src/profile')
const media = require('./src/media')

function scrapProfile (req, res) {
  profile(req.query.username)
    .then((data) => {
      console.log(data)
      res.status(200).json(data)
    })
    .catch(err => {
      console.error(err)
      if (err.statusCode) return res.sendStatus(err.statusCode)
      res.status(500).send(err)
    })
}

function scrapMedia (req, res) {
  media(req.query.shortcode)
    .then((data) => {
      console.log(data)
      res.status(200).json(data)
    })
    .catch(err => {
      console.error(err)
      if (err.statusCode) return res.sendStatus(err.statusCode)
      res.status(500).send(err)
    })
}

module.exports = {
  scrapProfile,
  scrapMedia
}
