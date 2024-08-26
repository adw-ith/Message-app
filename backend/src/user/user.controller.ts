import { Body, Controller, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('signup')
  signup(@Body() dto: UserDto, @Req() req) {
    return this.userService.signup(dto);
  }
}
