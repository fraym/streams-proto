// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.21.12
// source: clientchannel/service.proto

package clientchannelpb

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// ServiceClient is the client API for Service service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ServiceClient interface {
	Subscribe(ctx context.Context, opts ...grpc.CallOption) (Service_SubscribeClient, error)
	Publish(ctx context.Context, in *PublishRequest, opts ...grpc.CallOption) (*PublishResponse, error)
	GetStream(ctx context.Context, in *GetStreamRequest, opts ...grpc.CallOption) (*GetStreamResponse, error)
	GetEventsFromStart(ctx context.Context, in *GetEventsFromStartRequest, opts ...grpc.CallOption) (Service_GetEventsFromStartClient, error)
	IntroduceGdprOnField(ctx context.Context, in *IntroduceGdprOnFieldRequest, opts ...grpc.CallOption) (*IntroduceGdprOnFieldResponse, error)
	InvalidateGdpr(ctx context.Context, in *InvalidateGdprRequest, opts ...grpc.CallOption) (*InvalidateGdprResponse, error)
	Snapshot(ctx context.Context, in *SnapshotRequest, opts ...grpc.CallOption) (*SnapshotResponse, error)
}

type serviceClient struct {
	cc grpc.ClientConnInterface
}

func NewServiceClient(cc grpc.ClientConnInterface) ServiceClient {
	return &serviceClient{cc}
}

func (c *serviceClient) Subscribe(ctx context.Context, opts ...grpc.CallOption) (Service_SubscribeClient, error) {
	stream, err := c.cc.NewStream(ctx, &Service_ServiceDesc.Streams[0], "/clientchannel.Service/Subscribe", opts...)
	if err != nil {
		return nil, err
	}
	x := &serviceSubscribeClient{stream}
	return x, nil
}

type Service_SubscribeClient interface {
	Send(*SubscribeRequest) error
	Recv() (*SubscribeResponse, error)
	grpc.ClientStream
}

type serviceSubscribeClient struct {
	grpc.ClientStream
}

func (x *serviceSubscribeClient) Send(m *SubscribeRequest) error {
	return x.ClientStream.SendMsg(m)
}

