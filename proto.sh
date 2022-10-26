#! /bin/bash
for filename in ./backchannel/*.proto; do
	params="$params --go_opt=Mbackchannel/$(basename $filename)=github.com/fraym-work/streams-proto/go/v6/backchannelpb"
	params="$params --go-grpc_opt=Mbackchannel/$(basename $filename)=github.com/fraym-work/streams-proto/go/v6/backchannelpb"
done

for filename in ./clientchannel/*.proto; do
	params="$params --go_opt=Mclientchannel/$(basename $filename)=github.com/fraym-work/streams-proto/go/v6/clientchannelpb"
	params="$params --go-grpc_opt=Mclientchannel/$(basename $filename)=github.com/fraym-work/streams-proto/go/v6/clientchannelpb"
done

protoc \
  --proto_path=./ \
	--go_out=./go/ \
	--go-grpc_out=./go/ \
	${params[@]} \
	--go_opt=module=github.com/fraym-work/streams-proto/go/v6 \
	--go-grpc_opt=module=github.com/fraym-work/streams-proto/go/v6 \
	**/*.proto
