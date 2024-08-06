import { Module } from '@nestjs/common';

import { SocketModule } from './socket/socket.module';
import { GatewayModule } from './gateway/gateway.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [GatewayModule, SocketModule, PrismaModule, UserModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
