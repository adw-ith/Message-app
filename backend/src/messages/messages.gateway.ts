// message.gateway.ts

import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { MessagesService } from './messages.service';

@WebSocketGateway({ cors: true })
export class MessageGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly messageService: MessagesService) {}

  @SubscribeMessage('sendPrivateMessage')
  async handleSendPrivateMessage(
    @MessageBody()
    data: { senderId: number; receiverId: number; content: string },
    @ConnectedSocket() client: Socket,
  ) {
    const message = await this.messageService.sendPrivateMessage(
      data.senderId,
      data.receiverId,
      data.content,
    );
    this.server
      .to(data.receiverId.toString())
      .emit('receivePrivateMessage', message);
  }

  @SubscribeMessage('sendGroupMessage')
  async handleSendGroupMessage(
    @MessageBody() data: { senderId: number; groupId: number; content: string },
    @ConnectedSocket() client: Socket,
  ) {
    const message = await this.messageService.sendGroupMessage(
      data.senderId,
      data.groupId,
      data.content,
    );
    this.server
      .to(data.groupId.toString())
      .emit('receiveGroupMessage', message);
  }

  @SubscribeMessage('sendBroadcastMessage')
  async handleSendBroadcastMessage(
    @MessageBody()
    data: { senderId: number; broadcastId: number; content: string },
    @ConnectedSocket() client: Socket,
  ) {
    const message = await this.messageService.sendBroadcastMessage(
      data.senderId,
      data.broadcastId,
      data.content,
    );
    this.server.emit('receiveBroadcastMessage', message);
  }

  handleConnection(client: Socket) {
    console.log('Client connected:', client.id);
  }

  handleDisconnect(client: Socket) {
    console.log('Client disconnected:', client.id);
  }
}
