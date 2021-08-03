import { Module } from '@nestjs/common';
import { PhoneNumberService } from './phone-number.service';
import {PhoneNumberResolver} from './phone-number.resolver';


@Module({
  providers: [PhoneNumberService,PhoneNumberResolver],
})
export class PhoneNumberModule {}
