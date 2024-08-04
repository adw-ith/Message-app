import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocketModule } from './socket/socket.module';
import { GatewayModule } from './gateway/gateway.module';

@Module({
  imports: [GatewayModule, SocketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
