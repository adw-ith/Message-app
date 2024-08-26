import { Body, Controller, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('signup')
  signup(@Body() dto: any, @Req() req) {
    return this.userService.signup(dto);
  }
}
