import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';

import { MessageGateway } from './messages.gateway';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [MessagesService, MessageGateway],
  controllers: [],
})
export class MessagesModule {}
