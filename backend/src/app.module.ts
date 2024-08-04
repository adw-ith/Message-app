import { Module } from '@nestjs/common';

import { SocketModule } from './socket/socket.module';
import { GatewayModule } from './gateway/gateway.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [GatewayModule, SocketModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