func (x *serviceSubscribeClient) Recv() (*SubscribeResponse, error) {
	m := new(SubscribeResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *serviceClient) Publish(ctx context.Context, in *PublishRequest, opts ...grpc.CallOption) (*PublishResponse, error) {
	out := new(PublishResponse)
	err := c.cc.Invoke(ctx, "/clientchannel.Service/Publish", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *serviceClient) GetStream(ctx context.Context, in *GetStreamRequest, opts ...grpc.CallOption) (*GetStreamResponse, error) {
	out := new(GetStreamResponse)
	err := c.cc.Invoke(ctx, "/clientchannel.Service/GetStream", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *serviceClient) GetEventsFromStart(ctx context.Context, in *GetEventsFromStartRequest, opts ...grpc.CallOption) (Service_GetEventsFromStartClient, error) {
	stream, err := c.cc.NewStream(ctx, &Service_ServiceDesc.Streams[1], "/clientchannel.Service/GetEventsFromStart", opts...)
	if err != nil {
		return nil, err
	}
	x := &serviceGetEventsFromStartClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type Service_GetEventsFromStartClient interface {
	Recv() (*PublishEventEnvelope, error)
	grpc.ClientStream
}

type serviceGetEventsFromStartClient struct {
	grpc.ClientStream
}

func (x *serviceGetEventsFromStartClient) Recv() (*PublishEventEnvelope, error) {
	m := new(PublishEventEnvelope)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *serviceClient) IntroduceGdprOnField(ctx context.Context, in *IntroduceGdprOnFieldRequest, opts ...grpc.CallOption) (*IntroduceGdprOnFieldResponse, error) {
	out := new(IntroduceGdprOnFieldResponse)
	err := c.cc.Invoke(ctx, "/clientchannel.Service/IntroduceGdprOnField", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *serviceClient) InvalidateGdpr(ctx context.Context, in *InvalidateGdprRequest, opts ...grpc.CallOption) (*InvalidateGdprResponse, error) {
	out := new(InvalidateGdprResponse)
	err := c.cc.Invoke(ctx, "/clientchannel.Service/InvalidateGdpr", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *serviceClient) Snapshot(ctx context.Context, in *SnapshotRequest, opts ...grpc.CallOption) (*SnapshotResponse, error) {
	out := new(SnapshotResponse)
	err := c.cc.Invoke(ctx, "/clientchannel.Service/Snapshot", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ServiceServer is the server API for Service service.
// All implementations must embed UnimplementedServiceServer
// for forward compatibility
type ServiceServer interface {
	Subscribe(Service_SubscribeServer) error
	Publish(context.Context, *PublishRequest) (*PublishResponse, error)
	GetStream(context.Context, *GetStreamRequest) (*GetStreamResponse, error)
	GetEventsFromStart(*GetEventsFromStartRequest, Service_GetEventsFromStartServer) error
	IntroduceGdprOnField(context.Context, *IntroduceGdprOnFieldRequest) (*IntroduceGdprOnFieldResponse, error)
	InvalidateGdpr(context.Context, *InvalidateGdprRequest) (*InvalidateGdprResponse, error)
	Snapshot(context.Context, *SnapshotRequest) (*SnapshotResponse, error)
	mustEmbedUnimplementedServiceServer()
}

// UnimplementedServiceServer must be embedded to have forward compatible implementations.
type UnimplementedServiceServer struct {
}

func (UnimplementedServiceServer) Subscribe(Service_SubscribeServer) error {
	return status.Errorf(codes.Unimplemented, "method Subscribe not implemented")
}
func (UnimplementedServiceServer) Publish(context.Context, *PublishRequest) (*PublishResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Publish not implemented")
}
func (UnimplementedServiceServer) GetStream(context.Context, *GetStreamRequest) (*GetStreamResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetStream not implemented")
}
func (UnimplementedServiceServer) GetEventsFromStart(*GetEventsFromStartRequest, Service_GetEventsFromStartServer) error {
	return status.Errorf(codes.Unimplemented, "method GetEventsFromStart not implemented")
}
func (UnimplementedServiceServer) IntroduceGdprOnField(context.Context, *IntroduceGdprOnFieldRequest) (*IntroduceGdprOnFieldResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method IntroduceGdprOnField not implemented")
}
func (UnimplementedServiceServer) InvalidateGdpr(context.Context, *InvalidateGdprRequest) (*InvalidateGdprResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method InvalidateGdpr not implemented")
}
func (UnimplementedServiceServer) Snapshot(context.Context, *SnapshotRequest) (*SnapshotResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Snapshot not implemented")
}
func (UnimplementedServiceServer) mustEmbedUnimplementedServiceServer() {}

// UnsafeServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ServiceServer will
// result in compilation errors.
type UnsafeServiceServer interface {
	mustEmbedUnimplementedServiceServer()
}

func RegisterServiceServer(s grpc.ServiceRegistrar, srv ServiceServer) {
	s.RegisterService(&Service_ServiceDesc, srv)
}

func _Service_Subscribe_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(ServiceServer).Subscribe(&serviceSubscribeServer{stream})
}

type Service_SubscribeServer interface {
	Send(*SubscribeResponse) error
	Recv() (*SubscribeRequest, error)
	grpc.ServerStream
}

type serviceSubscribeServer struct {
	grpc.ServerStream
}

func (x *serviceSubscribeServer) Send(m *SubscribeResponse) error {
	return x.ServerStream.SendMsg(m)
}

func (x *serviceSubscribeServer) Recv() (*SubscribeRequest, error) {
	m := new(SubscribeRequest)
	if err := x.ServerStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func _Service_Publish_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PublishRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServiceServer).Publish(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/clientchannel.Service/Publish",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServiceServer).Publish(ctx, req.(*PublishRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Service_GetStream_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetStreamRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServiceServer).GetStream(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/clientchannel.Service/GetStream",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServiceServer).GetStream(ctx, req.(*GetStreamRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Service_GetEventsFromStart_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(GetEventsFromStartRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(ServiceServer).GetEventsFromStart(m, &serviceGetEventsFromStartServer{stream})
}

type Service_GetEventsFromStartServer interface {
	Send(*PublishEventEnvelope) error
	grpc.ServerStream
}

type serviceGetEventsFromStartServer struct {
	grpc.ServerStream
}

func (x *serviceGetEventsFromStartServer) Send(m *PublishEventEnvelope) error {
	return x.ServerStream.SendMsg(m)
}

func _Service_IntroduceGdprOnField_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(IntroduceGdprOnFieldRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServiceServer).IntroduceGdprOnField(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/clientchannel.Service/IntroduceGdprOnField",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServiceServer).IntroduceGdprOnField(ctx, req.(*IntroduceGdprOnFieldRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Service_InvalidateGdpr_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(InvalidateGdprRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServiceServer).InvalidateGdpr(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/clientchannel.Service/InvalidateGdpr",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServiceServer).InvalidateGdpr(ctx, req.(*InvalidateGdprRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Service_Snapshot_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SnapshotRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServiceServer).Snapshot(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/clientchannel.Service/Snapshot",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServiceServer).Snapshot(ctx, req.(*SnapshotRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// Service_ServiceDesc is the grpc.ServiceDesc for Service service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Service_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "clientchannel.Service",
	HandlerType: (*ServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Publish",
			Handler:    _Service_Publish_Handler,
		},
		{
			MethodName: "GetStream",
			Handler:    _Service_GetStream_Handler,
		},
		{
			MethodName: "IntroduceGdprOnField",
			Handler:    _Service_IntroduceGdprOnField_Handler,
		},
		{
			MethodName: "InvalidateGdpr",
			Handler:    _Service_InvalidateGdpr_Handler,
		},
		{
			MethodName: "Snapshot",
			Handler:    _Service_Snapshot_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "Subscribe",
			Handler:       _Service_Subscribe_Handler,
			ServerStreams: true,
			ClientStreams: true,
		},
		{
			StreamName:    "GetEventsFromStart",
			Handler:       _Service_GetEventsFromStart_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "clientchannel/service.proto",
}
