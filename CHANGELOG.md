# v6.0.0-alpha.9

- (bug) Fix `raisedAt` parsing in `Event`

# v6.0.0-alpha.8

- (feature) Add `broadcast` flag to `PublishEventEnvelope`

# v6.0.0-alpha.7

- (bc) Send `raised_at` field on `Event` message as int64

# v6.0.0-alpha.6

- (bug) Remove unused fields from `SnapshotStarted` message

# v6.0.0-alpha.5

- (bc) Update org name

# v6.0.0-alpha.4

- (bug) Add `reason` to negative gdpr introduction messages

# v6.0.0-alpha.3

- (bug) Only return `topic` in gdpr introduction messages

# v6.0.0-alpha.2

- (bug) Remove `tenant_id` from gdpr introduction messages

# v6.0.0-alpha.1

- (bc) Restructured ack handling for `PublishEventEnvelope` message to client
- (bc) Restructured ack handling for `IntroduceGdprOnFieldAction`
- (bc) Restructured ack handling for `SnapshotAction`

# v5.4.0-alpha.1

- (feature) Adds actions for GDPR data migration

# v5.3.1

- (bug) Fix nodejs release

# v5.3.0

- (internal) Improve export structure for nodejs
- (feature) Send gdpr id along with published events
- (internal) Improve export structure

# v5.2.0

- (feature) Release as npm package
- (feature) Release as go module

# v5.1.1

- (bug) Fix generated code packages

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
