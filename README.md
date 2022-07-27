# streams-proto

This repository contains all protocol buffers for the gRPC api of the streams service.

## usage

1. git clone this project:

```shell
git clone git@github.com:Becklyn-Studios/streams-proto.git ./.pb
```

2. generate code from the cloned files (golang example for clientchannel):

```shell
protoc \
	--proto_path=./.pb/clientchannel \
	--go_out=./src \
	--go-grpc_out=./src \
	--go_opt=module=github.com/Becklyn-Studios/streams-proto \
	--go-grpc_opt=module=github.com/Becklyn-Studios/streams-proto \
	./.pb/clientchannel/*.proto
```

3. remove cloned data again to keep your project clean:

```shell
rm -rf ./.pb
```

Use this repo as a submodule in the project that uses these protocol buffers.
Alternative: curl the contents of project into your project.

## components

### backchannel

Contains all proto files for internal comunication of the streams service.

### clientchannel

Contains all proto files for client comunication of the streams service.
