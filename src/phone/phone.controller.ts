import { Body, Controller, Post } from '@nestjs/common';
import { WriteNumber } from './dto/phone.dto';

@Controller('phone')
export class PhoneController {
  @Post()
    create(@Body() phnumbers: WriteNumber): string {
        return `Number from user: ${phnumbers.phoneNumber}`
    }
}
