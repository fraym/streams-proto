# streams-proto

This repository contains all protocol buffers for the gRPC api of the streams service.

## Usage

### Install go package

```bash
go get -u github.com/fraym-work/streams-proto/go/v5
```

### Install nodejs package

```bash
npm i @fraym/streams-proto
```

## Development

1. change .proto files
2. run `make proto`
3. ensure that you export all services and requests in `nodejs/src/index.ts`
4. run `make build`
5. adjust CHANGELOG.md and commit all your changes
6. release nodejs code by executing `make publish-nodejs`
7. release go code by creating a new git release with a tag in the form of `go/v1.0.0` (the prefix `go/` is important)

## Components

### Backchannel

Contains all proto files for internal comunication of the streams service.

### Clientchannel

Contains all proto files for client comunication of the streams service.

## Explanations

- You can also leave the tenant_id empty. Apps should consider empty tenant_ids as global events
- In a DDD context: topic = app identifier: You can listen to events of multiple apps, but you do not have to listen to all (performance)
- In a DDD context: aggregate_id + aggregate_type = stream
