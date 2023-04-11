// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.30.0
// 	protoc        v3.21.12
// source: clientchannel/log.proto

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

type LogRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	TenantId      string `protobuf:"bytes,1,opt,name=tenant_id,json=tenantId,proto3" json:"tenant_id,omitempty"`
	Stream        string `protobuf:"bytes,2,opt,name=stream,proto3" json:"stream,omitempty"`
	CorrelationId string `protobuf:"bytes,3,opt,name=correlation_id,json=correlationId,proto3" json:"correlation_id,omitempty"`
}

func (x *LogRequest) Reset() {
	*x = LogRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_clientchannel_log_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *LogRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*LogRequest) ProtoMessage() {}

func (x *LogRequest) ProtoReflect() protoreflect.Message {
	mi := &file_clientchannel_log_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use LogRequest.ProtoReflect.Descriptor instead.
func (*LogRequest) Descriptor() ([]byte, []int) {
	return file_clientchannel_log_proto_rawDescGZIP(), []int{0}
}

func (x *LogRequest) GetTenantId() string {
	if x != nil {
		return x.TenantId
	}
	return ""
}

func (x *LogRequest) GetStream() string {
	if x != nil {
		return x.Stream
	}
	return ""
}

func (x *LogRequest) GetCorrelationId() string {
	if x != nil {
		return x.CorrelationId
	}
	return ""
}

type LogResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	TenantId string      `protobuf:"bytes,1,opt,name=tenant_id,json=tenantId,proto3" json:"tenant_id,omitempty"`
	Logs     []*LogEvent `protobuf:"bytes,2,rep,name=logs,proto3" json:"logs,omitempty"`
}

func (x *LogResponse) Reset() {
	*x = LogResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_clientchannel_log_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *LogResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*LogResponse) ProtoMessage() {}

func (x *LogResponse) ProtoReflect() protoreflect.Message {
	mi := &file_clientchannel_log_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use LogResponse.ProtoReflect.Descriptor instead.
func (*LogResponse) Descriptor() ([]byte, []int) {
	return file_clientchannel_log_proto_rawDescGZIP(), []int{1}
}

func (x *LogResponse) GetTenantId() string {
	if x != nil {
		return x.TenantId
	}
	return ""
}

func (x *LogResponse) GetLogs() []*LogEvent {
	if x != nil {
		return x.Logs
	}
	return nil
}

type LogEvent struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id               string           `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Type             string           `protobuf:"bytes,2,opt,name=type,proto3" json:"type,omitempty"`
	Stream           string           `protobuf:"bytes,3,opt,name=stream,proto3" json:"stream,omitempty"`
	CorrelationId    string           `protobuf:"bytes,4,opt,name=correlation_id,json=correlationId,proto3" json:"correlation_id,omitempty"`
	CausationId      string           `protobuf:"bytes,5,opt,name=causation_id,json=causationId,proto3" json:"causation_id,omitempty"`
	RaisedAt         int64            `protobuf:"varint,6,opt,name=raised_at,json=raisedAt,proto3" json:"raised_at,omitempty"`
	Payload          map[string]*Data `protobuf:"bytes,7,rep,name=payload,proto3" json:"payload,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	Reason           string           `protobuf:"bytes,8,opt,name=reason,proto3" json:"reason,omitempty"`
	ConsumedByGroups []string         `protobuf:"bytes,9,rep,name=consumedByGroups,proto3" json:"consumedByGroups,omitempty"`
}

func (x *LogEvent) Reset() {
	*x = LogEvent{}
	if protoimpl.UnsafeEnabled {
		mi := &file_clientchannel_log_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *LogEvent) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*LogEvent) ProtoMessage() {}

func (x *LogEvent) ProtoReflect() protoreflect.Message {
	mi := &file_clientchannel_log_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use LogEvent.ProtoReflect.Descriptor instead.
func (*LogEvent) Descriptor() ([]byte, []int) {
	return file_clientchannel_log_proto_rawDescGZIP(), []int{2}
}

func (x *LogEvent) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *LogEvent) GetType() string {
	if x != nil {
		return x.Type
	}
	return ""
}

func (x *LogEvent) GetStream() string {
	if x != nil {
		return x.Stream
	}
	return ""
}

func (x *LogEvent) GetCorrelationId() string {
	if x != nil {
		return x.CorrelationId
	}
	return ""
}

func (x *LogEvent) GetCausationId() string {
	if x != nil {
		return x.CausationId
	}
	return ""
}

func (x *LogEvent) GetRaisedAt() int64 {
	if x != nil {
		return x.RaisedAt
	}
	return 0
}

func (x *LogEvent) GetPayload() map[string]*Data {
	if x != nil {
		return x.Payload
	}
	return nil
}

func (x *LogEvent) GetReason() string {
	if x != nil {
		return x.Reason
	}
	return ""
}

func (x *LogEvent) GetConsumedByGroups() []string {
	if x != nil {
		return x.ConsumedByGroups
	}
	return nil
}

var File_clientchannel_log_proto protoreflect.FileDescriptor

