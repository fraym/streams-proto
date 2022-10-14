#! /bin/bash
rm -rf ./src

cd ..

grpc_tools_node_protoc \
	--plugin=protoc-gen-ts=./nodejs/node_modules/.bin/protoc-gen-ts \
	--ts_out=grpc_js:./nodejs \
	--js_out=import_style=commonjs,binary:./nodejs \
	--grpc_out=grpc_js:./nodejs \
	clientchannel/*.proto

cd nodejs
