// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        v3.21.5
// source: clientchannel/event.proto

package clientchannelpb

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type PublishEventEnvelope struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	TenantId string `protobuf:"bytes,1,opt,name=tenant_id,json=tenantId,proto3" json:"tenant_id,omitempty"`
	Topic    string `protobuf:"bytes,2,opt,name=topic,proto3" json:"topic,omitempty"`
	Event    *Event `protobuf:"bytes,3,opt,name=event,proto3" json:"event,omitempty"`
}

func (x *PublishEventEnvelope) Reset() {
	*x = PublishEventEnvelope{}
	if protoimpl.UnsafeEnabled {
		mi := &file_clientchannel_event_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PublishEventEnvelope) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PublishEventEnvelope) ProtoMessage() {}

func (x *PublishEventEnvelope) ProtoReflect() protoreflect.Message {
	mi := &file_clientchannel_event_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PublishEventEnvelope.ProtoReflect.Descriptor instead.
func (*PublishEventEnvelope) Descriptor() ([]byte, []int) {
	return file_clientchannel_event_proto_rawDescGZIP(), []int{0}
}

func (x *PublishEventEnvelope) GetTenantId() string {
	if x != nil {
		return x.TenantId
	}
	return ""
}

func (x *PublishEventEnvelope) GetTopic() string {
	if x != nil {
		return x.Topic
	}
	return ""
}

func (x *PublishEventEnvelope) GetEvent() *Event {
	if x != nil {
		return x.Event
	}
	return nil
}

type EventEnvelope struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	TenantId  string `protobuf:"bytes,1,opt,name=tenant_id,json=tenantId,proto3" json:"tenant_id,omitempty"`
	Broadcast bool   `protobuf:"varint,2,opt,name=broadcast,proto3" json:"broadcast,omitempty"`
	Event     *Event `protobuf:"bytes,3,opt,name=event,proto3" json:"event,omitempty"`
}

func (x *EventEnvelope) Reset() {
	*x = EventEnvelope{}
	if protoimpl.UnsafeEnabled {
		mi := &file_clientchannel_event_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *EventEnvelope) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*EventEnvelope) ProtoMessage() {}

func (x *EventEnvelope) ProtoReflect() protoreflect.Message {
	mi := &file_clientchannel_event_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use EventEnvelope.ProtoReflect.Descriptor instead.
func (*EventEnvelope) Descriptor() ([]byte, []int) {
	return file_clientchannel_event_proto_rawDescGZIP(), []int{1}
}

func (x *EventEnvelope) GetTenantId() string {
	if x != nil {
		return x.TenantId
	}
	return ""
}

func (x *EventEnvelope) GetBroadcast() bool {
	if x != nil {
		return x.Broadcast
	}
	return false
}

func (x *EventEnvelope) GetEvent() *Event {
	if x != nil {
		return x.Event
	}
	return nil
}

type Event struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id            string           `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Type          string           `protobuf:"bytes,2,opt,name=type,proto3" json:"type,omitempty"`
	Stream        string           `protobuf:"bytes,3,opt,name=stream,proto3" json:"stream,omitempty"`
	CorrelationId string           `protobuf:"bytes,4,opt,name=correlation_id,json=correlationId,proto3" json:"correlation_id,omitempty"`
	CausationId   string           `protobuf:"bytes,5,opt,name=causation_id,json=causationId,proto3" json:"causation_id,omitempty"`
	RaisedAt      string           `protobuf:"bytes,6,opt,name=raised_at,json=raisedAt,proto3" json:"raised_at,omitempty"`
	Payload       map[string]*Data `protobuf:"bytes,7,rep,name=payload,proto3" json:"payload,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	Reason        string           `protobuf:"bytes,8,opt,name=reason,proto3" json:"reason,omitempty"`
}

func (x *Event) Reset() {
	*x = Event{}
	if protoimpl.UnsafeEnabled {
		mi := &file_clientchannel_event_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Event) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Event) ProtoMessage() {}

func (x *Event) ProtoReflect() protoreflect.Message {
	mi := &file_clientchannel_event_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Event.ProtoReflect.Descriptor instead.
func (*Event) Descriptor() ([]byte, []int) {
	return file_clientchannel_event_proto_rawDescGZIP(), []int{2}
}

func (x *Event) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Event) GetType() string {
	if x != nil {
		return x.Type
	}
	return ""
}

func (x *Event) GetStream() string {
	if x != nil {
		return x.Stream
	}
	return ""
}

func (x *Event) GetCorrelationId() string {
	if x != nil {
		return x.CorrelationId
	}
	return ""
}

func (x *Event) GetCausationId() string {
	if x != nil {
		return x.CausationId
	}
	return ""
}

func (x *Event) GetRaisedAt() string {
	if x != nil {
		return x.RaisedAt
	}
	return ""
}

func (x *Event) GetPayload() map[string]*Data {
	if x != nil {
		return x.Payload
	}
	return nil
}

