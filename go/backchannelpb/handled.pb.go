// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.30.0
// 	protoc        v3.21.12
// source: backchannel/handled.proto

package backchannelpb

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

type HandledRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	TenantId string `protobuf:"bytes,1,opt,name=tenant_id,json=tenantId,proto3" json:"tenant_id,omitempty"`
	Topic    string `protobuf:"bytes,2,opt,name=topic,proto3" json:"topic,omitempty"`
	GroupId  string `protobuf:"bytes,3,opt,name=group_id,json=groupId,proto3" json:"group_id,omitempty"`
	EventId  string `protobuf:"bytes,4,opt,name=event_id,json=eventId,proto3" json:"event_id,omitempty"`
}

func (x *HandledRequest) Reset() {
	*x = HandledRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_backchannel_handled_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *HandledRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*HandledRequest) ProtoMessage() {}

func (x *HandledRequest) ProtoReflect() protoreflect.Message {
	mi := &file_backchannel_handled_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use HandledRequest.ProtoReflect.Descriptor instead.
func (*HandledRequest) Descriptor() ([]byte, []int) {
	return file_backchannel_handled_proto_rawDescGZIP(), []int{0}
}

func (x *HandledRequest) GetTenantId() string {
	if x != nil {
		return x.TenantId
	}
	return ""
}

func (x *HandledRequest) GetTopic() string {
	if x != nil {
		return x.Topic
	}
	return ""
}

func (x *HandledRequest) GetGroupId() string {
	if x != nil {
		return x.GroupId
	}
	return ""
}

func (x *HandledRequest) GetEventId() string {
	if x != nil {
		return x.EventId
	}
	return ""
}

type HandledResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *HandledResponse) Reset() {
	*x = HandledResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_backchannel_handled_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *HandledResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*HandledResponse) ProtoMessage() {}

func (x *HandledResponse) ProtoReflect() protoreflect.Message {
	mi := &file_backchannel_handled_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use HandledResponse.ProtoReflect.Descriptor instead.
func (*HandledResponse) Descriptor() ([]byte, []int) {
	return file_backchannel_handled_proto_rawDescGZIP(), []int{1}
}

var File_backchannel_handled_proto protoreflect.FileDescriptor

var file_backchannel_handled_proto_rawDesc = []byte{
	0x0a, 0x19, 0x62, 0x61, 0x63, 0x6b, 0x63, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x2f, 0x68, 0x61,
	0x6e, 0x64, 0x6c, 0x65, 0x64, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0b, 0x62, 0x61, 0x63,
	0x6b, 0x63, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x22, 0x79, 0x0a, 0x0e, 0x48, 0x61, 0x6e, 0x64,
	0x6c, 0x65, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1b, 0x0a, 0x09, 0x74, 0x65,
	0x6e, 0x61, 0x6e, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x74,
	0x65, 0x6e, 0x61, 0x6e, 0x74, 0x49, 0x64, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x6f, 0x70, 0x69, 0x63,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x74, 0x6f, 0x70, 0x69, 0x63, 0x12, 0x19, 0x0a,
	0x08, 0x67, 0x72, 0x6f, 0x75, 0x70, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x07, 0x67, 0x72, 0x6f, 0x75, 0x70, 0x49, 0x64, 0x12, 0x19, 0x0a, 0x08, 0x65, 0x76, 0x65, 0x6e,
	0x74, 0x5f, 0x69, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x65, 0x76, 0x65, 0x6e,
	0x74, 0x49, 0x64, 0x22, 0x11, 0x0a, 0x0f, 0x48, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x64, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_backchannel_handled_proto_rawDescOnce sync.Once
	file_backchannel_handled_proto_rawDescData = file_backchannel_handled_proto_rawDesc
)

func file_backchannel_handled_proto_rawDescGZIP() []byte {
	file_backchannel_handled_proto_rawDescOnce.Do(func() {
		file_backchannel_handled_proto_rawDescData = protoimpl.X.CompressGZIP(file_backchannel_handled_proto_rawDescData)
	})
	return file_backchannel_handled_proto_rawDescData
}

var file_backchannel_handled_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_backchannel_handled_proto_goTypes = []interface{}{
	(*HandledRequest)(nil),  // 0: backchannel.HandledRequest
	(*HandledResponse)(nil), // 1: backchannel.HandledResponse
}
var file_backchannel_handled_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_backchannel_handled_proto_init() }
func file_backchannel_handled_proto_init() {
	if File_backchannel_handled_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_backchannel_handled_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*HandledRequest); i {
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
		file_backchannel_handled_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*HandledResponse); i {
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
			RawDescriptor: file_backchannel_handled_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_backchannel_handled_proto_goTypes,
		DependencyIndexes: file_backchannel_handled_proto_depIdxs,
		MessageInfos:      file_backchannel_handled_proto_msgTypes,
	}.Build()
	File_backchannel_handled_proto = out.File
	file_backchannel_handled_proto_rawDesc = nil
	file_backchannel_handled_proto_goTypes = nil
	file_backchannel_handled_proto_depIdxs = nil
}
