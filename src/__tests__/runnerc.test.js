var app = require('../app')
var request = require('supertest')

describe('did:runnerc driver', () => {
  it('responds with didResolutionResult for did:runnerc:main:WRfXPg8dantKVubE3HX8pw', async () => {
    expect.assertions(5)
    const did = 'did:runnerc:main:WRfXPg8dantKVubE3HX8pw'
    const response = await request(app).get(`/1.0/identifiers/${did}`)
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('didDocument')
    expect(response.body.didDocument).toHaveProperty('authentication')
    expect(response.body).toHaveProperty('didDocumentMetadata')
    expect(response.body.didResolutionMetadata).toEqual({
      contentType: 'application/did+ld+json'
    })
  })

  it('responds with notFound error for unknown DID', async () => {
    // expect.assertions(1)
    const did = 'did:runnerc:main:WRfXPg8dantK6ubE3HX8pw'
    const response = await request(app).get(`/1.0/identifiers/${did}`)
    expect(response.status).toBe(200)
    expect(response.body.didDocument).toBe(null)
    expect(response.body.didResolutionMetadata).toEqual({
      error: 'notFound',
      message:
        'DID must resolve to a valid https URL containing a JSON document: FetchError: reason: getaddrinfo ENOTFOUND WRfXPg8dantK6ubE3HX8pw'
    })
  })
})
