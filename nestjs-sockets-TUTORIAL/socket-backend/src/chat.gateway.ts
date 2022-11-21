import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect} from "@nestjs/websockets";

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
}
