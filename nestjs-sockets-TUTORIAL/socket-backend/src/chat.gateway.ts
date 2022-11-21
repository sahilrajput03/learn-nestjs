import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer, ConnectedSocket, OnGatewayConnection, OnGatewayDisconnect} from "@nestjs/websockets";

// Docs: https://docs.nestjs.com/websockets/gateways

export const SHARED_GATEWAY_OPTS = {
  cors: {
    origin: '*',
  },
  // Even though '/socket.io/' is the default path value for socket.io, we'll be explicit about it here.
  path: '/socket.io/',
  // we only want to support websocket connections (not interested in long polling at this time).
  transports: ["websocket"],
};


@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  // Docs: You may want to have a direct access to the native, platform-specific server instance, so use the @WebSocketServer() decorator:
  @WebSocketServer()
  server;

  handleConnection() {
    console.log('client connected')
    console.log("**Socket.IO Version: " + require('socket.io/package').version); // Output: **Socket.IO Version: 2.4.1
  }

  handleDisconnect(){}

  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string): void {
    this.server.emit('message', message);
  }

  // Docs: Passing `property key` to the decorator to extract it from the incoming message body:
  @SubscribeMessage('events')
  handleEvent(@MessageBody('id') id: number): number {
    // id === messageBody.id
    return id;
  }

  // Docs: If you would prefer not to use decorators, the following code is functionally equivalent:
  // Docs: This approach is not recommended though, because it requires mocking the socket instance in each unit test.
  @SubscribeMessage('events')
  handleEvent(client: Socket, data: string): string {
    return data;
  }

  @SubscribeMessage('events')
  handleEvent(@MessageBody() data: string, @ConnectedSocket() client: Socket): string {
    // Docs: It's possible to emit messages using a library-specific approach, for example:
    // Docs: client.emit()

    // Also:  In order to listen for messages emitted from within the above handler, the client has to attach a corresponding acknowledgment listener i.e.,
    // socket.emit('events', { name: 'Nest' }, (data) => console.log(data));

    return data;
  }
  // Docs: However, in this case, you won't be able to leverage interceptors. If you don't want to respond to the user, you can simply skip the return statement (or explicitly return a "falsy" value, e.g. undefined).

}
