# streams-proto

This repository contains all protocol buffers for the gRPC api of the streams service.

## usage

1. git clone this project:

```shell
git clone git@github.com:fraym-work/streams-proto.git ./.pb
```

2. generate code from the cloned files
3. remove cloned data again to keep your project clean:

```shell
rm -rf ./.pb
```

## components

### backchannel

Contains all proto files for internal comunication of the streams service.

### clientchannel

Contains all proto files for client comunication of the streams service.

## Explanations

- You can also leave the tenant_id empty. Apps should consider empty tenant_ids as global events
- In a DDD context: topic = app identifier: You can listen to events of multiple apps, but you do not have to listen to all (performance)
- In a DDD context: aggregate_id + aggregate_type = stream
