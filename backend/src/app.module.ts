import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { SocketModule } from './socket/socket.module';
import { GatewayModule } from './gateway/gateway.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

import { LocalStrategy } from './auth/passport/local.strategy';
import { SessionSerializer } from './auth/passport/session.serializer';
import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';

@Module({
  imports: [
    PassportModule.register({ session: true }),
    GatewayModule,
    SocketModule,
    PrismaModule,
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [LocalStrategy, SessionSerializer, AuthService, UserService],
})
export class AppModule {}