func (x *Event) GetReason() string {
	if x != nil {
		return x.Reason
	}
	return ""
}

type Data struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Types that are assignable to Metadata:
	//	*Data_Gdpr
	Metadata isData_Metadata `protobuf_oneof:"metadata"`
	Value    string          `protobuf:"bytes,1,opt,name=value,proto3" json:"value,omitempty"`
}

func (x *Data) Reset() {
	*x = Data{}
	if protoimpl.UnsafeEnabled {
		mi := &file_clientchannel_event_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Data) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Data) ProtoMessage() {}

func (x *Data) ProtoReflect() protoreflect.Message {
	mi := &file_clientchannel_event_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Data.ProtoReflect.Descriptor instead.
func (*Data) Descriptor() ([]byte, []int) {
	return file_clientchannel_event_proto_rawDescGZIP(), []int{3}
}

func (m *Data) GetMetadata() isData_Metadata {
	if m != nil {
		return m.Metadata
	}
	return nil
}

func (x *Data) GetGdpr() *Data_GdprMetadata {
	if x, ok := x.GetMetadata().(*Data_Gdpr); ok {
		return x.Gdpr
	}
	return nil
}

func (x *Data) GetValue() string {
	if x != nil {
		return x.Value
	}
	return ""
}

type isData_Metadata interface {
	isData_Metadata()
}

type Data_Gdpr struct {
	Gdpr *Data_GdprMetadata `protobuf:"bytes,4,opt,name=gdpr,proto3,oneof"`
}

func (*Data_Gdpr) isData_Metadata() {}

type Data_GdprMetadata struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Default string `protobuf:"bytes,3,opt,name=default,proto3" json:"default,omitempty"`
}

func (x *Data_GdprMetadata) Reset() {
	*x = Data_GdprMetadata{}
	if protoimpl.UnsafeEnabled {
		mi := &file_clientchannel_event_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Data_GdprMetadata) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Data_GdprMetadata) ProtoMessage() {}

