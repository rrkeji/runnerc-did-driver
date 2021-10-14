# runnerc-did-driver

Driver for the Runnerc DID methods to be used in the [Universal Resolver](https://github.com/decentralized-identity/universal-resolver). The Docker image is hosted on Docker Hub here:

<https://hub.docker.com/r/rrkeji/uni-resolver-driver-did-runnerc/>

The file `src/server.js` is an small Express Node app acting as a thin wrapper around the [Javascript DID resolver](https://github.com/decentralized-identity/did-resolver). It listens to port 8081.

The following DID methods are supported:

* [runnerc](https://github.com/decentralized-identity/runnerc-did-resolver)

## Curl Tests

Run service with 
```
npm start
```

then run queries

```
curl -X GET http://localhost:8081/1.0/identifiers/did:runnerc:0x3b0BC51Ab9De1e5B7B6E34E5b960285805C41736
```

## Example DIDs

* `did:runnerc:0x3b0BC51Ab9De1e5B7B6E34E5b960285805C41736`
