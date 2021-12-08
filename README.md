# runnerc-did-driver

Driver for the Runnerc DID methods to be used in the [Universal Resolver](https://github.com/decentralized-identity/universal-resolver). The Docker image is hosted on Docker Hub here:

<https://hub.docker.com/rrkeji/uni-resolver-driver-did-runnerc/>

The file `src/server.js` is an small Express Node app acting as a thin wrapper around the [Javascript DID resolver](https://github.com/decentralized-identity/did-resolver). It listens to port 8081.

The following DID methods are supported:

* [runnerc](https://github.com/rrkeji/runnerc-did-resolver)

## Curl Tests

Run service with 
```
npm start
```

then run queries

```
curl -X GET http://localhost:8081/1.0/identifiers/did:runnerc:main:WRfXPg8dantKVubE3HX8pw
```

## Example DIDs

* `did:runnerc:main:WRfXPg8dantKVubE3HX8pw`
