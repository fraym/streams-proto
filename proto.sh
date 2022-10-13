#! /bin/bash
for filename in ./backchannel/*.proto; do
	params="$params --go_opt=Mbackchannel/$(basename $filename)=github.com/fraym-work/streams-proto/go/v5/backchannel"
	params="$params --go-grpc_opt=Mbackchannel/$(basename $filename)=github.com/fraym-work/streams-proto/go/v5/backchannel"
done

for filename in ./clientchannel/*.proto; do
	params="$params --go_opt=Mclientchannel/$(basename $filename)=github.com/fraym-work/streams-proto/go/v5/clientchannel"
	params="$params --go-grpc_opt=Mclientchannel/$(basename $filename)=github.com/fraym-work/streams-proto/go/v5/clientchannel"
done

protoc \
  --proto_path=./ \
	--go_out=./go/ \
	--go-grpc_out=./go/ \
	${params[@]} \
	--go_opt=module=github.com/fraym-work/streams-proto/go/v5 \
	--go-grpc_opt=module=github.com/fraym-work/streams-proto/go/v5 \
	**/*.proto
