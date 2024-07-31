import { OnModuleInit } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
    credentials: true,
  },
})
export class MyGateway implements OnModuleInit {
  @WebSocketServer()
  server: Server;

  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log('New client connected: ' + socket.id);
    });
  }

  @SubscribeMessage('message')
  onMessage(@MessageBody() body: any) {
    console.log('received message', body);
    this.server.emit('onMessage', {
      message: body,
    });
  }
}
