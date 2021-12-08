const { Resolver } = require('did-resolver')
const runnerc = require('runnerc-did-resolver')

const resolver = new Resolver(
  {
    ...runnerc.getResolver(),
  }
)

const express = require('express')
const app = express()

app.get('/1.0/identifiers/*', function (req, res) {
  const url = req.url
  const regex = /\/1.0\/identifiers\/(did:.*)/
  const did = regex.exec(url)[1]

  console.log('Resolving DID: ' + did)
  console.dir(resolver)

  //
  resolver
    .resolve(did)
    .then((result) => {
      console.log(result)
      res.send(result)
    })
    .catch((err) => {
      if (err.message.match(/(Unsupported DID method:)|(Invalid DID)|(Not a valid ethr DID:)/)) {
        res.status(400).send(err.message)
      } else {
        console.error(err)
        res.status(500).send(err.message)
      }
    })
})

module.exports = app
