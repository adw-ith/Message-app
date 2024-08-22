// message.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Message, GroupMessage, BroadcastMessage } from '@prisma/client';

@Injectable()
export class MessagesService {
  constructor(private readonly prisma: PrismaService) {}

  async sendPrivateMessage(
    senderId: number,
    receiverId: number,
    content: string,
  ): Promise<Message> {
    return this.prisma.message.create({
      data: {
        content,
        senderId,
        receiverId,
      },
      include: {
        sender: true,
        receiver: true,
      },
    });
  }

  async sendGroupMessage(
    senderId: number,
    groupId: number,
    content: string,
  ): Promise<GroupMessage> {
    return this.prisma.groupMessage.create({
      data: {
        content,
        senderId,
        groupId,
      },
      include: {
        sender: true,
        group: true,
      },
    });
  }

  async sendBroadcastMessage(
    senderId: number,
    broadcastId: number,
    content: string,
  ): Promise<BroadcastMessage> {
    return this.prisma.broadcastMessage.create({
      data: {
        content,
        senderId,
        broadcastId,
      },
      include: {
        sender: true,
        broadcast: true,
      },
    });
  }
}
