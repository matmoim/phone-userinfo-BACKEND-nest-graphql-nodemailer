import { Body, Controller, Post } from '@nestjs/common';
import { UserInformation } from './dto/user.dto';

@Controller('user')
export class UserController {
  @Post()
    create(@Body() infUsrs: UserInformation): string {
        return `Name of User: ${infUsrs.name} `
    }
}