var file_clientchannel_log_proto_rawDesc = []byte{
	0x0a, 0x17, 0x63, 0x6c, 0x69, 0x65, 0x6e, 0x74, 0x63, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x2f,
	0x6c, 0x6f, 0x67, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0d, 0x63, 0x6c, 0x69, 0x65, 0x6e,
	0x74, 0x63, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x1a, 0x19, 0x63, 0x6c, 0x69, 0x65, 0x6e, 0x74,
	0x63, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x2f, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x22, 0x68, 0x0a, 0x0a, 0x4c, 0x6f, 0x67, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x12, 0x1b, 0x0a, 0x09, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x49, 0x64, 0x12, 0x16,
	0x0a, 0x06, 0x73, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06,
	0x73, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x12, 0x25, 0x0a, 0x0e, 0x63, 0x6f, 0x72, 0x72, 0x65, 0x6c,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d,
	0x63, 0x6f, 0x72, 0x72, 0x65, 0x6c, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x22, 0x57, 0x0a,
	0x0b, 0x4c, 0x6f, 0x67, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x1b, 0x0a, 0x09,
	0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x08, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x49, 0x64, 0x12, 0x2b, 0x0a, 0x04, 0x6c, 0x6f, 0x67,
	0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x63, 0x6c, 0x69, 0x65, 0x6e, 0x74,
	0x63, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x2e, 0x4c, 0x6f, 0x67, 0x45, 0x76, 0x65, 0x6e, 0x74,
	0x52, 0x04, 0x6c, 0x6f, 0x67, 0x73, 0x22, 0xf4, 0x02, 0x0a, 0x08, 0x4c, 0x6f, 0x67, 0x45, 0x76,
	0x65, 0x6e, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x74, 0x72, 0x65, 0x61,
	0x6d, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x73, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x12,
	0x25, 0x0a, 0x0e, 0x63, 0x6f, 0x72, 0x72, 0x65, 0x6c, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x69,
	0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x63, 0x6f, 0x72, 0x72, 0x65, 0x6c, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x12, 0x21, 0x0a, 0x0c, 0x63, 0x61, 0x75, 0x73, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x63, 0x61,
	0x75, 0x73, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x12, 0x1b, 0x0a, 0x09, 0x72, 0x61, 0x69,
	0x73, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x06, 0x20, 0x01, 0x28, 0x03, 0x52, 0x08, 0x72, 0x61,
	0x69, 0x73, 0x65, 0x64, 0x41, 0x74, 0x12, 0x3e, 0x0a, 0x07, 0x70, 0x61, 0x79, 0x6c, 0x6f, 0x61,
	0x64, 0x18, 0x07, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x24, 0x2e, 0x63, 0x6c, 0x69, 0x65, 0x6e, 0x74,
	0x63, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x2e, 0x4c, 0x6f, 0x67, 0x45, 0x76, 0x65, 0x6e, 0x74,
	0x2e, 0x50, 0x61, 0x79, 0x6c, 0x6f, 0x61, 0x64, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x07, 0x70,
	0x61, 0x79, 0x6c, 0x6f, 0x61, 0x64, 0x12, 0x16, 0x0a, 0x06, 0x72, 0x65, 0x61, 0x73, 0x6f, 0x6e,
	0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x72, 0x65, 0x61, 0x73, 0x6f, 0x6e, 0x12, 0x2a,
	0x0a, 0x10, 0x63, 0x6f, 0x6e, 0x73, 0x75, 0x6d, 0x65, 0x64, 0x42, 0x79, 0x47, 0x72, 0x6f, 0x75,
	0x70, 0x73, 0x18, 0x09, 0x20, 0x03, 0x28, 0x09, 0x52, 0x10, 0x63, 0x6f, 0x6e, 0x73, 0x75, 0x6d,
	0x65, 0x64, 0x42, 0x79, 0x47, 0x72, 0x6f, 0x75, 0x70, 0x73, 0x1a, 0x41, 0x0a, 0x0c, 0x50, 0x61,
	0x79, 0x6c, 0x6f, 0x61, 0x64, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65,
	0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x1b, 0x0a, 0x05,
	0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x05, 0x2e, 0x44, 0x61,
	0x74, 0x61, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x62, 0x06, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_clientchannel_log_proto_rawDescOnce sync.Once
	file_clientchannel_log_proto_rawDescData = file_clientchannel_log_proto_rawDesc
)

func file_clientchannel_log_proto_rawDescGZIP() []byte {
	file_clientchannel_log_proto_rawDescOnce.Do(func() {
		file_clientchannel_log_proto_rawDescData = protoimpl.X.CompressGZIP(file_clientchannel_log_proto_rawDescData)
	})
	return file_clientchannel_log_proto_rawDescData
}

var file_clientchannel_log_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_clientchannel_log_proto_goTypes = []interface{}{
	(*LogRequest)(nil),  // 0: clientchannel.LogRequest
	(*LogResponse)(nil), // 1: clientchannel.LogResponse
	(*LogEvent)(nil),    // 2: clientchannel.LogEvent
	nil,                 // 3: clientchannel.LogEvent.PayloadEntry
	(*Data)(nil),        // 4: Data
}
var file_clientchannel_log_proto_depIdxs = []int32{
	2, // 0: clientchannel.LogResponse.logs:type_name -> clientchannel.LogEvent
	3, // 1: clientchannel.LogEvent.payload:type_name -> clientchannel.LogEvent.PayloadEntry
	4, // 2: clientchannel.LogEvent.PayloadEntry.value:type_name -> Data
	3, // [3:3] is the sub-list for method output_type
	3, // [3:3] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_clientchannel_log_proto_init() }
func file_clientchannel_log_proto_init() {
	if File_clientchannel_log_proto != nil {
		return
	}
	file_clientchannel_event_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_clientchannel_log_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*LogRequest); i {
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
		file_clientchannel_log_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*LogResponse); i {
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
		file_clientchannel_log_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*LogEvent); i {
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
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_clientchannel_log_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_clientchannel_log_proto_goTypes,
		DependencyIndexes: file_clientchannel_log_proto_depIdxs,
		MessageInfos:      file_clientchannel_log_proto_msgTypes,
	}.Build()
	File_clientchannel_log_proto = out.File
	file_clientchannel_log_proto_rawDesc = nil
	file_clientchannel_log_proto_goTypes = nil
	file_clientchannel_log_proto_depIdxs = nil
}