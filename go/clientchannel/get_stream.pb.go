// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        v3.21.5
// source: clientchannel/get_stream.proto

package clientchannel

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

type GetStreamRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	TenantId string `protobuf:"bytes,1,opt,name=tenant_id,json=tenantId,proto3" json:"tenant_id,omitempty"`
	Stream   string `protobuf:"bytes,2,opt,name=stream,proto3" json:"stream,omitempty"`
}

func (x *GetStreamRequest) Reset() {
	*x = GetStreamRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_clientchannel_get_stream_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetStreamRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetStreamRequest) ProtoMessage() {}

func (x *GetStreamRequest) ProtoReflect() protoreflect.Message {
	mi := &file_clientchannel_get_stream_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetStreamRequest.ProtoReflect.Descriptor instead.
func (*GetStreamRequest) Descriptor() ([]byte, []int) {
	return file_clientchannel_get_stream_proto_rawDescGZIP(), []int{0}
}

func (x *GetStreamRequest) GetTenantId() string {
	if x != nil {
		return x.TenantId
	}
	return ""
}

func (x *GetStreamRequest) GetStream() string {
	if x != nil {
		return x.Stream
	}
	return ""
}

type GetStreamResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Events []*PublishEventEnvelope `protobuf:"bytes,1,rep,name=events,proto3" json:"events,omitempty"`
}

func (x *GetStreamResponse) Reset() {
	*x = GetStreamResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_clientchannel_get_stream_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetStreamResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetStreamResponse) ProtoMessage() {}

func (x *GetStreamResponse) ProtoReflect() protoreflect.Message {
	mi := &file_clientchannel_get_stream_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetStreamResponse.ProtoReflect.Descriptor instead.
func (*GetStreamResponse) Descriptor() ([]byte, []int) {
	return file_clientchannel_get_stream_proto_rawDescGZIP(), []int{1}
}

func (x *GetStreamResponse) GetEvents() []*PublishEventEnvelope {
	if x != nil {
		return x.Events
	}
	return nil
}

var File_clientchannel_get_stream_proto protoreflect.FileDescriptor

var file_clientchannel_get_stream_proto_rawDesc = []byte{
	0x0a, 0x1e, 0x63, 0x6c, 0x69, 0x65, 0x6e, 0x74, 0x63, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x2f,
	0x67, 0x65, 0x74, 0x5f, 0x73, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x12, 0x0d, 0x63, 0x6c, 0x69, 0x65, 0x6e, 0x74, 0x63, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x1a,
	0x19, 0x63, 0x6c, 0x69, 0x65, 0x6e, 0x74, 0x63, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x2f, 0x65,
	0x76, 0x65, 0x6e, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x47, 0x0a, 0x10, 0x47, 0x65,
	0x74, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1b,
	0x0a, 0x09, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x08, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x49, 0x64, 0x12, 0x16, 0x0a, 0x06, 0x73,
	0x74, 0x72, 0x65, 0x61, 0x6d, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x73, 0x74, 0x72,
	0x65, 0x61, 0x6d, 0x22, 0x42, 0x0a, 0x11, 0x47, 0x65, 0x74, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x2d, 0x0a, 0x06, 0x65, 0x76, 0x65, 0x6e,
	0x74, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x15, 0x2e, 0x50, 0x75, 0x62, 0x6c, 0x69,
	0x73, 0x68, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x45, 0x6e, 0x76, 0x65, 0x6c, 0x6f, 0x70, 0x65, 0x52,
	0x06, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_clientchannel_get_stream_proto_rawDescOnce sync.Once
	file_clientchannel_get_stream_proto_rawDescData = file_clientchannel_get_stream_proto_rawDesc
)

func file_clientchannel_get_stream_proto_rawDescGZIP() []byte {
	file_clientchannel_get_stream_proto_rawDescOnce.Do(func() {
		file_clientchannel_get_stream_proto_rawDescData = protoimpl.X.CompressGZIP(file_clientchannel_get_stream_proto_rawDescData)
	})
	return file_clientchannel_get_stream_proto_rawDescData
}

var file_clientchannel_get_stream_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_clientchannel_get_stream_proto_goTypes = []interface{}{
	(*GetStreamRequest)(nil),     // 0: clientchannel.GetStreamRequest
	(*GetStreamResponse)(nil),    // 1: clientchannel.GetStreamResponse
	(*PublishEventEnvelope)(nil), // 2: PublishEventEnvelope
}
var file_clientchannel_get_stream_proto_depIdxs = []int32{
	2, // 0: clientchannel.GetStreamResponse.events:type_name -> PublishEventEnvelope
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_clientchannel_get_stream_proto_init() }
func file_clientchannel_get_stream_proto_init() {
	if File_clientchannel_get_stream_proto != nil {
		return
	}
	file_clientchannel_event_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_clientchannel_get_stream_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetStreamRequest); i {
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
		file_clientchannel_get_stream_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetStreamResponse); i {
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
			RawDescriptor: file_clientchannel_get_stream_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_clientchannel_get_stream_proto_goTypes,
		DependencyIndexes: file_clientchannel_get_stream_proto_depIdxs,
		MessageInfos:      file_clientchannel_get_stream_proto_msgTypes,
	}.Build()
	File_clientchannel_get_stream_proto = out.File
	file_clientchannel_get_stream_proto_rawDesc = nil
	file_clientchannel_get_stream_proto_goTypes = nil
	file_clientchannel_get_stream_proto_depIdxs = nil
}
