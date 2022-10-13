# v5.1.0

- (feature) Move generated go code directly to this repository

# v5.0.1

- (bug) Do not use a gRPC stream to return the events of a stream

# v5.0.0

- (bc) Remove `aggregat_type` field from `Event`
- (bc) Remove `aggregat_id` field from `Event`
- (feature) Add `stream` field to `Event`
- (feature) Add `GetStream` service rpc call

# v4.0.0

- (bc) Remove locking

# v3.1.0

- (feature) Add `GetEventsFromStart` rpc to clientchannel

# v3.0.1

- (bug) Fix `clientchannel.Response`: add `PublishEventEnvelope`
- (bug) Fix typo in `clientchannel.PublishAction`

# v3.0.0

- (bc) Transactional publishing of multiple events
- (bc) Multitenancy

# v2.1.0

- (feature) Add `SnapshotAction` with corresponding ack messages to clientchannel

# v2.0.0

- (bc) Replace `Event` by new `SubscribedEvent` in `clientchannel.Response`

# v1.0.2

- (bug) Remove go_package option
- (bug) Fix imports

# v1.0.1

- (bug) Fix go_package option
- (internal) Improve `README.md`

# v1.0.0

- (feature) Add clientchannel
- (feature) Add backchannel
