# streams-proto

This repository contains all protocol buffers for the gRPC api of the streams service.

## Usage

### Install go package

```bash
go get -u github.com/fraym-work/streams-proto/go/v5
```

## Development

1. change .proto files
2. run `make proto`

## Components

### Backchannel

Contains all proto files for internal comunication of the streams service.

### Clientchannel

Contains all proto files for client comunication of the streams service.

## Explanations

- You can also leave the tenant_id empty. Apps should consider empty tenant_ids as global events
- In a DDD context: topic = app identifier: You can listen to events of multiple apps, but you do not have to listen to all (performance)
- In a DDD context: aggregate_id + aggregate_type = stream