func (x *Data_GdprMetadata) ProtoReflect() protoreflect.Message {
	mi := &file_clientchannel_event_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Data_GdprMetadata.ProtoReflect.Descriptor instead.
func (*Data_GdprMetadata) Descriptor() ([]byte, []int) {
	return file_clientchannel_event_proto_rawDescGZIP(), []int{3, 0}
}

func (x *Data_GdprMetadata) GetDefault() string {
	if x != nil {
		return x.Default
	}
	return ""
}

var File_clientchannel_event_proto protoreflect.FileDescriptor

var file_clientchannel_event_proto_rawDesc = []byte{
	0x0a, 0x19, 0x63, 0x6c, 0x69, 0x65, 0x6e, 0x74, 0x63, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x2f,
	0x65, 0x76, 0x65, 0x6e, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x67, 0x0a, 0x14, 0x50,
	0x75, 0x62, 0x6c, 0x69, 0x73, 0x68, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x45, 0x6e, 0x76, 0x65, 0x6c,
	0x6f, 0x70, 0x65, 0x12, 0x1b, 0x0a, 0x09, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x5f, 0x69, 0x64,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x49, 0x64,
	0x12, 0x14, 0x0a, 0x05, 0x74, 0x6f, 0x70, 0x69, 0x63, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x05, 0x74, 0x6f, 0x70, 0x69, 0x63, 0x12, 0x1c, 0x0a, 0x05, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x06, 0x2e, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x52, 0x05, 0x65,
	0x76, 0x65, 0x6e, 0x74, 0x22, 0x68, 0x0a, 0x0d, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x45, 0x6e, 0x76,
	0x65, 0x6c, 0x6f, 0x70, 0x65, 0x12, 0x1b, 0x0a, 0x09, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x5f,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74,
	0x49, 0x64, 0x12, 0x1c, 0x0a, 0x09, 0x62, 0x72, 0x6f, 0x61, 0x64, 0x63, 0x61, 0x73, 0x74, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x08, 0x52, 0x09, 0x62, 0x72, 0x6f, 0x61, 0x64, 0x63, 0x61, 0x73, 0x74,
	0x12, 0x1c, 0x0a, 0x05, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x06, 0x2e, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x52, 0x05, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x22, 0xb4,
	0x02, 0x0a, 0x05, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x12, 0x16, 0x0a, 0x06,
	0x73, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x73, 0x74,
	0x72, 0x65, 0x61, 0x6d, 0x12, 0x25, 0x0a, 0x0e, 0x63, 0x6f, 0x72, 0x72, 0x65, 0x6c, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x63, 0x6f,
	0x72, 0x72, 0x65, 0x6c, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x12, 0x21, 0x0a, 0x0c, 0x63,
	0x61, 0x75, 0x73, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x05, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x0b, 0x63, 0x61, 0x75, 0x73, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x12, 0x1b,
	0x0a, 0x09, 0x72, 0x61, 0x69, 0x73, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x06, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x08, 0x72, 0x61, 0x69, 0x73, 0x65, 0x64, 0x41, 0x74, 0x12, 0x2d, 0x0a, 0x07, 0x70,
	0x61, 0x79, 0x6c, 0x6f, 0x61, 0x64, 0x18, 0x07, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x13, 0x2e, 0x45,
	0x76, 0x65, 0x6e, 0x74, 0x2e, 0x50, 0x61, 0x79, 0x6c, 0x6f, 0x61, 0x64, 0x45, 0x6e, 0x74, 0x72,
	0x79, 0x52, 0x07, 0x70, 0x61, 0x79, 0x6c, 0x6f, 0x61, 0x64, 0x12, 0x16, 0x0a, 0x06, 0x72, 0x65,
	0x61, 0x73, 0x6f, 0x6e, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x72, 0x65, 0x61, 0x73,
	0x6f, 0x6e, 0x1a, 0x41, 0x0a, 0x0c, 0x50, 0x61, 0x79, 0x6c, 0x6f, 0x61, 0x64, 0x45, 0x6e, 0x74,
	0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x03, 0x6b, 0x65, 0x79, 0x12, 0x1b, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x05, 0x2e, 0x44, 0x61, 0x74, 0x61, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75,
	0x65, 0x3a, 0x02, 0x38, 0x01, 0x22, 0x7c, 0x0a, 0x04, 0x44, 0x61, 0x74, 0x61, 0x12, 0x28, 0x0a,
	0x04, 0x67, 0x64, 0x70, 0x72, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x12, 0x2e, 0x44, 0x61,
	0x74, 0x61, 0x2e, 0x47, 0x64, 0x70, 0x72, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x48,
	0x00, 0x52, 0x04, 0x67, 0x64, 0x70, 0x72, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x1a, 0x28, 0x0a,
	0x0c, 0x47, 0x64, 0x70, 0x72, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x12, 0x18, 0x0a,
	0x07, 0x64, 0x65, 0x66, 0x61, 0x75, 0x6c, 0x74, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07,
	0x64, 0x65, 0x66, 0x61, 0x75, 0x6c, 0x74, 0x42, 0x0a, 0x0a, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64,
	0x61, 0x74, 0x61, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_clientchannel_event_proto_rawDescOnce sync.Once
	file_clientchannel_event_proto_rawDescData = file_clientchannel_event_proto_rawDesc
)

func file_clientchannel_event_proto_rawDescGZIP() []byte {
	file_clientchannel_event_proto_rawDescOnce.Do(func() {
		file_clientchannel_event_proto_rawDescData = protoimpl.X.CompressGZIP(file_clientchannel_event_proto_rawDescData)
	})
	return file_clientchannel_event_proto_rawDescData
}

var file_clientchannel_event_proto_msgTypes = make([]protoimpl.MessageInfo, 6)
var file_clientchannel_event_proto_goTypes = []interface{}{
	(*PublishEventEnvelope)(nil), // 0: PublishEventEnvelope
	(*EventEnvelope)(nil),        // 1: EventEnvelope
	(*Event)(nil),                // 2: Event
	(*Data)(nil),                 // 3: Data
	nil,                          // 4: Event.PayloadEntry
	(*Data_GdprMetadata)(nil),    // 5: Data.GdprMetadata
}
var file_clientchannel_event_proto_depIdxs = []int32{
	2, // 0: PublishEventEnvelope.event:type_name -> Event
	2, // 1: EventEnvelope.event:type_name -> Event
	4, // 2: Event.payload:type_name -> Event.PayloadEntry
	5, // 3: Data.gdpr:type_name -> Data.GdprMetadata
	3, // 4: Event.PayloadEntry.value:type_name -> Data
	5, // [5:5] is the sub-list for method output_type
	5, // [5:5] is the sub-list for method input_type
	5, // [5:5] is the sub-list for extension type_name
	5, // [5:5] is the sub-list for extension extendee
	0, // [0:5] is the sub-list for field type_name
}

func init() { file_clientchannel_event_proto_init() }
func file_clientchannel_event_proto_init() {
	if File_clientchannel_event_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_clientchannel_event_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PublishEventEnvelope); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_clientchannel_event_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*EventEnvelope); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_clientchannel_event_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Event); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_clientchannel_event_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Data); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_clientchannel_event_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Data_GdprMetadata); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	file_clientchannel_event_proto_msgTypes[3].OneofWrappers = []interface{}{
		(*Data_Gdpr)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_clientchannel_event_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   6,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_clientchannel_event_proto_goTypes,
		DependencyIndexes: file_clientchannel_event_proto_depIdxs,
		MessageInfos:      file_clientchannel_event_proto_msgTypes,
	}.Build()
	File_clientchannel_event_proto = out.File
	file_clientchannel_event_proto_rawDesc = nil
	file_clientchannel_event_proto_goTypes = nil
	file_clientchannel_event_proto_depIdxs = nil
}