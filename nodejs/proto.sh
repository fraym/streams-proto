#! /bin/bash
rm -rf ./src

cd ..

protoc \
	--plugin=./nodejs/node_modules/.bin/protoc-gen-ts_proto \
	--ts_proto_out=./nodejs \
	--ts_proto_opt=esModuleInterop=true \
	--ts_proto_opt=env=node \
	--ts_proto_opt=oneof=unions \
	clientchannel/*.proto

cd nodejs
